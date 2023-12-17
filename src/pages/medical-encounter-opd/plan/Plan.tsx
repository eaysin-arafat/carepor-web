import { RootState } from "@/app/store";
import TreatmentPlan from "@/components/common-components/plan/TreatmentPlan";
import FormHeading from "@/components/core/form-heading/FormHeading";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { planModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const OpdPlan = () => {
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
        <DefaultModal title="Treatment Plan" toggler={closeModal} size="7xl">
          <TreatmentPlan toggler={closeModal} />
        </DefaultModal>
      )}
    </div>
  );
};

export default OpdPlan;
