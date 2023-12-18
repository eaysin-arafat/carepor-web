import { RootState, useAppSelector } from "@/app/store";
import { updateEditModalData } from "@/features/modal/modal-slice";
import {
  treatmentPlanApiEndpoints,
  useUpdateTreatmentPlanMutation,
} from "@/features/treatment-plan/treatment-plan-api";
import useBaseModel from "@/hooks/useBaseModel";
import useClient from "@/hooks/useClient";
import useEncounter from "@/hooks/useEncounter";
import { filterBy24Hours } from "@/utilities/transformation";
import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const useEdit = ({ encounterType }) => {
  // get data from redux store
  const { editModal } = useSelector((state: RootState) => state.modal);

  // local state
  const [treatmentPlan, setTreatmentPlan] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // hooks and variables
  const client = useClient();
  const baseData = useBaseModel({
    modifiedBy: null,
    modifiedIn: null,
  });
  const encounter = useEncounter(encounterType);
  const dispatch = useDispatch();

  // api hooks and api selectors
  //  treatment plan
  const selectTreatmentPlan = useMemo(
    () =>
      treatmentPlanApiEndpoints.readTreatmentPlanByClient.select(client?.oid),
    [client?.oid]
  );
  const {
    data: treatmentPlans,
    isLoading,
    isSuccess,
    status,
  } = useAppSelector(selectTreatmentPlan);

  // update treatment plan
  const [
    updateTreatmentPlan,
    {
      isLoading: isEditing,
      isSuccess: isEditSuccess,
      isError: isEditError,
      error: editError,
      status: editStatus,
    },
  ] = useUpdateTreatmentPlanMutation();

  // handlers
  const handleTreatmentPlanChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTreatmentPlan(e.target.value);
    setErrorMsg("");
  };

  const handleEdit = (editData) => {
    dispatch(
      updateEditModalData({
        data: editData,
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!treatmentPlan) return setErrorMsg("Required");

    const payload = {
      ...editModal?.data,
      ...baseData,
      ...encounter,
      clientId: client?.oid,
      treatmentPlans: treatmentPlan,
    };

    updateTreatmentPlan({ key: editModal?.data?.interactionId, body: payload });
  };

  /// transform data
  const filteredTreatmentPlans = useMemo(() => {
    if (treatmentPlans) {
      return treatmentPlans.filter(
        (item) => item?.encounterType === encounterType
      );
    }
    return [];
  }, [treatmentPlans, encounterType]);

  const editAbleTreatmentPlan = useMemo(() => {
    if (filteredTreatmentPlans?.length > 0) {
      return filterBy24Hours(filteredTreatmentPlans?.slice());
    }
    return [];
  }, [filteredTreatmentPlans]);

  // handle side effect
  React.useEffect(() => {
    if (isEditSuccess && editStatus === "fulfilled") {
      setTreatmentPlan("");
      toast.dismiss();
      toast.success("Treatment Plan edited Successfully");
    } else if (isEditError && "data" in editError) {
      toast.dismiss();
      toast.error(
        typeof editError.data === "string"
          ? editError.data
          : "Error updating Treatment Plan"
      );
    }
  }, [isEditSuccess, editStatus, editError, isEditError]);

  // set state when redux state changes
  React.useEffect(() => {
    if (editModal?.data) {
      setTreatmentPlan(editModal?.data?.treatmentPlans);
    }
  }, [editModal?.data]);

  return {
    treatmentPlan,
    errorMsg,
    handleTreatmentPlanChange,
    handleSubmit,
    editAbleTreatmentPlan,
    handleEdit,
    isLoading,
    isSuccess,
    status,
    isEditing,
    editStatus,
    editModal,
  };
};

export default useEdit;
