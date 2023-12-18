import { RootState } from "@/app/store";
import { closeEditModal } from "@/features/modal/modal-slice";
import { useUpdateVitalMutation } from "@/features/vital/vital-api";
import useBaseModel from "@/hooks/useBaseModel";
import { Client } from "@/interface/clients";
import { cookieManager } from "@/utilities/cookie-manager";
import { vitalsCreateValidator } from "@/validation-models/vitals-create";
import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { VitalDataType, VitalErrorType } from "../create/useCreate";

const initialVitalData = {
  lastTested: null,
  weight: "",
  height: "",
  bmi: "",
  systolic: "",
  systolicIfUnrecordable: "",
  diastolic: "",
  diastolicIfUnrecordable: "",
  temperature: "",
  pulseRate: "",
  respiratoryRate: "",
  oxygenSaturation: "",
  muac: "",
  muacScore: "",
  abdominalCircumference: "",
  headCircumference: "",
  hcScore: "",
  randomBloodSugar: "",
  comment: "",
  vitalsDate: null,
};

const initialVitalErrors = {
  lastTested: null,
  weight: "",
  height: "",
  bmi: "",
  systolic: "",
  systolicIfUnrecordable: "",
  diastolic: "",
  diastolicIfUnrecordable: "",
  temperature: "",
  pulseRate: "",
  respiratoryRate: "",
  oxygenSaturation: "",
  muac: "",
  muacScore: "",
  abdominalCircumference: "",
  headCircumference: "",
  hcScore: "",
  randomBloodSugar: "",
  comment: "",
  vitalsDate: null,
};

const numberInputs = [
  "weight",
  "height",
  "systolic",
  "diastolic",
  "temperature",
  "pulseRate",
  "respiratoryRate",
  "oxygenSaturation",
  "muac",
  "abdominalCircumference",
  "headCircumference",
];

const useEdit = () => {
  const { editModal } = useSelector((state: RootState) => state.modal);

  const [vitalData, setVitalData] = useState<VitalDataType>(
    editModal?.data
      ? {
          ...editModal?.data,
          systolic:
            editModal?.data?.systolic === -1 ? "" : editModal?.data?.systolic,
          diastolic:
            editModal?.data?.diastolic === -1 ? "" : editModal?.data?.diastolic,
        }
      : initialVitalData
  );

  const [errorMessages, setErrorMessages] =
    useState<VitalErrorType>(initialVitalErrors);

  const dispatch = useDispatch();
  const baseModel = useBaseModel({});

  // api hooks
  const [updateVital, { isLoading, isSuccess, status, isError, error }] =
    useUpdateVitalMutation();

  const handleVitalDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (numberInputs.includes(name)) {
      if (isNaN(+value)) {
        setErrorMessages((prev) => ({ ...prev, [name]: "Invalid input" }));
        return;
      }
    }

    setVitalData((prev) => ({ ...prev, [name]: value }));
    setErrorMessages((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDateChange = (date: Date | null) => {
    setVitalData((prev) => ({ ...prev, vitalsDate: date?.toISOString() }));
    setErrorMessages((prev) => ({ ...prev, vitalsDate: "" }));
  };

  const handleBmiChange = useCallback((bmi: string) => {
    setVitalData((prev) => ({ ...prev, bmi }));
  }, []);

  const handleHeadCircumferenceChange = useCallback((hcScore: string) => {
    setVitalData((prev) => ({ ...prev, hcScore }));
  }, []);

  const handleMuacChange = useCallback((muacScore: string) => {
    setVitalData((prev) => ({ ...prev, muacScore }));
  }, []);

  const closeModal = () => {
    dispatch(closeEditModal());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error, isValid } = vitalsCreateValidator({
      ...vitalData,
      systolicIfUnrecordable: vitalData?.diastolicIfUnrecordable,
    });

    if (!isValid) return setErrorMessages(error);

    const data = {
      ...vitalData,
      ...baseModel,
      diastolicIfUnrecordable: vitalData.diastolicIfUnrecordable || 0,
      systolicIfUnrecordable: vitalData.diastolicIfUnrecordable || 0,
      lastTested: vitalData?.vitalsDate,
      encounterId: cookieManager.parseCookie<{ oid: string }>("opdVisitSession")
        .oid,
      encounterType: 18,
      clientId: cookieManager.parseCookie<Client>("client")?.oid,
    };

    updateVital({ key: editModal?.data?.oid, body: data });
  };

  // handle side effects
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeEditModal());
      toast.dismiss();
      toast.success("Vital created successfully");
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string" ? error.data : "Error creating vital"
      );
    }
  }, [isSuccess, isError, status, error, dispatch]);

  return {
    vitalData,
    errorMessages,
    isLoading,
    handleVitalDataChange,
    handleDateChange,
    handleBmiChange,
    handleHeadCircumferenceChange,
    handleMuacChange,
    handleSubmit,
    closeModal,
    status,
  };
};

export default useEdit;
