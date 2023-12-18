import { useAppSelector } from "@/app/store";
import TreatmentPastRecord from "@/components/common-components/plan/DiagnosisPastRecord";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Checkbox from "@/components/core/form-elements/Checkbox";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { ipdModalTypes } from "@/constants/modal-types";
import { closeAddModal, openEditModal } from "@/features/modal/modal-slice";
import {
  treatmentPlanApiEndpoints,
  useCreateTreatmentPlanMutation,
} from "@/features/treatment-plan/treatment-plan-api";
import useBaseModel from "@/hooks/useBaseModel";
import useClient from "@/hooks/useClient";
import useEncounter from "@/hooks/useEncounter";
import React, { useMemo, useState } from "react";
import { Loader } from "react-feather";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const CreateTreatmentPlan = ({ encounterType, toggler }) => {
  const [treatmentPlan, setTreatmentPlan] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const client = useClient();
  const baseData = useBaseModel({});
  const encounter = useEncounter(encounterType);
  const dispatch = useDispatch();

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

  const [
    createTreatmentPlan,
    {
      isLoading: isAdding,
      isSuccess: isAddSuccess,
      isError: isAddError,
      error: addError,
      status: addStatus,
    },
  ] = useCreateTreatmentPlanMutation();

  const handleTreatmentPlanChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTreatmentPlan(e.target.value);
    setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!treatmentPlan) return setErrorMsg("Required");

    const payload = {
      ...baseData,
      ...encounter,
      clientId: client?.oid,
      treatmentPlans: treatmentPlan,
    };

    createTreatmentPlan(payload);
  };

  const handleEdit = (editData) => {
    // close add modal first
    dispatch(closeAddModal());

    // open edit modal
    dispatch(
      openEditModal({
        modalId: ipdModalTypes.editIpdTreatmentPlan,
        data: editData,
      })
    );
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

  // handle side effect
  React.useEffect(() => {
    if (isAddSuccess && addStatus === "fulfilled") {
      setTreatmentPlan("");
      toast.dismiss();
      toast.success("Treatment Plan Added Successfully");
    } else if (isAddError && "data" in addError) {
      toast.dismiss();
      toast.error(
        typeof addError.data === "string"
          ? addError.data
          : "Error creating Treatment Plan"
      );
    }
  }, [isAddSuccess, isAddError, addStatus, addError]);

  return (
    <DefaultModal title="Treatment Plan" size="7xl" toggler={toggler}>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div>
              <div className="space-y-4">
                <Textarea
                  label="Treatment Plan"
                  placeholder="Enter Present Complaints"
                  className="h-40"
                  errMsg={errorMsg}
                  value={treatmentPlan}
                  onChange={handleTreatmentPlanChange}
                />
                <Checkbox label="Copy Proposed Treatment Plan" />
              </div>
            </div>
          </div>
          <hr className="my-6" />

          {/* PAST RECORD CONTAINERS */}
          <PastRecordContainers>
            {/* LOADING STATE */}
            {(isLoading || status === "pending") && (
              <div className="flex w-full justify-center items-center">
                <Loader size={40} className="animate-spin" />
              </div>
            )}

            {/* NO DATA */}
            {isSuccess && filteredTreatmentPlans?.length === 0 && (
              <div className="flex w-full justify-center items-center">
                <p className="text-gray-400">No Data Found</p>
              </div>
            )}

            {/* DATA */}
            {filteredTreatmentPlans?.slice(0, 10)?.map((item, index) => (
              <TreatmentPastRecord
                key={index}
                data={item}
                handleEdit={() => handleEdit(item)}
              />
            ))}
          </PastRecordContainers>

          {/* BUTTONS */}
          <div className="mt-5">
            <CancelAndAddButton
              toggler={toggler}
              disableBoth={isAdding || addStatus === "pending"}
            />
          </div>
        </form>
      </div>
    </DefaultModal>
  );
};

export default CreateTreatmentPlan;
