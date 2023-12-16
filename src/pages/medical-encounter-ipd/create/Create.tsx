import { RootState } from "@/app/store";
import FormHeading from "@/components/core/form-heading/FormHeading";
import IpdComplaintsHistory from "@/components/medical-encounter-ipd/IpdComplaintsHistory";
import PastRecordList from "@/components/shared/past-record-list/PastRecordList";
import {
  examinationNDiagnosisModalTypes,
  ipdModalTypes,
  planModalTypes,
} from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import FormLayout from "@/layout/FormLayout";
import { useDispatch, useSelector } from "react-redux";
import DiagnosisModal from "../diagnosis/DiagnosisModal";
import TreatmentPlanModal from "../plan/TreatmentPlanModal";

const IPDCreate = () => {
  const { addModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const handleChiefComplaints = () => {
    dispatch(
      openAddModal({
        modalId: ipdModalTypes.ipdCreateModal,
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

  const closeModal = () => {
    dispatch(closeAddModal());
  };

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
        <FormHeading
          title="Presenting Complaints"
          modalHandler={handleChiefComplaints}
          isEdit
        />
        {addModal?.modalId === ipdModalTypes.ipdCreateModal && (
          <IpdComplaintsHistory toggler={closeModal} />
        )}
        <FormHeading
          title="Examination & Diagnosis"
          modalHandler={handleIpdExamination}
          isEdit={false}
        />
        {addModal?.modalId ===
          examinationNDiagnosisModalTypes.diagnosisCreateModal && (
          <DiagnosisModal toggler={closeModal} />
        )}
        <FormHeading title="Treatment Plan" modalHandler={handleIpdPlan} isEdit />
        {addModal?.modalId === planModalTypes.planCreateModal && (
          <TreatmentPlanModal toggler={closeModal} />
        )}
      </div>
    </FormLayout>
  );
};

export default IPDCreate;
