import { useCreateFirmMutation } from "@/features/firm/firm-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const useCreate = () => {
  const [firmName, setFirmName] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const dispatch = useDispatch();

  const { departmentId } = useParams();

  const toggler = () => {
    dispatch(closeAddModal());
  };

  const [createFirm, { isLoading, isSuccess, isError, error, status }] =
    useCreateFirmMutation();

  const handleFirmNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirmName(e.target.value);
    setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firmName) {
      setErrorMsg("Required");
      return;
    }

    const data = {
      description: firmName,
      departmentId: departmentId,
    };

    createFirm(data);
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeAddModal());
      toast.dismiss();
      toast.success("Firm Created Successfully");
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string" ? error.data : "Error creating firm"
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
    status,
  };
};

export default useCreate;
