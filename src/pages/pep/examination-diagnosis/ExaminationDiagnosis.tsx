import { RootState } from "@/app/store";
import FormHeading from "@/components/core/form-heading/FormHeading";
import GeneralAssessment from "@/components/examination-diagnosis/general-assessment/GeneralAssessment";
import SystemExamination from "@/components/examination-diagnosis/system-examination/SystemExamination";
import { examinationNDiagnosisModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const PepExaminationAndDiagnosis = () => {
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
    </div>
  );
};

export default PepExaminationAndDiagnosis;
