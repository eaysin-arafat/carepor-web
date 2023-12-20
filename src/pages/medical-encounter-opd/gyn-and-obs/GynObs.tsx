import { RootState } from "@/app/store";
import GynAndObs from "@/components/gyn-and-obs/gyn-and-obs/GynAndObs";
import FormHeading from "@/components/core/form-heading/FormHeading";
import { gynObsModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const OpdGynAndObs = () => {
  const { addModal } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const handleGynObsCreate = () => {
    dispatch(
      openAddModal({
        modalId: gynObsModalTypes.gynObsCreateModal,
        data: null,
      })
    );
  };

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {/* Gyn & Obs  */}
      <FormHeading title="Gyn & Obs" modalHandler={handleGynObsCreate} isEdit />
      {addModal?.modalId === gynObsModalTypes.gynObsCreateModal && (
        <GynAndObs toggler={closeModal} />
      )}
    </div>
  );
};

export default OpdGynAndObs;
