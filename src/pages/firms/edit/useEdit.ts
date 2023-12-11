import { RootState } from "@/app/store";
import { useUpdateFirmMutation } from "@/features/firm/firm-api";
import { closeEditModal } from "@/features/modal/modal-slice";
import useBaseModel from "@/hooks/useBaseModel";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useEdit = () => {
  const { editModal } = useSelector((state: RootState) => state.modal);

  const [firmName, setFirmName] = useState(editModal.data?.description ?? "");
  const [errorMsg, setErrorMsg] = useState("");

  const dispatch = useDispatch();
  const { departmentId } = useParams();
  const toggler = () => {
    dispatch(closeEditModal());
  };

  const baseModel = useBaseModel({
    ...editModal?.data,
    modifiedBy: null,
    dateModified: null,
    modifiedIn: null,
  });

  // api hooks
  const [editFirm, { isLoading, status, isSuccess, isError, error }] =
    useUpdateFirmMutation();

  const handleFirmNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirmName(e.target.value);
    setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firmName === "") {
      setErrorMsg("Required");
      return;
    }

    const payload = {
      ...baseModel,
      description: firmName,
      departmentId: departmentId,
      oid: editModal?.data?.oid,
    };

    editFirm(payload);
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeEditModal());
      toast.dismiss();
      toast.success("Edit Firm Successfully");
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string" ? error.data : "Error updating firm"
      );
    }
  }, [isSuccess, isError, status, error, dispatch]);

  return {
    firmName,
    errorMsg,
    isLoading,
    toggler,
    handleSubmit,
    handleFirmNameChange,
  };
};

export default useEdit;
