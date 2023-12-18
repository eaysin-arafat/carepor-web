import { useAppSelector } from "@/app/store";
import {
  chiefComplaintApiEndpoints,
  useCreateChiefComplaintMutation,
} from "@/features/chief-complaint/chief-complaint-api";
import useBaseModel from "@/hooks/useBaseModel";
import useClient from "@/hooks/useClient";
import useEncounter from "@/hooks/useEncounter";
import { filterByEncounter } from "@/utilities/transformation";
import { ipdComplaintsHistoryValidator } from "@/validation-models/ipd-complaints-history";
import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ChiefComplaints, chiefComplaintsErrorTypes } from "../constant";
import { closeAddModal, openEditModal } from "@/features/modal/modal-slice";
import { ipdModalTypes } from "@/constants/modal-types";

const initialChiefComplaints = {
  historySummary: "",
  examinationSummary: "",
};

const useCreate = ({ encounterType }) => {
  // local state
  const [chiefComplaintsData, setChiefComplaintsData] =
    useState<ChiefComplaints>(initialChiefComplaints);
  const [errorMsg, setErrorMsg] = useState<chiefComplaintsErrorTypes>(
    initialChiefComplaints
  );

  const dispatch = useDispatch();
  const client = useClient();
  const baseData = useBaseModel({});
  const encounter = useEncounter(encounterType);

  const selectChiefComplaints = useMemo(
    () =>
      chiefComplaintApiEndpoints.readChiefComplaintByClient.select(client?.oid),
    [client?.oid]
  );

  const {
    data: chiefComplaints,
    isLoading,
    status,
  } = useAppSelector(selectChiefComplaints);

  const [
    createChiefComplaints,
    {
      isLoading: isCreating,
      isError: isCreateError,
      isSuccess: isCreateSuccess,
      error: createError,
      status: createStatus,
    },
  ] = useCreateChiefComplaintMutation();

  const filteredChiefComplaints = filterByEncounter(
    chiefComplaints?.slice(),
    encounterType
  )?.slice(0, 10);

  const handleChiefComplaintsChange = (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    const { name, value } = e.target;
    setChiefComplaintsData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg((prev) => ({ ...prev, [name]: "" }));
  };

  const handleEdit = (item) => {
    // close the add modal
    dispatch(closeAddModal());

    // open the edit modal
    dispatch(
      openEditModal({
        modalId: ipdModalTypes.editIpdChiefComplaint,
        data: item,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      ...baseData,
      ...encounter,
      ...chiefComplaintsData,
      clientId: client?.oid,
    };

    const { isValid, errors } =
      ipdComplaintsHistoryValidator(chiefComplaintsData);

    if (!isValid) return setErrorMsg(errors);

    createChiefComplaints(payload);
  };

  // handle side effects
  React.useEffect(() => {
    if (isCreateSuccess && createStatus === "fulfilled") {
      // dispatch(closeAddModal());
      setChiefComplaintsData(initialChiefComplaints);
      toast.dismiss();
      toast.success("Chief complaints created successfully");
    } else if (isCreateError && "data" in createError) {
      toast.dismiss();
      toast.error(
        typeof createError.data === "string"
          ? createError.data
          : "Error creating chief complaints"
      );
    }
  }, [isCreateSuccess, isCreateError, createError, createStatus, dispatch]);

  return {
    chiefComplaintsData,
    errorMsg,
    handleChiefComplaintsChange,
    handleSubmit,
    isLoading,
    isCreating,
    filteredChiefComplaints,
    status,
    createStatus,
    handleEdit,
  };
};

export default useCreate;
