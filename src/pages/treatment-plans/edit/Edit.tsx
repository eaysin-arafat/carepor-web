import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Checkbox from "@/components/core/form-elements/Checkbox";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import TreatmentPastRecord from "@/components/plan/DiagnosisPastRecord";
import { Loader } from "react-feather";
import useEdit from "./useEdit";

const EditTreatmentPlan = ({ toggler, encounterType }) => {
  const {
    editAbleTreatmentPlan,
    editStatus,
    errorMsg,
    handleEdit,
    handleSubmit,
    handleTreatmentPlanChange,
    isEditing,
    isLoading,
    isSuccess,
    status,
    treatmentPlan,
    editModal,
  } = useEdit({ encounterType });

  return (
    <DefaultModal title="Treatment Plan" size="7xl" toggler={toggler}>
      <div>
        <form onSubmit={handleSubmit}>
          {/* TREATMENT PLAN */}
          {editModal?.data && (
            <>
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
            </>
          )}

          {/* PAST RECORD CONTAINERS */}
          <PastRecordContainers>
            {/* LOADING STATE */}
            {(isLoading || status === "pending") && (
              <div className="flex w-full justify-center items-center">
                <Loader size={40} className="animate-spin" />
              </div>
            )}

            {/* NO DATA */}
            {isSuccess && editAbleTreatmentPlan?.length === 0 && (
              <div className="flex w-full justify-center items-center">
                <p className="text-gray-400">No Data Found</p>
              </div>
            )}

            {/* DATA */}
            {editAbleTreatmentPlan?.map((item, index) => (
              <TreatmentPastRecord
                key={index}
                data={item}
                handleEdit={() => handleEdit(item)}
              />
            ))}
          </PastRecordContainers>

          {/* BUTTONS */}

          <div className="mt-5">
            {editModal?.data && (
              <CancelAndAddButton
                toggler={toggler}
                disableBoth={isEditing || editStatus === "pending"}
              />
            )}
          </div>
        </form>
      </div>
    </DefaultModal>
  );
};

export default EditTreatmentPlan;
