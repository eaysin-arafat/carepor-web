import { closeAddModal } from "@/features/modal/modal-slice";
import { useCreateWardMutation } from "@/features/ward/ward-api";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const useCreate = () => {
  const [wardName, setWardName] = React.useState("");
  const [errMsg, setErrMsg] = React.useState("");

  const handleWardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWardName(e.target.value);
    setErrMsg("");
  };

  const dispatch = useDispatch();
  const { firmId } = useParams();

  // api hooks
  const [createWard, { isLoading, isError, isSuccess, error, status }] =
    useCreateWardMutation();

  const toggler = () => {
    dispatch(closeAddModal());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!wardName) {
      setErrMsg("Required");
      return;
    }

    const data = {
      description: wardName,
      firmId: firmId,
    };

    createWard(data);
  };

  // handle side effects
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeAddModal());
      toast.dismiss();
      toast.success("Ward created successfully");
    }
    if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error?.data === "string" ? error?.data : "Error creating ward"
      );
    }
  }, [isError, error, isSuccess, status, dispatch]);

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

export default useCreate;
