import Diagnosis from "@/components/common-components/examination-diagnosis/DiagnosisCreate";
import DefaultModal from "@/components/core/modal/DefaultModal";

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
