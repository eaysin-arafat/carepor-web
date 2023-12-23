import { RootState } from "@/app/store";
import FormHeading from "@/components/core/form-heading/FormHeading";
import PepPrepPlan from "@/components/plan/pep-prep-plan/PepPrepPlan";
import { planModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const PepPlan = () => {
  const { addModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const handleTreatmentPlan = () => {
    dispatch(
      openAddModal({
        modalId: planModalTypes.planCreateModal,
        data: null,
      })
    );
  };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {/* Treatment Plan  */}
      <FormHeading
        title="Treatment Plan"
        modalHandler={handleTreatmentPlan}
        isEdit
      />
      {addModal?.modalId === planModalTypes.planCreateModal && (
        <PepPrepPlan title="Pep Plan" toggler={closeModal} />
      )}
    </div>
  );
};

export default PepPlan;
