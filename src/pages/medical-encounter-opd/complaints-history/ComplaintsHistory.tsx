import { RootState } from "@/app/store";
import PresentingComplaints from "@/components/common-components/complaints-history/presenting-complaints/PresentingComplaints";
import FormHeading from "@/components/core/form-heading/FormHeading";
import IpdComplaintsHistory from "@/components/medical-encounter-ipd/IpdComplaintsHistory";
import { complaintsModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const OpdComplaintsHistory = () => {
  const { addModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleChiefComplaints = () => {
    dispatch(
      openAddModal({
        modalId: complaintsModalTypes.presentingComplaints,
        data: null,
      })
    );
  };

  const handleTBConstitutional = () => {
    dispatch(
      openAddModal({
        modalId: complaintsModalTypes.tBConstitutionalSymptoms,
        data: null,
      })
    );
  };

  const handleReviewOfSystems = () => {
    dispatch(
      openAddModal({
        modalId: complaintsModalTypes.reviewOfSystems,
        data: null,
      })
    );
  };

  const handlePastMedicalHistory = () => {
    dispatch(
      openAddModal({
        modalId: complaintsModalTypes.pastMedicalHistory,
        data: null,
      })
    );
  };

  const handleChronicNonChronic = () => {
    dispatch(
      openAddModal({
        modalId: complaintsModalTypes.chronicNonChronic,
        data: null,
      })
    );
  };

  const handleAllergies = () => {
    dispatch(
      openAddModal({
        modalId: complaintsModalTypes.allergies,
        data: null,
      })
    );
  };

  const handleFamilySocialHistory = () => {
    dispatch(
      openAddModal({
        modalId: complaintsModalTypes.familySocialHistory,
        data: null,
      })
    );
  };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {/* Presenting Complaints  */}
      <FormHeading
        title="Presenting Complaints"
        modalHandler={handleChiefComplaints}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.presentingComplaints && (
        <PresentingComplaints toggler={closeModal} />
      )}

      {/* TB Constitutional Symptoms  */}
      <FormHeading
        title="TB Constitutional Symptoms"
        modalHandler={handleTBConstitutional}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.tBConstitutionalSymptoms && (
        <IpdComplaintsHistory toggler={closeModal} />
      )}

      {/* Review of Systems  */}
      <FormHeading
        title="Review of Systems"
        modalHandler={handleReviewOfSystems}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.reviewOfSystems && (
        <IpdComplaintsHistory toggler={closeModal} />
      )}

      {/* Past Medical History  */}
      <FormHeading
        title="Past Medical History"
        modalHandler={handlePastMedicalHistory}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.pastMedicalHistory && (
        <IpdComplaintsHistory toggler={closeModal} />
      )}

      {/* Chronic / Non Chronic Conditions  */}
      <FormHeading
        title="Chronic / Non Chronic Conditions"
        modalHandler={handleChronicNonChronic}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.chronicNonChronic && (
        <IpdComplaintsHistory toggler={closeModal} />
      )}

      {/* Allergies  */}
      <FormHeading title="Allergies" modalHandler={handleAllergies} isEdit />
      {addModal?.modalId === complaintsModalTypes.allergies && (
        <IpdComplaintsHistory toggler={closeModal} />
      )}

      {/* Family & Social History  */}
      <FormHeading
        title="Family & Social History"
        modalHandler={handleFamilySocialHistory}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.familySocialHistory && (
        <IpdComplaintsHistory toggler={closeModal} />
      )}
    </div>
  );
};

export default OpdComplaintsHistory;
