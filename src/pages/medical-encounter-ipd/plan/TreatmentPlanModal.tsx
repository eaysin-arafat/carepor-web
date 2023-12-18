import TreatmentPlan from "@/components/common-components/plan/TreatmentPlan";
import DefaultModal from "@/components/core/modal/DefaultModal";

const TreatmentPlanModal = ({ toggler }) => {
  return (
    <div>
      <DefaultModal
        title="Treatment Plan"
        toggler={toggler}
        size="7xl"
      >
        <TreatmentPlan toggler={toggler} />
      </DefaultModal>
    </div>
  );
};

export default TreatmentPlanModal;
