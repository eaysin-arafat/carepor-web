import { RootState } from "@/app/store";
import { Option } from "@/components/core/form-elements/MultipleSelect";
import { EnumEncounterType } from "@/enum/encounter-type";
import { useUpdateHTSMutation } from "@/features/hts/hts-api";
import { closeEditModal } from "@/features/modal/modal-slice";
import useBaseModel from "@/hooks/useBaseModel";
import useClient from "@/hooks/useClient";
import useEncounter from "@/hooks/useEncounter";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { HtsData, HtsErrorMessages } from "../create/useHtsCreate";

const initialState = {
  lastTestResult: "",
  partnerHIVStatus: "",
  biolineTestResult: "",
  hivType: "",

  hasConsented: "false",
  hasCounselled: "false",
  isDNAPCRSampleCollected: "false",
  isResultReceived: "false",
  consentForSMS: "false",

  clientTypeId: "",
  visitTypeId: "",
  servicePointId: "",
  clientSource: "",
  hivTestingReasonId: "",
  lastTested: null,
  partnerLastTestDate: null,
  hivNotTestingReasonId: "",
  notTestingReason: "",
  testNo: "",
  determineTestResult: "",
  sampleCollectionDate: null,
  retestDate: null,
};

const useEdit = () => {
  const { editModal } = useSelector((state: RootState) => state.modal);

  const [htsData, setHtsData] = React.useState<HtsData>(
    editModal?.data
      ? {
          ...editModal?.data,
          hasCounselled:
            editModal?.data?.hasCounselled == 1
              ? "true"
              : editModal?.data?.hasCounselled == 2
              ? "false"
              : "",
        }
      : initialState
  );
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);
  const [errorMessages, setErrorMessages] = React.useState<HtsErrorMessages>(
    {}
  );

  const dispatch = useDispatch();
  const baseData = useBaseModel({});
  const client = useClient();
  const encounter = useEncounter(EnumEncounterType.HTS);

  // api hooks
  const [updateHTS, { isLoading, isSuccess, isError, error, status }] =
    useUpdateHTSMutation();

  const closeModal = () => {
    dispatch(closeEditModal());
  };

  const handleHtsDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHtsData((prev) => ({ ...prev, [name]: value }));
    setErrorMessages((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDateChange = (date: Date | null, fieldName: string) => {
    setHtsData((prev) => ({ ...prev, [fieldName]: date.toISOString() }));
    setErrorMessages((prev) => ({ ...prev, [fieldName]: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      ...baseData,
      ...htsData,
      ...encounter,

      hasConsented: htsData?.hasConsented
        ? JSON.parse(htsData.hasConsented)
        : null,
      hasCounselled: htsData?.hasCounselled
        ? JSON.parse(htsData.hasCounselled)
        : null,
      isDNAPCRSampleCollected: htsData?.isDNAPCRSampleCollected
        ? JSON.parse(htsData.isDNAPCRSampleCollected)
        : null,
      isResultReceived: htsData?.isResultReceived
        ? JSON.parse(htsData.isResultReceived)
        : null,
      consentForSMS: htsData?.consentForSMS
        ? JSON.parse(htsData.consentForSMS)
        : null,

      determineTestResult: htsData?.determineTestResult || null,
      riskAssessmentList: selectedOptions.map((option) => option.oid),
      clientId: client?.oid,
    };

    updateHTS({ key: editModal?.data?.interactionId, body: payload });
  };

  // handle side effects
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeEditModal());
      toast.dismiss();
      toast.success("HTS updated successfully");
      setHtsData(initialState);
      setSelectedOptions([]);
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string" ? error.data : "Error updating HTS"
      );
    }
  }, [isSuccess, isError, status, error, dispatch]);

  return {
    htsData,
    errorMessages,
    handleHtsDataChange,
    handleDateChange,
    handleSubmit,
    status,
    closeModal,
    isLoading,
    selectedOptions,
    setSelectedOptions,
  };
};

export default useEdit;
