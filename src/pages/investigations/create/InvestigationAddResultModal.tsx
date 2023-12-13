import { RootState } from "@/app/store";
import DefaultModal from "@/components/core/modal/DefaultModal";
import InvestigationAddResult from "@/components/investigations/InvestigationAddResult";
import { investigationModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const InvestigationAddResultModal = () => {
  const { addModal } = useSelector((store: RootState) => store.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {addModal?.modalId === investigationModalTypes.addInvestigationResult && (
        <DefaultModal
          title="Add Result"
          className=""
          toggler={closeModal}
          size="7xl"
        >
          <InvestigationAddResult />
        </DefaultModal>
      )}
    </div>
  );
};

export default InvestigationAddResultModal;
