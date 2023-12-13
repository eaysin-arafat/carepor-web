import { RootState } from "@/app/store";
import DefaultModal from "@/components/core/modal/DefaultModal";
import InvestigationViewOrder from "@/components/investigations/InvestigationViewOrder";
import { investigationModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const InvestigationViewOrderModal = () => {
  const { addModal } = useSelector((store: RootState) => store.modal);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {addModal?.modalId === investigationModalTypes.investigationViewOrder && (
        <DefaultModal
          title="View Order"
          className=""
          toggler={closeModal}
          size="7xl"
        >
          <InvestigationViewOrder />
        </DefaultModal>
      )}
    </div>
  );
};

export default InvestigationViewOrderModal;
