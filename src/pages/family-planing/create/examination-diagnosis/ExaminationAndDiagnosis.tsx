import FormHeading from '@/components/core/form-heading/FormHeading';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useDispatch } from 'react-redux';
import {
  closeAddModal,
  closeEditModal,
  openAddModal,
  openEditModal,
} from '@/features/modal/modal-slice';
import { familyPlanningModalTypes } from '@/constants/modal-types';
import CreateGeneralAssessment from './components/CreateGeneralAssessment';
import EditGeneralAssessment from './components/EditGeneralAssessment';
import CreateSystemExamination from './components/CreateSystemExamination';
import EditSystemExamination from './components/EditSystemExamination';
import CreateQuickExamination from './components/CreateQuickExamination';
import EditQuickExamination from './components/EditQuickExamination';
import CreateGuidedExamination from './components/CreateGuidedExamination';
import EditGuidedExamination from './components/EditGuidedExamination';

const ExaminationAndDiagnosis = () => {
  // * Responsive Hokes
  // const w1300 = useWindowWidth(1300);
  // const w1000 = useWindowWidth(1000);

  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  const dispatch = useDispatch();

  // Close Modal Function
  const closeModal = () => {
    dispatch(closeEditModal());
    dispatch(closeAddModal());
  };

  // Handle Create General Assessment Modal Function
  const handleCreateGeneralAssessment = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addGeneralAssessment,
        data: null,
      })
    );
  };

  // Handle Edit General Assessment Modal Function
  const handleEditGeneralAssessment = () => {
    dispatch(
      openEditModal({
        modalId: familyPlanningModalTypes.editGeneralAssessment,
        data: null,
      })
    );
  };
  // Handle Create System Examination Modal Function
  const handleCreateSystemExamination = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addSystemExamination,
        data: null,
      })
    );
  };

  // Handle Edit System Examination Modal Function
  const handleEditSystemExamination = () => {
    dispatch(
      openEditModal({
        modalId: familyPlanningModalTypes.editSystemExamination,
        data: null,
      })
    );
  };
  // Handle Create Quick Examination Modal Function
  const handleCreateQuickExamination = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addQuickExamination,
        data: null,
      })
    );
  };

  // Handle Edit Quick Examination Modal Function
  const handleEditQuickExamination = () => {
    dispatch(
      openEditModal({
        modalId: familyPlanningModalTypes.editQuickExamination,
        data: null,
      })
    );
  };
  // Handle Create Guided Examination Modal Function
  const handleCreateGuidedExamination = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addGuidedExamination,
        data: null,
      })
    );
  };

  // Handle Edit Guided Examination Modal Function
  const handleEditGuidedExamination = () => {
    dispatch(
      openEditModal({
        modalId: familyPlanningModalTypes.editGuidedExamination,
        data: null,
      })
    );
  };

  return (
    <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
      {/* General Assessment */}
      <FormHeading
        title="General Assessment"
        modalHandler={handleCreateGeneralAssessment}
        editHandler={handleEditGeneralAssessment}
        isEdit
      />
      {addModal?.modalId === familyPlanningModalTypes.addGeneralAssessment && (
        <CreateGeneralAssessment toggler={closeModal} />
      )}
      {editModal?.modalId ===
        familyPlanningModalTypes.editGeneralAssessment && (
        <EditGeneralAssessment toggler={closeModal} />
      )}
      {/* System Examination */}
      <FormHeading
        title="System Examination"
        modalHandler={handleCreateSystemExamination}
        isEdit
        editHandler={handleEditSystemExamination}
      />
      {addModal?.modalId === familyPlanningModalTypes.addSystemExamination && (
        <CreateSystemExamination toggler={closeModal} />
      )}
      {editModal?.modalId ===
        familyPlanningModalTypes.editSystemExamination && (
        <EditSystemExamination toggler={closeModal} />
      )}
      {/* Quick Examination */}
      <FormHeading
        title="Quick Examination"
        modalHandler={handleCreateQuickExamination}
        editHandler={handleEditQuickExamination}
        isEdit
      />
      {addModal?.modalId === familyPlanningModalTypes.addQuickExamination && (
        <CreateQuickExamination toggler={closeModal} />
      )}
      {editModal?.modalId === familyPlanningModalTypes.editQuickExamination && (
        <EditQuickExamination toggler={closeModal} />
      )}
      {/* Guided Examination */}
      <FormHeading
        title="Guided Examination"
        modalHandler={handleCreateGuidedExamination}
        isEdit
        editHandler={handleEditGuidedExamination}
      />
      {addModal?.modalId === familyPlanningModalTypes.addGuidedExamination && (
        <CreateGuidedExamination toggler={closeModal} />
      )}
      {editModal?.modalId ===
        familyPlanningModalTypes.editGuidedExamination && (
        <EditGuidedExamination toggler={closeModal} />
      )}
    </div>
  );
};

export default ExaminationAndDiagnosis;
