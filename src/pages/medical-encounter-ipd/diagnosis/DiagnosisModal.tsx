import DefaultModal from "@/components/core/modal/DefaultModal";
import Diagnosis from "@/components/examination-diagnosis/DiagnosisCreate";

const DiagnosisModal = ({ toggler }) => {
  return (
    <div>
      <DefaultModal
        title="Examination & Diagnosis"
        toggler={toggler}
        size="7xl"
      >
        <Diagnosis toggler={toggler} />
      </DefaultModal>
    </div>
  );
};

export default DiagnosisModal;
