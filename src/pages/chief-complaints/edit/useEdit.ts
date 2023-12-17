import { RootState, useAppSelector } from "@/app/store";
import {
  chiefComplaintApiEndpoints,
  useUpdateChiefComplaintMutation,
} from "@/features/chief-complaint/chief-complaint-api";
import { updateEditModalData } from "@/features/modal/modal-slice";
import useBaseModel from "@/hooks/useBaseModel";
import useClient from "@/hooks/useClient";
import useEncounter from "@/hooks/useEncounter";
import { filterByEncounter } from "@/utilities/transformation";
import { ipdComplaintsHistoryValidator } from "@/validation-models/ipd-complaints-history";
import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { ChiefComplaints, chiefComplaintsErrorTypes } from "../constant";

const initialChiefComplaints = {
  historySummary: "",
  examinationSummary: "",
};

const initialErrorState = {
  historySummary: "",
  examinationSummary: "",
};

const useEdit = ({ encounterType }) => {
  const { editModal } = useSelector((state: RootState) => state.modal);

  // local state
  const [chiefComplaintsData, setChiefComplaintsData] =
    useState<ChiefComplaints>(editModal?.data || initialChiefComplaints);
  const [errorMsg, setErrorMsg] =
    useState<chiefComplaintsErrorTypes>(initialErrorState);

  const dispatch = useDispatch();
  const client = useClient();
  const baseData = useBaseModel({
    modifiedBy: null,
    modifiedIn: null,
    dateModified: null,
  });
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
    updateChiefComplaints,
    {
      isLoading: isUpdating,
      isError: isUpdateError,
      isSuccess: isUpdateSuccess,
      error: updateError,
      status: updateStatus,
    },
  ] = useUpdateChiefComplaintMutation();

  const filteredChiefComplaints = filterByEncounter(
    chiefComplaints?.slice(),
    encounterType
  );

  const handleChiefComplaintsChange = (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    const { name, value } = e.target;
    setChiefComplaintsData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg((prev) => ({ ...prev, [name]: "" }));
  };

  const handleEditChiefComplaints = (item) => {
    dispatch(updateEditModalData({ data: item }));
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

    updateChiefComplaints({
      key: editModal?.data?.interactionId,
      body: payload,
    });
  };

  // set state data
  React.useEffect(() => {
    if (editModal?.data) {
      setChiefComplaintsData(editModal.data);
    }
  }, [editModal]);

  // handle side effects
  React.useEffect(() => {
    if (isUpdateSuccess && updateStatus === "fulfilled") {
      // dispatch(closeAddModal());
      setChiefComplaintsData(initialChiefComplaints);
      toast.dismiss();
      toast.success("Chief complaints updated successfully");
    } else if (isUpdateError && "data" in updateError) {
      toast.dismiss();
      toast.error(
        typeof updateError.data === "string"
          ? updateError.data
          : "Error updating chief complaints"
      );
    }
  }, [isUpdateSuccess, isUpdateError, updateError, updateStatus, dispatch]);

  return {
    chiefComplaintsData,
    errorMsg,
    handleChiefComplaintsChange,
    handleSubmit,
    isLoading,
    isUpdating,
    filteredChiefComplaints,
    status,
    updateStatus,
    editModal,
    handleEditChiefComplaints,
  };
};

export default useEdit;
