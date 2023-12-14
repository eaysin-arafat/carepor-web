import { RootState } from "@/app/store";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { htsModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import HTSForm from "../hts-form/HTSForm";

const HtsCreateForm = () => {
  const { addModal } = useSelector((store: RootState) => store.modal);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {addModal?.modalId === htsModalTypes.htsCreateModal && (
        <DefaultModal title="HIV Test Services" toggler={closeModal} size="7xl">
          <form action="">
            <HTSForm />

            <div className="px-5 flex gap-5 justify-center md:justify-end mt-8 mb-2">
              <button
                onClick={closeModal}
                className="transparent_btn px-5 py-2 md:py-2.5"
              >
                Close
              </button>
              <button type="submit" className="main_btn py-2 md:py-2.5">
                Save
              </button>
            </div>
          </form>
        </DefaultModal>
      )}
    </div>
  );
};

export default HtsCreateForm;
