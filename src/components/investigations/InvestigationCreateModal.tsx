import { investigationModalTypes } from "@/constants/modal-types";
// import { closeAddModal } from "@/features/modal/modal-slice";
// import { useDispatch } from "react-redux";
import Modal from "../core/modal/Modal";

const InvestigationCreateModal = () => {
  //   const dispatch = useDispatch();
  //   const closeModal = () => {
  //     dispatch(closeAddModal());
  //   };

  return (
    <div>
      <Modal
        addModalId={investigationModalTypes.addInvestigation}
        title="Investigation"
      >
        InvestigationCreateModal
      </Modal>
    </div>
  );
};

export default InvestigationCreateModal;
