import { RootState } from "@/app/store";
import FormHeading from "@/components/core/form-heading/FormHeading";
import DefaultModal from "@/components/core/modal/DefaultModal";
import Diagnosis from "@/components/examination-diagnosis/DiagnosisCreate";
import GeneralAssessment from "@/components/examination-diagnosis/general-assessment/GeneralAssessment";
import GlasgowComaScale from "@/components/examination-diagnosis/glasgow-coma-scale/GlasgowComaScale";
import SystemExamination from "@/components/examination-diagnosis/system-examination/SystemExamination";
import { examinationNDiagnosisModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const OpdExaminationAndDiagnosis = () => {
  const { addModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleGeneralAssessment = () => {
    dispatch(
      openAddModal({
        modalId: examinationNDiagnosisModalTypes.generalAssessment,
        data: null,
      })
    );
  };

  const handleSystemExamination = () => {
    dispatch(
      openAddModal({
        modalId: examinationNDiagnosisModalTypes.systemExamination,
        data: null,
      })
    );
  };

  const handleGlasgowComaScale = () => {
    dispatch(
      openAddModal({
        modalId: examinationNDiagnosisModalTypes.glasgowComaScale,
        data: null,
      })
    );
  };

  const handleDiagnosisCreateModal = () => {
    dispatch(
      openAddModal({
        modalId: examinationNDiagnosisModalTypes.diagnosisCreateModal,
        data: null,
      })
    );
  };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {/* General Assessment  */}
      <FormHeading
        title="General Assessment"
        modalHandler={handleGeneralAssessment}
        isEdit
      />
      {addModal?.modalId ===
        examinationNDiagnosisModalTypes.generalAssessment && (
        <GeneralAssessment toggler={closeModal} />
      )}

      {/* System Examination  */}
      <FormHeading
        title="System Examination"
        modalHandler={handleSystemExamination}
        isEdit
      />
      {addModal?.modalId ===
        examinationNDiagnosisModalTypes.systemExamination && (
        <SystemExamination toggler={closeModal} />
      )}
      {/* Glasgow Coma Scale  */}
      <FormHeading
        title="Glasgow Coma Scale"
        modalHandler={handleGlasgowComaScale}
        isEdit
      />
      {addModal?.modalId ===
        examinationNDiagnosisModalTypes.glasgowComaScale && (
        <GlasgowComaScale toggler={closeModal} />
      )}

      {/* Presenting Complaints  */}
      <FormHeading
        title="Diagnosis"
        modalHandler={handleDiagnosisCreateModal}
        isEdit
      />
      {addModal?.modalId ===
        examinationNDiagnosisModalTypes.diagnosisCreateModal && (
        <DefaultModal
          title="Examination & Diagnosis"
          toggler={closeModal}
          size="7xl"
        >
          <Diagnosis toggler={closeModal} />
        </DefaultModal>
      )}
    </div>
  );
};

export default OpdExaminationAndDiagnosis;
