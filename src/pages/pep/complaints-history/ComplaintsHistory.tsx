import { RootState } from "@/app/store";
import ChronicNonChronic from "@/components/complaints-history/chronic-non-chronic/ChronicNonChronic";
import FamilyAndSocial from "@/components/complaints-history/family-and-social/FamilyAndSocial";
import PastMedicalHistory from "@/components/complaints-history/past-medical-history/PastMedicalHistory";
import PreventionHistory from "@/components/complaints-history/prevention-history/PreventionHistory";
import ReviewOfSystem from "@/components/complaints-history/review-of-systems/ReviewOfSystem";
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

const PepComplaintsHistory = () => {
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

  const handlePreventionHistory = () => {
    dispatch(
      openAddModal({
        modalId: complaintsModalTypes.preventionHistory,
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

  const handleDrugAdherence = () => {
    dispatch(
      openAddModal({
        modalId: complaintsModalTypes.drugAdherence,
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
    return filterByEncounter(chiefComplaints?.slice(), EnumEncounterType.PEP);
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
          encounterType={EnumEncounterType.PEP}
        />
      )}
      {editModal?.modalId === complaintsModalTypes.editPresentingComplaints && (
        <EditComplaintsAndHistory
          toggler={closeEdit}
          encounterType={EnumEncounterType.PEP}
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

      {/* Drug Adherence  */}
      <FormHeading
        title="Drug Adherence"
        modalHandler={handleDrugAdherence}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.drugAdherence && (
        // <PastMedicalHistory toggler={closeModal} />
        <h2>hello</h2>
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

      {/* Prevention History  */}
      <FormHeading
        title="Prevention History"
        modalHandler={handlePreventionHistory}
        isEdit
      />
      {addModal?.modalId === complaintsModalTypes.preventionHistory && (
        <PreventionHistory toggler={closeModal} />
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

export default PepComplaintsHistory;
