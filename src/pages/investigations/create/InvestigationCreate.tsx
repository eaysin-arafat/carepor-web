import { RootState } from "@/app/store";
import DefaultModal from "@/components/core/modal/DefaultModal";
import InvestigationCreateForm from "@/components/investigations/InvestigationCreateForm";
import { investigationModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const InvestigationCreate = () => {
  const { addModal } = useSelector((store: RootState) => store.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {addModal?.modalId === investigationModalTypes.addInvestigation && (
        <DefaultModal
          title="Investigation"
          className=""
          toggler={closeModal}
          size="3xl"
        >
          <InvestigationCreateForm />
        </DefaultModal>
      )}
    </div>
  );
};

export default InvestigationCreate;

// import Modal from "@/components/core/modal/Modal";
// import InvestigationCreateForm from "@/components/investigations/InvestigationCreateForm";
// import { investigationModalTypes } from "@/constants/modal-types";

// const InvestigationCreate = () => {
//   return (
//     <div>
//       <Modal
//         addModalId={investigationModalTypes.addInvestigation}
//         title="Investigation"
//         className="max-w-[1524px]"
//       >
//         <InvestigationCreateForm />
//       </Modal>
//     </div>
//   );
// };

// export default InvestigationCreate;
