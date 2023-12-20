import DefaultModal from "@/components/core/modal/DefaultModal";
import TreatmentPlan from "@/components/plan/TreatmentPlan";

const TreatmentPlanModal = ({ toggler }) => {
  return (
    <div>
      <DefaultModal title="Treatment Plan" toggler={toggler} size="7xl">
        <TreatmentPlan toggler={toggler} />
      </DefaultModal>
    </div>
  );
};

export default TreatmentPlanModal;
