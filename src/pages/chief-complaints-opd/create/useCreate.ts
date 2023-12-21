import { useAppSelector } from "@/app/store";
import { complaintsModalTypes } from "@/constants/modal-types";
import {
  ChiefComplaint,
  chiefComplaintApiEndpoints,
  useCreateChiefComplaintMutation,
} from "@/features/chief-complaint/chief-complaint-api";
import { closeAddModal, openEditModal } from "@/features/modal/modal-slice";
import useBaseModel from "@/hooks/useBaseModel";
import useClient from "@/hooks/useClient";
import useEncounter from "@/hooks/useEncounter";
import { filterByEncounterCopy } from "@/utilities/transformation";
import { createChiefComplaintsValidator } from "@/validation-models/chief-complaints/create-chief-complaints";
import React, { useMemo } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  ComplaintsAndHistoriesErrorType,
  ComplaintsAndHistoriesStateType,
  OptionItem,
  complaintsAndHistoryInitialState,
  serostatusAndDisclosureData,
} from "../constant";

const useCreate = ({ encounterType }) => {
  // complaints and history user input
  const [complaintsAndHistoryData, setComplaintsAndHistoryData] =
    React.useState<ComplaintsAndHistoriesStateType>(
      complaintsAndHistoryInitialState
    );

  // serostatus
  const [serostatusDisclosure, setSerostatusDisclosure] = React.useState<
    OptionItem[]
  >(serostatusAndDisclosureData);

  // validation error messages
  const [errorMsg, setErrorMsg] =
    React.useState<ComplaintsAndHistoriesErrorType>({});

  // builtin hooks and custom hooks
  const client = useClient();
  const encounter = useEncounter(encounterType);
  const baseData = useBaseModel({});
  const dispatch = useDispatch();

  // select past complaints and histories
  const selectComplaintsAndHistories = useMemo(
    () =>
      chiefComplaintApiEndpoints?.readChiefComplaintByClient?.select(
        client?.oid
      ),
    [client?.oid]
  );
  const {
    data: complaintsAndHistories,
    isLoading,
    status,
  } = useAppSelector(selectComplaintsAndHistories);

  // api mutation hooks
  const [
    createComplaintsAndHistory,
    {
      isLoading: isCreating,
      isSuccess: isCreateSuccess,
      isError: isCreateError,
      status: createStatus,
      error: createError,
    },
  ] = useCreateChiefComplaintMutation();

  // input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setComplaintsAndHistoryData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrorMsg((prev) => ({ ...prev, [name]: "" }));
  };

  // serostatus and disclosure handler
  const handleSerostatusDisClosureChange = (id: number) => {
    // deselect all items
    const updatedSerostatus = serostatusAndDisclosureData.map((item) =>
      item.id === id ? { ...item, isSelected: true } : item
    );
    setSerostatusDisclosure(updatedSerostatus);
    setErrorMsg((prev) => ({ ...prev, hivStatus: "" }));
  };

  const handleEdit = (item: ChiefComplaint) => {
    dispatch(closeAddModal());
    dispatch(
      openEditModal({
        modalId: complaintsModalTypes.editPresentingComplaints,
        data: item,
      })
    );
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { isValid, error } = createChiefComplaintsValidator({
      ...complaintsAndHistoryData,
      hivStatus: serostatusDisclosure?.find((item) => item.isSelected)?.id,
    });

    // if data are not valid set error state
    if (!isValid) return setErrorMsg(error);

    // payload
    const payload = {
      ...baseData,
      ...encounter,
      clientId: client?.oid,
      ...complaintsAndHistoryData,
      hivStatus: serostatusDisclosure?.find((item) => item.isSelected)?.id,
    };

    // create chief complaints
    createComplaintsAndHistory(payload);
  };

  // filtered encountered specific chief complaints
  const filteredChiefComplaints = useMemo(
    () =>
      filterByEncounterCopy(
        complaintsAndHistories?.slice(),
        "encounterType",
        encounterType
      ),
    [complaintsAndHistories, encounterType]
  );

  // handle create side Effects
  React.useEffect(() => {
    if (isCreateSuccess && createStatus === "fulfilled") {
      toast.dismiss();
      toast.success("Chief complaints create successfully");
      setComplaintsAndHistoryData(complaintsAndHistoryInitialState);
      setSerostatusDisclosure(serostatusAndDisclosureData);
    } else if (isCreateError && "data" in createError) {
      toast.dismiss();
      toast.error(
        typeof createError.data === "string"
          ? createError?.data
          : "Error creating chief complaints"
      );
    }
  }, [isCreateSuccess, createStatus, isCreateError, createError]);

  return {
    complaintsAndHistoryData,
    serostatusDisclosure,
    errorMsg,
    isLoading,
    isCreating,
    filteredChiefComplaints,
    handleChange,
    handleSerostatusDisClosureChange,
    handleSubmit,
    status,
    handleEdit,
  };
};

export default useCreate;
