import { RootState } from "@/app/store";
import Allergies from "@/components/complaints-history/allergies/Allergies";
import ChronicNonChronic from "@/components/complaints-history/chronic-non-chronic/ChronicNonChronic";
import FamilyAndSocial from "@/components/complaints-history/family-and-social/FamilyAndSocial";
import PastMedicalHistory from "@/components/complaints-history/past-medical-history/PastMedicalHistory";
import ReviewOfSystem from "@/components/complaints-history/review-of-systems/ReviewOfSystem";
import TBConstitutionalSymptoms from "@/components/complaints-history/tb-constitutional-symptoms/TBConstitutionalSymptoms";
import FormHeading from "@/components/core/form-heading/FormHeading";
import { complaintsModalTypes } from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import {
  closeAddModal,
  closeEditModal,
  openAddModal,
  openEditModal,
} from "@/features/modal/modal-slice";
import useClient from "@/hooks/useClient";
import CreateComplaintsAndHistories from "@/pages/chief-complaints-opd/create/Create";
import EditComplaintsAndHistory from "@/pages/chief-complaints-opd/edit/Edit";
import { filterBy24Hours, filterByEncounter } from "@/utilities/transformation";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const OpdComplaintsHistory = () => {
  // get modal data from redux store
  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  // builtin hooks and custom hooks
  const dispatch = useDispatch();
  const client = useClient();

  // get chief complaints by client api hooks
  const { data: chiefComplaints } = useReadChiefComplaintByClientQuery(
    client?.oid,
    {
      skip: !client?.oid,
      refetchOnMountOrArgChange: true,
    }
  );

  const handleChiefComplaints = () => {
    dispatch(
      openAddModal({
        modalId: complaintsModalTypes.presentingComplaints,
        data: null,
      })
    );
  };

  const handleChiefComplaintsEdit = () => {
    dispatch(
      openEditModal({
        modalId: complaintsModalTypes.editPresentingComplaints,
        data: null,
      })
    );
  };

  const closeEdit = () => {
    dispatch(closeEditModal());
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

  // find has chief complaints edit or not
  const filteredChiefComplaints = useMemo(() => {
    return filterByEncounter(
      chiefComplaints?.slice(),
      EnumEncounterType.MedicalEncounter
    );
  }, [chiefComplaints]);
  const hasEditChiefComplaints = useMemo(() => {
    return filterBy24Hours(filteredChiefComplaints?.slice());
  }, [filteredChiefComplaints]);

  return (
    <div>
      {/* Presenting Complaints  */}
      <FormHeading
        title="Presenting Complaints"
        modalHandler={handleChiefComplaints}
        isEdit={hasEditChiefComplaints?.length > 0}
        editHandler={handleChiefComplaintsEdit}
      />
      {addModal?.modalId === complaintsModalTypes.presentingComplaints && (
        <CreateComplaintsAndHistories
          toggler={closeModal}
          encounterType={EnumEncounterType.MedicalEncounter}
        />
      )}
      {editModal?.modalId === complaintsModalTypes.editPresentingComplaints && (
        <EditComplaintsAndHistory
          toggler={closeEdit}
          encounterType={EnumEncounterType.MedicalEncounter}
        />
      )}

      {/* TB Constitutional Symptoms  */}
      <FormHeading
        title="TB Constitutional Symptoms"
        modalHandler={handleTBConstitutional}
        isEdit={false}
      />
      {addModal?.modalId === complaintsModalTypes.tBConstitutionalSymptoms && (
        <TBConstitutionalSymptoms
          toggler={closeModal}
          encounterType={EnumEncounterType?.MedicalEncounter}
        />
      )}

      {/* Review of Systems  */}
      <FormHeading
        title="Review of Systems"
        modalHandler={handleReviewOfSystems}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.reviewOfSystems && (
        <ReviewOfSystem toggler={closeModal} />
      )}

      {/* Past Medical History  */}
      <FormHeading
        title="Past Medical History"
        modalHandler={handlePastMedicalHistory}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.pastMedicalHistory && (
        <PastMedicalHistory toggler={closeModal} />
      )}

      {/* Chronic / Non Chronic Conditions  */}
      <FormHeading
        title="Chronic / Non Chronic Conditions"
        modalHandler={handleChronicNonChronic}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.chronicNonChronic && (
        <ChronicNonChronic toggler={closeModal} />
      )}

      {/* Allergies  */}
      <FormHeading title="Allergies" modalHandler={handleAllergies} isEdit />
      {addModal?.modalId === complaintsModalTypes.allergies && (
        <Allergies toggler={closeModal} />
      )}

      {/* Family & Social History  */}
      <FormHeading
        title="Family & Social History"
        modalHandler={handleFamilySocialHistory}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.familySocialHistory && (
        <FamilyAndSocial toggler={closeModal} />
      )}
    </div>
  );
};

export default OpdComplaintsHistory;
