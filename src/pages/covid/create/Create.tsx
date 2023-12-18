import { RootState } from "@/app/store";
import DefaultModal from "@/components/core/modal/DefaultModal";
import CovidForm from "@/components/covid/CovidForm";
import { covidModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const CovidCreate = () => {
  const dispatch = useDispatch();
  const { addModal } = useSelector((state: RootState) => state.modal);

  const closeModal = () => {
    dispatch(closeAddModal());
  };
  return (
    <div>
      {addModal?.modalId === covidModalTypes.covidCreateModal && (
        <DefaultModal title="Covid" toggler={closeModal} size="7xl">
          <CovidForm/>
        </DefaultModal>
      )}
    </div>
  );
};

export default CovidCreate;
