import { useCreateBedMutation } from "@/features/bed/bed-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const useCreate = () => {
  const [bedName, setBedName] = React.useState("");
  const [errMsg, setErrMsg] = React.useState("");

  const dispatch = useDispatch();
  const { wardId } = useParams();

  const [createBed, { status, isSuccess, isError, error, isLoading }] =
    useCreateBedMutation();

  const toggler = () => {
    dispatch(closeAddModal());
  };

  const handleBedNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBedName(e.target.value);
    setErrMsg("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (bedName.trim() === "") {
      setErrMsg("Required");
      return;
    }

    const data = {
      description: bedName,
      wardId,
    };

    createBed(data);
  };

  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Bed created successfully");
      dispatch(closeAddModal());
      setBedName("");
      setErrMsg("");
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string" ? error.data : "Error creating bed"
      );
    }
  }, [isSuccess, isError, status, error, dispatch]);

  return {
    bedName,
    errMsg,
    isLoading,
    status,
    toggler,
    handleSubmit,
    handleBedNameChange,
  };
};

export default useCreate;
