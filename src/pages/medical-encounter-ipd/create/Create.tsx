import { RootState } from "@/app/store";
import FormHeading from "@/components/core/form-heading/FormHeading";
import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import {
  examinationNDiagnosisModalTypes,
  ipdModalTypes,
  planModalTypes,
} from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import {
  closeAddModal,
  closeEditModal,
  openAddModal,
  openEditModal,
} from "@/features/modal/modal-slice";
import { useReadTreatmentPlanByClientQuery } from "@/features/treatment-plan/treatment-plan-api";
import useClient from "@/hooks/useClient";
import FormLayout from "@/layout/FormLayout";
import CreateChiefComplaints from "@/pages/chief-complaints/create/Create";
import EditChiefComplaints from "@/pages/chief-complaints/edit/Edit";
import CreateDiagnosis from "@/pages/diagnosis/create/Create";
import CreateTreatmentPlan from "@/pages/treatment-plans/create/Create";
import EditTreatmentPlan from "@/pages/treatment-plans/edit/Edit";
import { filterBy24Hours, filterByEncounter } from "@/utilities/transformation";
import { useDispatch, useSelector } from "react-redux";

const IPDCreate = () => {
  const { addModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  const dispatch = useDispatch();
  const client = useClient();

  // api hooks
  const { data: chiefComplaints } = useReadChiefComplaintByClientQuery(
    client?.oid,
    {
      skip: !client?.oid,
      refetchOnMountOrArgChange: true,
    }
  );

  // const { data: diagnoses } = useReadDiagnosesByClientQuery(client?.oid, {
  //   skip: !client?.oid,
  //   refetchOnMountOrArgChange: true,
  // });

  const { data: treatmentPlans } = useReadTreatmentPlanByClientQuery(
    client?.oid,
    {
      skip: !client?.oid,
      refetchOnMountOrArgChange: true,
    }
  );

  const handleChiefComplaints = () => {
    dispatch(
      openAddModal({
        modalId: ipdModalTypes.createIpdChiefComplaint,
        data: null,
      })
    );
  };

  const handleEditChiefComplaints = () => {
    dispatch(
      openEditModal({
        modalId: ipdModalTypes.editIpdChiefComplaint,
        data: null,
      })
    );
  };

  const handleIpdExamination = () => {
    dispatch(
      openAddModal({
        modalId: examinationNDiagnosisModalTypes.diagnosisCreateModal,
        data: null,
      })
    );
  };
  const handleIpdPlan = () => {
    dispatch(
      openAddModal({
        modalId: planModalTypes.planCreateModal,
        data: null,
      })
    );
  };

  const handleTreatmentEdit = () => {
    dispatch(
      openEditModal({
        modalId: ipdModalTypes.editIpdTreatmentPlan,
        data: null,
      })
    );
  };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  const closeEdit = () => {
    dispatch(closeEditModal());
  };

  // CHIEF COMPLAINTS
  const ipdChiefComplaints = filterByEncounter(
    chiefComplaints?.slice(),
    EnumEncounterType.MedicalEncounterIPD
  );
  const ipdEditData = filterBy24Hours(ipdChiefComplaints?.slice());

  // TREATMENT PLAN
  const treatmentPlan = filterByEncounter(
    treatmentPlans?.slice(),
    EnumEncounterType.MedicalEncounterIPD
  );
  const editAbleTreatmentPlan = filterBy24Hours(treatmentPlan?.slice());

  return (
    <FormLayout
      latestData={
        <PastRecordList
          title="Latest Encounter"
          isSubTitleShow
          subTitle="12-Dec-2023"
          isPastEncounter
        />
      }
    >
      <div>
        {/* ChIEF COMPLAINTS */}
        <FormHeading
          title="Presenting Complaints"
          modalHandler={handleChiefComplaints}
          isEdit={ipdEditData?.length > 0}
          editHandler={handleEditChiefComplaints}
        />

        {/* Add Modal */}
        {addModal?.isOpen &&
          addModal?.modalId === ipdModalTypes.createIpdChiefComplaint && (
            <CreateChiefComplaints
              toggler={closeModal}
              encounterType={EnumEncounterType.MedicalEncounterIPD}
            />
          )}

        {/* EDIT MODAL */}
        {editModal?.isOpen &&
          editModal?.modalId === ipdModalTypes.editIpdChiefComplaint && (
            <EditChiefComplaints
              encounterType={EnumEncounterType.MedicalEncounterIPD}
              toggler={closeEdit}
            />
          )}

        {/* EXAMINATION AND DIAGNOSIS */}
        <FormHeading
          title="Examination & Diagnosis"
          modalHandler={handleIpdExamination}
          isEdit={false}
        />
        {addModal?.modalId ===
          examinationNDiagnosisModalTypes.diagnosisCreateModal && (
          // <DiagnosisModal toggler={closeModal} />
          <CreateDiagnosis
            toggler={closeModal}
            encounterType={EnumEncounterType.MedicalEncounterIPD}
          />
        )}

        {/* TREATMENT PLAN */}
        <FormHeading
          title="Treatment Plan"
          modalHandler={handleIpdPlan}
          isEdit={editAbleTreatmentPlan?.length > 0}
          editHandler={handleTreatmentEdit}
        />
        {addModal?.modalId === planModalTypes.planCreateModal && (
          <CreateTreatmentPlan
            toggler={closeModal}
            encounterType={EnumEncounterType.MedicalEncounterIPD}
          />
        )}

        {/* UPDATE TREATMENT PLAN */}
        {editModal?.isOpen &&
          editModal?.modalId === ipdModalTypes.editIpdTreatmentPlan && (
            <EditTreatmentPlan
              toggler={closeEdit}
              encounterType={EnumEncounterType.MedicalEncounterIPD}
            />
          )}
      </div>
    </FormLayout>
  );
};

export default IPDCreate;
