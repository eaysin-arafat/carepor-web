import { RootState } from "@/app/store";
import { useUpdateBedMutation } from "@/features/bed/bed-api";
import { closeEditModal } from "@/features/modal/modal-slice";
import useBaseModel from "@/hooks/useBaseModel";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useEdit = () => {
  const { editModal } = useSelector((state: RootState) => state.modal);

  // local state
  const [bedName, setBedName] = useState(editModal?.data?.description ?? "");
  const [errMsg, setErrMsg] = useState("");

  // hooks
  const dispatch = useDispatch();
  const { wardId } = useParams();
  const baseModel = useBaseModel({
    ...editModal?.data,
    modifiedBy: null,
    modifiedIn: null,
    dateModified: null,
  });

  // api hooks
  const [updateBed, { isSuccess, isLoading, isError, error, status }] =
    useUpdateBedMutation();

  // handlers
  const handleBedNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBedName(e.target.value);
    setErrMsg("");
  };

  const toggler = () => {
    dispatch(closeEditModal());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (bedName.trim() === "") {
      setErrMsg("Required");
      return;
    }

    const payload = {
      ...baseModel,
      description: bedName,
      wardId,
      oid: editModal?.data?.oid,
    };

    updateBed(payload);
  };

  // side effects
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeEditModal());
      toast.dismiss();
      toast.success("Bed updated successfully");
      setBedName("");
      setErrMsg("");
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string" ? error.data : "Error updating bed"
      );
    }
  }, [isSuccess, isError, status, error, dispatch]);

  // return
  return {
    bedName,
    errMsg,
    toggler,
    handleSubmit,
    isLoading,
    handleBedNameChange,
    status,
  };
};

export default useEdit;
