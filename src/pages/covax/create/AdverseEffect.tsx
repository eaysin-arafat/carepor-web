import { RootState } from "@/app/store";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Checkbox from "@/components/core/form-elements/Checkbox";
import DateInput from "@/components/core/form-elements/DatePicker";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { covaxModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const AdverseEffectCreate = () => {
  const dispatch = useDispatch();
  const { addModal } = useSelector((state: RootState) => state.modal);

  const closeModal = () => {
    dispatch(closeAddModal());
  };
  return (
    <div>
      {addModal?.modalId === covaxModalTypes.adverseEffectCreate && (
        <DefaultModal title="Vaccination" toggler={closeModal} size="7xl">
          <form action="">
            <div className="grid gap-5 mb-5">
              <DateInput onChange={() => {}} label="AEFI Date" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <Checkbox label="Swelling /pain at injection site" />
              <Checkbox label="Joint" />
              <Checkbox label="Malaise/Fatigue" />
              <Checkbox label="Body Aches" />
              <Checkbox label="Fever" />
              <Checkbox label="Allergic Reaction" />
              <Checkbox label="Other Adverse Event" />
              <div className="col-span-full mt-2">
                <Textarea label="Other AEFI" />
              </div>
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

export default AdverseEffectCreate;
