import { useCreateDepartmentMutation } from "@/features/department/department-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import { FacilityToken } from "@/types/coreTypes";
import { cookieManager } from "@/utilities/cookie-manager";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const useCreate = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const facility = cookieManager.parseCookie<FacilityToken>("facility");

  // api hooks
  const [createDepartment, { isLoading, status, error, isError }] =
    useCreateDepartmentMutation();

  const handleDepartmentNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDepartmentName(e.target.value);
    setErrorMsg("");
  };

  const toggler = () => {
    dispatch(closeAddModal());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (departmentName === "") {
      setErrorMsg("Required");
    }

    const data = {
      Description: departmentName,
      FacilityId: facility?.facilityId ?? 0,
    };

    createDepartment(data);
  };

  // handle side effects
  React.useEffect(() => {
    if (status === "fulfilled") {
      dispatch(closeAddModal());
      toast.dismiss();
      toast.success("Department created successfully");
    } else if (status === "rejected") {
      toast.dismiss();
      if ("data" in error) {
        toast.error(
          typeof error?.data === "string" ? error?.data : "Something went wrong"
        );
      }
    }
  }, [status, dispatch, isError, error]);

  return {
    departmentName,
    handleDepartmentNameChange,
    handleSubmit,
    isLoading,
    errorMsg,
    toggler,
    status,
  };
};

export default useCreate;
