import { RootState } from "@/app/store";
import { birthRecordModalTypes } from "@/constants/modal-types";
import { closeAddModal, openAddModal } from "@/features/modal/modal-slice";
import { Plus } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import BirthRecordCreate from "../create/Create";

function BirthRecordHistory() {
  // * Redux
  const { addModal } = useSelector((state: RootState) => state.modal);

  // * Hokes
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      {addModal?.modalId === birthRecordModalTypes.birthRecordCreate && (
        <BirthRecordCreate toggler={closeModal} />
      )}
      <h1 className="mb-5 text-xl">Birth Record</h1>
      <div className="flex justify-center items-center mb-3 h-[50vh] border bg-whiteBgColor rounded border-dashed border-primaryColor shadow">
        <div className="flex justify-center flex-col">
          <h1 className="mb-5 text-2xl">Birth Record Not Created</h1>
          <button
            className="flex items-center justify-center px-5 py-3 bg-buttonBg rounded-full text-center text-white "
            onClick={() => {
              dispatch(
                openAddModal({
                  modalId: birthRecordModalTypes.birthRecordCreate,
                  data: null,
                })
              );
            }}
          >
            <Plus /> Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default BirthRecordHistory;
