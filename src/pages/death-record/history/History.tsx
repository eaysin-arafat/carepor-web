import { RootState } from "@/app/store";
import { deathRecordModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import { Plus } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import DeathRecordCreate from "../create/Create";

function DeathRecordHistory() {
  // * Redux
  const { addModal } = useSelector((state: RootState) => state.modal);

  // * Hokes
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {addModal?.modalId === deathRecordModalTypes.deathRecordCreate && (
        <DeathRecordCreate toggler={closeModal} />
      )}
      <h1 className="mb-5 text-xl">Death Record</h1>
      <div className="flex mb-5 justify-center items-center h-[50vh] border bg-whiteBgColor rounded border-dashed border-primaryColor shadow">
        <div className="flex justify-center flex-col">
          <h1 className="mb-5 text-2xl">Death Record Not Created</h1>
          <button
            className="flex items-center justify-center gap-1 px-5 py-3 bg-buttonBg rounded-full text-center text-white "
            type="button"
            onClick={() => {
              dispatch(
                openAddModal({
                  modalId: deathRecordModalTypes.deathRecordCreate,
                  data: null,
                })
              );
            }}
          >
            <Plus size={20} /> Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeathRecordHistory;
