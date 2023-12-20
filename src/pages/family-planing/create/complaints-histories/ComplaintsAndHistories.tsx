import { RootState } from "@/app/store";
import FormHeading from "@/components/core/form-heading/FormHeading";
import {
  closeAddModal,
  closeEditModal,
  openAddModal,
  openEditModal,
} from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import CreateFamilySocial from "./components/CreateFamilySocial";
import CreatePastMedicalConditions from "./components/CreatePastMedicalConditions";
import CreatePastMedicalHistories from "./components/CreatePastMedicalHistories";
import CreatePresentingComplaints from "./components/CreatePresentingComplaints";
import CreatePurposeVisit from "./components/CreatePurposeVisit";
import EditFamilySocial from "./components/EditFamilySocial";
import EditPastMedicalConditions from "./components/EditPastMedicalConditions";
import EditPastMedicalHistories from "./components/EditPastMedicalHistories";
import EditPresentingComplaints from "./components/EditPresentingComplaints";
import EditPurposeVisit from "./components/EditPurposeVisit";
import { familyPlanningModalTypes } from "@/constants/modal-types";

const ComplaintsAndHistories = () => {
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

  // Handle Create Purpose Visit Modal Function
  const handleCreatePurposeVisit = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addPurposeofVisit,
        data: null,
      })
    );
  };

  // Handle Update Purpose Visit Modal Function
  const handleEditPurposeVisit = () => {
    dispatch(
      openEditModal({
        modalId: familyPlanningModalTypes.editPurposeofVisit,
        data: null,
      })
    );
  };

  // Handle Create Presenting Complaints Modal Function
  const handleCreatePresentingComplaints = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addPresentingComplaints,
        data: null,
      })
    );
  };

  // Handle Edit Presenting Complaints Modal Function
  const handleEditPresentingComplaints = () => {
    dispatch(
      openEditModal({
        modalId: familyPlanningModalTypes.editPresentingComplaints,
        data: null,
      })
    );
  };

  // Handle Create Past Medical Histories Modal Function
  const handleCreatePastMedicalHistories = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addPastMedicalHistories,
        data: null,
      })
    );
  };

  // Handle Edit Past Medical Histories Modal Function
  const handleEditPastMedicalHistories = () => {
    dispatch(
      openEditModal({
        modalId: familyPlanningModalTypes.editPastMedicalHistories,
        data: null,
      })
    );
  };
  // Handle Create Past Medical Conditions Modal Function
  const handleCreatePastMedicalConditions = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addPastMedicalConditions,
        data: null,
      })
    );
  };

  // Handle Edit Past Medical Conditions Modal Function
  const handleEditPastMedicalConditions = () => {
    dispatch(
      openEditModal({
        modalId: familyPlanningModalTypes.editPastMedicalConditions,
        data: null,
      })
    );
  };

  // Handle Create Family & Social Modal Function
  const handleCreateFamilySocial = () => {
    dispatch(
      openAddModal({
        modalId: familyPlanningModalTypes.addFamilySocialComplaintsAndHistories,
        data: null,
      })
    );
  };

  // Handle Edit Family & Social Modal Function
  const handleEditFamilySocial = () => {
    dispatch(
      openEditModal({
        modalId:
          familyPlanningModalTypes.editFamilySocialComplaintsAndHistories,
        data: null,
      })
    );
  };

  return (
    <div className="shadow-md border border-borderColor mt-5 flex flex-col gap-4 px-4 py-4 rounded">
      {/* Purpose of Visit */}
      <FormHeading
        title="Purpose of Visit"
        modalHandler={handleCreatePurposeVisit}
        editHandler={handleEditPurposeVisit}
        isEdit
      />
      {addModal?.modalId === familyPlanningModalTypes.addPurposeofVisit && (
        <CreatePurposeVisit toggler={closeModal} />
      )}
      {editModal?.modalId === familyPlanningModalTypes.editPurposeofVisit && (
        <EditPurposeVisit toggler={closeModal} />
      )}
      {/* Presenting Complaints */}
      <FormHeading
        title="Presenting Complaints"
        modalHandler={handleCreatePresentingComplaints}
        editHandler={handleEditPresentingComplaints}
        isEdit
      />
      {addModal?.modalId ===
        familyPlanningModalTypes.addPresentingComplaints && (
        <CreatePresentingComplaints toggler={closeModal} />
      )}
      {editModal?.modalId ===
        familyPlanningModalTypes.editPresentingComplaints && (
        <EditPresentingComplaints toggler={closeModal} />
      )}
      {/* Past Medical Histories */}
      <FormHeading
        title="Past Medical Histories"
        modalHandler={handleCreatePastMedicalHistories}
        editHandler={handleEditPastMedicalHistories}
        isEdit
      />
      {addModal?.modalId ===
        familyPlanningModalTypes.addPastMedicalHistories && (
        <CreatePastMedicalHistories toggler={closeModal} />
      )}{" "}
      {editModal?.modalId ===
        familyPlanningModalTypes.editPastMedicalHistories && (
        <EditPastMedicalHistories toggler={closeModal} />
      )}
      {/* Past Medical Conditions */}
      <FormHeading
        title="Past Medical Conditions"
        modalHandler={handleCreatePastMedicalConditions}
        isEdit
        editHandler={handleEditPastMedicalConditions}
      />
      {addModal?.modalId ===
        familyPlanningModalTypes.addPastMedicalConditions && (
        <CreatePastMedicalConditions toggler={closeModal} />
      )}{" "}
      {editModal?.modalId ===
        familyPlanningModalTypes.editPastMedicalConditions && (
        <EditPastMedicalConditions toggler={closeModal} />
      )}
      {/* Family & Social */}
      <FormHeading
        title="Family & Social"
        modalHandler={handleCreateFamilySocial}
        isEdit
        editHandler={handleEditFamilySocial}
      />
      {addModal?.modalId ===
        familyPlanningModalTypes.addFamilySocialComplaintsAndHistories && (
        <CreateFamilySocial toggler={closeModal} />
      )}{" "}
      {editModal?.modalId ===
        familyPlanningModalTypes.editFamilySocialComplaintsAndHistories && (
        <EditFamilySocial toggler={closeModal} />
      )}
    </div>
  );
};

export default ComplaintsAndHistories;
