import { RootState, useAppSelector } from "@/app/store";
import {
  ChiefComplaint,
  chiefComplaintApiEndpoints,
  useUpdateChiefComplaintMutation,
} from "@/features/chief-complaint/chief-complaint-api";
import { updateEditModalData } from "@/features/modal/modal-slice";
import useBaseModel from "@/hooks/useBaseModel";
import useClient from "@/hooks/useClient";
import useEncounter from "@/hooks/useEncounter";
import {
  filterBy24HoursCopy,
  filterByEncounterCopy,
} from "@/utilities/transformation";
import { createChiefComplaintsValidator } from "@/validation-models/chief-complaints/create-chief-complaints";
import React, { useMemo } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  ComplaintsAndHistoriesErrorType,
  ComplaintsAndHistoriesStateType,
  OptionItem,
  complaintsAndHistoryInitialState,
  serostatusAndDisclosureData,
} from "../constant";

const useEdit = ({ encounterType }) => {
  const { editModal } = useSelector((state: RootState) => state.modal);

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
    updateComplaintsAndHistory,
    {
      isLoading: isUpdating,
      isSuccess: isUpdateSuccess,
      isError: isUpdateError,
      status: updateStatus,
      error: updateError,
    },
  ] = useUpdateChiefComplaintMutation();

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

  const handleEditItem = (item: ChiefComplaint) => {
    dispatch(updateEditModalData({ data: item }));
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
      ...editModal?.data,
      ...baseData,
      ...encounter,
      clientId: client?.oid,
      ...complaintsAndHistoryData,
      hivStatus: serostatusDisclosure?.find((item) => item.isSelected)?.id,
    };

    // create chief complaints
    updateComplaintsAndHistory({
      key: editModal?.data?.interactionId,
      body: payload,
    });
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

  const editableData = useMemo(
    () => filterBy24HoursCopy(filteredChiefComplaints?.slice()),
    [filteredChiefComplaints]
  );

  // set edit data when modal data change
  React.useEffect(() => {
    if (editModal?.data) {
      setComplaintsAndHistoryData((prevState) => ({
        ...prevState,
        chiefComplaints: editModal?.data?.chiefComplaints,
        historyOfChiefComplaint: editModal?.data?.historyOfChiefComplaint,
      }));
      const updatedSerostatus = serostatusAndDisclosureData.map((item) =>
        item.id === editModal?.data?.hivStatus
          ? { ...item, isSelected: true }
          : item
      );
      setSerostatusDisclosure(updatedSerostatus);
    }
  }, [editModal?.data]);

  // handle create side Effects
  React.useEffect(() => {
    if (isUpdateSuccess && updateStatus === "fulfilled") {
      toast.dismiss();
      toast.success("Chief complaints create successfully");
      setComplaintsAndHistoryData(complaintsAndHistoryInitialState);
      setSerostatusDisclosure(serostatusAndDisclosureData);
    } else if (isUpdateError && "data" in updateError) {
      toast.dismiss();
      toast.error(
        typeof updateError.data === "string"
          ? updateError?.data
          : "Error creating chief complaints"
      );
    }
  }, [isUpdateSuccess, updateStatus, isUpdateError, updateError]);

  return {
    complaintsAndHistoryData,
    serostatusDisclosure,
    errorMsg,
    isLoading,
    isUpdating,
    handleChange,
    handleSerostatusDisClosureChange,
    handleSubmit,
    status,
    editModal,
    editableData,
    handleEditItem,
  };
};

export default useEdit;
