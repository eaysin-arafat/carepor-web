import { RootState } from "@/app/store";
import { useUpdateEncounterMutation } from "@/features/medical-encounter/medical-encounter-api";
import { closeEditModal } from "@/features/modal/modal-slice";
import { FacilityToken } from "@/types/coreTypes";
import { cookieManager } from "@/utilities/cookie-manager";
import {
  DischargeErrorType,
  clientDischargeValidator,
} from "@/validation-models/client-discharge";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const initialState = {
  ipdDischargeDate: new Date(
    new Date().toISOString().split("T")[0]
  ).toISOString(),
  dischargeNote: "",
};

const initialErrorState = {
  ipdDischargeDate: "",
  dischargeNote: "",
};

const useDischarge = () => {
  // get data from redux store
  const { user } = useSelector((state: RootState) => state.authentication);
  const { editModal } = useSelector((state: RootState) => state.modal);

  // local state
  const [dischargeData, setDischargeData] = useState(initialState);
  const [errMsg, setErrMsg] = useState<DischargeErrorType>(initialErrorState);

  // hooks and variables
  const dispatch = useDispatch();
  const { clientId } = useParams();
  const facility = cookieManager.parseCookie<FacilityToken>("facility");

  // api hooks
  // const [clientDischarge, { isLoading, isSuccess, isError, error, status }] =
  //   useUpdateAdmissionMutation();

  const [clientDischarge, { isLoading, isSuccess, isError, error, status }] =
    useUpdateEncounterMutation();

  // handlers
  const handleDischargeDataChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setDischargeData((prevState) => ({ ...prevState, [name]: value }));
    setErrMsg((prevState) => ({ ...prevState, [name]: "" }));
  };

  const handleDateChange = (date: Date | null) => {
    setDischargeData((prevState) => ({
      ...prevState,
      ipdDischargeDate: new Date(
        date.toISOString().split("T")[0]
      ).toISOString(),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate data
    const { isValid, errors } = clientDischargeValidator(dischargeData);
    if (!isValid) return setErrMsg(errors);

    // submit data
    const data = {
      modifiedIn: facility?.facilityId,
      dateModified: new Date(
        new Date().toISOString().split("T")[0]
      ).toISOString(),
      modifiedBy: user?.oid,
      clientID: clientId,
      admissionID: editModal?.data?.oid,
      bedID: editModal?.data?.bed?.oid,
      admissionDate: editModal?.data?.ipdAdmissionDate,
    };

    clientDischarge({
      key: data.admissionID,
      body: { ...data, ...dischargeData },
    });
  };

  const closeModal = () => {
    dispatch(closeEditModal());
  };

  // handle side effects
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeEditModal());
      toast.dismiss();
      toast.success("Discharge successful");
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error("Failed to discharge");
    }
  }, [isSuccess, isError, status, error, dispatch]);

  return {
    dischargeData,
    errMsg,
    isLoading,
    closeModal,
    handleDateChange,
    handleSubmit,
    handleDischargeDataChange,
    editModal,
  };
};

export default useDischarge;
