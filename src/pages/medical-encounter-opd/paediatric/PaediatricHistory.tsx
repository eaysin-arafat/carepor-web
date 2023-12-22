import { RootState } from "@/app/store";
import FormHeading from "@/components/core/form-heading/FormHeading";
import BirthHistory from "@/components/paediatric-history/birth-history/BirthHistory";
import DevelopmentHistory from "@/components/paediatric-history/development-history/DevelopmentHistory";
import FeedingHistory from "@/components/paediatric-history/feeding-history/FeedingHistory";
import ImmunizationHistory from "@/components/paediatric-history/immunization/Immunization";
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
        <BirthHistory toggler={closeModal} />
      )}

      {/* Immunization History  */}
      <FormHeading
        title="Immunization History"
        modalHandler={handleImmunization}
        isEdit
      />
      {addModal?.modalId === paediatricModalTypes.immunizationModal && (
        <ImmunizationHistory toggler={closeModal} />
      )}
      {/* Feeding History  */}
      <FormHeading
        title="Feeding History"
        modalHandler={handleFeedingHistory}
        isEdit
      />
      {addModal?.modalId === paediatricModalTypes.feedingHistoryModal && (
        <FeedingHistory toggler={closeModal} />
      )}

      {/* Development History  */}
      <FormHeading
        title="Development History"
        modalHandler={handleDevelopmentHistory}
        isEdit
      />
      {addModal?.modalId === paediatricModalTypes.developmentHistoryModal && (
        // <DefaultModal
        //   title="Examination & Diagnosis"
        //   toggler={closeModal}
        //   size="7xl"
        // >
        <DevelopmentHistory toggler={closeModal} />
        // </DefaultModal>
      )}
    </div>
  );
};

export default OpdPaediatricHistory;
