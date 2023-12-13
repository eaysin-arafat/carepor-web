import { RootState } from "@/app/store";
import { useUpdateDepartmentMutation } from "@/features/department/department-api";
import { closeEditModal } from "@/features/modal/modal-slice";
import useBaseModel from "@/hooks/useBaseModel";
import { FacilityToken } from "@/types/coreTypes";
import { cookieManager } from "@/utilities/cookie-manager";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const useEdit = () => {
  // data from redux store
  const { editModal } = useSelector((state: RootState) => state.modal);

  // local state
  const [departmentName, setDepartmentName] = useState(
    editModal?.data?.description
  );
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  // cookie data
  const facility = cookieManager.parseCookie<FacilityToken>("facility");

  // api hooks
  const [updateDepartment, { isLoading, isError, status, isSuccess, error }] =
    useUpdateDepartmentMutation();

  const baseModel = useBaseModel({
    ...editModal?.data,
    modifiedBy: null,
    modifiedIn: null,
    dateModified: null,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      ...baseModel,
      FacilityId: facility?.facilityId,
      oid: editModal?.data?.oid,
      Description: departmentName,
    };

    updateDepartment(payload);
  };

  const handleDepartmentNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDepartmentName(e.target.value);
    setErrorMsg("");
  };

  const toggler = () => {
    dispatch(closeEditModal());
  };

  // handle side effects
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeEditModal());
      toast.dismiss();
      toast.success("Department Updated Successfully");
    } else if (isError && "data" in error) {
      setErrorMsg(
        typeof error.data === "string"
          ? error.data
          : "Error updating department"
      );
    }
  }, [isError, isSuccess, status, error, dispatch]);

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

export default useEdit;
