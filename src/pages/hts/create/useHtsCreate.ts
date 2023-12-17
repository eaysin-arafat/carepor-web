import { Option } from "@/components/core/form-elements/MultipleSelect";
import { EnumEncounterType } from "@/enum/encounter-type";
import { useCreateHTSMutation } from "@/features/hts/hts-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import useBaseModel from "@/hooks/useBaseModel";
import useClient from "@/hooks/useClient";
import useEncounter from "@/hooks/useEncounter";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export interface HtsErrorMessages {
  lastTestResult?: string;
  partnerHIVStatus?: string;
  biolineTestResult?: string;
  hivType?: string;

  hasConsented?: string;
  hasCounselled?: string;
  isDNAPCRSampleCollected?: string;
  isResultReceived?: string;
  consentForSMS?: string;

  clientTypeId?: string;
  visitTypeId?: string;
  servicePointId?: string;
  clientSource?: string;
  hivTestingReasonId?: string;
  lastTested?: string;
  partnerLastTestDate?: string;
  hivNotTestingReasonId?: string;
  notTestingReason?: string;
  testNo?: string;
  determineTestResult?: string;
  sampleCollectionDate?: string;
  retestDate?: string;
}

export interface HtsData {
  lastTestResult: string;
  partnerHIVStatus: string;
  biolineTestResult: string;
  hivType: string;

  hasConsented: string;
  hasCounselled: string;
  isDNAPCRSampleCollected: string;
  isResultReceived: string;
  consentForSMS: string;

  clientTypeId: string;
  visitTypeId: string;
  servicePointId: string;
  clientSource: string;
  hivTestingReasonId: string;
  lastTested: string;
  partnerLastTestDate: string;
  hivNotTestingReasonId: string;
  notTestingReason: string;
  testNo: string;
  determineTestResult: string;
  sampleCollectionDate: string;
  retestDate: string;
}
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

const useHtsCreate = () => {
  const [htsData, setHtsData] = React.useState(initialState);
  const [selectedOptions, setSelectedOptions] = React.useState<Option[]>([]);
  const [errorMessages, setErrorMessages] = React.useState<HtsErrorMessages>(
    {}
  );

  const dispatch = useDispatch();
  const baseData = useBaseModel({});
  const client = useClient();
  const encounter = useEncounter(EnumEncounterType.HTS);

  // api hooks
  const [createHts, { isLoading, isSuccess, isError, error, status }] =
    useCreateHTSMutation();

  const closeModal = () => {
    dispatch(closeAddModal());
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

    createHts(payload);
  };

  // handle side effects
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeAddModal());
      toast.dismiss();
      toast.success("HTS created successfully");
      setHtsData(initialState);
      setSelectedOptions([]);
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string" ? error.data : "Error creating HTS"
      );
    }
  }, [isSuccess, isError, status, error, dispatch]);

  return {
    htsData,
    errorMessages,
    handleHtsDataChange,
    handleDateChange,
    handleSubmit,
    closeModal,
    isLoading,
    status,
    selectedOptions,
    setSelectedOptions,
  };
};

export default useHtsCreate;
