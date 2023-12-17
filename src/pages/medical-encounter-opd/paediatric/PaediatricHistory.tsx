import { RootState } from "@/app/store";
import PresentingComplaints from "@/components/common-components/complaints-history/presenting-complaints/PresentingComplaints";
import Diagnosis from "@/components/common-components/examination-diagnosis/DiagnosisCreate";
import FormHeading from "@/components/core/form-heading/FormHeading";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { paediatricModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const OpdPaediatricHistory = () => {
  const { addModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleBirthHistory = () => {
    dispatch(
      openAddModal({
        modalId: paediatricModalTypes.birthHistoryModal,
        data: null,
      })
    );
  };

  const handleImmunization = () => {
    dispatch(
      openAddModal({
        modalId: paediatricModalTypes.immunizationModal,
        data: null,
      })
    );
  };

  const handleFeedingHistory = () => {
    dispatch(
      openAddModal({
        modalId: paediatricModalTypes.feedingHistoryModal,
        data: null,
      })
    );
  };

  const handleDevelopmentHistory = () => {
    dispatch(
      openAddModal({
        modalId: paediatricModalTypes.developmentHistoryModal,
        data: null,
      })
    );
  };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {/* Birth History  */}
      <FormHeading
        title="Birth History"
        modalHandler={handleBirthHistory}
        isEdit
      />
      {addModal?.modalId === paediatricModalTypes.birthHistoryModal && (
        <PresentingComplaints toggler={closeModal} />
      )}

      {/* Immunization History  */}
      <FormHeading
        title="Immunization History"
        modalHandler={handleImmunization}
        isEdit
      />
      {addModal?.modalId === paediatricModalTypes.birthHistoryModal && (
        <PresentingComplaints toggler={closeModal} />
      )}
      {/* Feeding History  */}
      <FormHeading
        title="Feeding History"
        modalHandler={handleFeedingHistory}
        isEdit
      />
      {addModal?.modalId === paediatricModalTypes.birthHistoryModal && (
        <PresentingComplaints toggler={closeModal} />
      )}

      {/* Development History  */}
      <FormHeading
        title="Development History"
        modalHandler={handleDevelopmentHistory}
        isEdit
      />
      {addModal?.modalId === paediatricModalTypes.birthHistoryModal && (
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

export default OpdPaediatricHistory;
