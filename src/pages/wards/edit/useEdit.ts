import { RootState } from "@/app/store";
import { closeEditModal } from "@/features/modal/modal-slice";
import { useUpdateWardMutation } from "@/features/ward/ward-api";
import useBaseModel from "@/hooks/useBaseModel";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useEdit = () => {
  const { editModal } = useSelector((state: RootState) => state.modal);

  // * local state
  const [wardName, setWardName] = React.useState(
    editModal.data?.description ?? ""
  );
  const [errMsg, setErrMsg] = React.useState("");

  const dispatch = useDispatch();
  const { firmId } = useParams();
  const baseModel = useBaseModel({
    ...editModal?.data,
    modifiedBy: null,
    modifiedIn: null,
    dateModified: null,
  });

  const [updateWard, { isLoading, isSuccess, isError, error, status }] =
    useUpdateWardMutation();

  const toggler = () => {
    dispatch(closeEditModal());
  };

  const handleWardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWardName(e.target.value);
    setErrMsg("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (wardName?.trim() === "") {
      setErrMsg("Required");
      return;
    }

    const payload = {
      ...baseModel,
      description: wardName,
      firmId: firmId,
      oid: editModal?.data?.oid,
    };

    updateWard(payload);
  };

  // * handle side effects
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeEditModal());
      toast.dismiss();
      toast.success("Ward updated successfully");
      setWardName("");
      setErrMsg("");
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string" ? error.data : "Error updating ward"
      );
    }
  }, [isSuccess, isError, error, status, dispatch]);

  return {
    wardName,
    errMsg,
    toggler,
    handleSubmit,
    isLoading,
    handleWardNameChange,
    status,
  };
};

export default useEdit;
