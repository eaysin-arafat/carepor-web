import { RootState } from "@/app/store";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import DateInput from "@/components/core/form-elements/DatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { covaxModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const VaccinateCreate = () => {
  const dispatch = useDispatch();
  const { addModal } = useSelector((state: RootState) => state.modal);

  const closeModal = () => {
    dispatch(closeAddModal());
  };
  return (
    <div>
      {addModal?.modalId === covaxModalTypes.vaccinateCreateModal && (
        <DefaultModal title="Vaccination" toggler={closeModal} size="7xl">
          <form action="">
            <div className="grid gap-5">
              <Select label="Was Client offered "></Select>
              <Select label="Was Client offered "></Select>
              <Select label="Was Client offered "></Select>
              <Input label="Covax Number" />
              <DateInput onChange={() => {}} label="Covax Number" />
            </div>
            <div className="flex justify-center mt-5">
              <CancelAndAddButton toggler={closeModal} />
            </div>
          </form>
        </DefaultModal>
      )}
    </div>
  );
};

export default VaccinateCreate;
