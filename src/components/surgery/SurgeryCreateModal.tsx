import { surgeryModalTypes } from "@/constants/modal-types";
// import { closeAddModal } from "@/features/modal/modal-slice";
// import { useDispatch } from "react-redux";
import Modal from "../core/modal/Modal";

const SurgeryCreateModal = () => {
  //   const dispatch = useDispatch();
  //   const closeModal = () => {
  //     dispatch(closeAddModal());
  //   };

  return (
    <div>
      <Modal addModalId={surgeryModalTypes.addSurgery} title="Surgery">
        InvestigationCreateModal
      </Modal>
    </div>
  );
};

export default SurgeryCreateModal;
