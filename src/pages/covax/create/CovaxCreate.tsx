import { RootState } from "@/app/store";
import Checkbox from "@/components/core/form-elements/Checkbox";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { covaxModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const CovaxCreate = () => {
  const dispatch = useDispatch();
  const { addModal } = useSelector((state: RootState) => state.modal);

  const closeModal = () => {
    dispatch(closeAddModal());
  };
  return (
    <div>
      {addModal?.modalId === covaxModalTypes.covaxCreateModal && (
        <DefaultModal title="Pre-Assessment" toggler={closeModal} size="7xl">
          <form action="">
            <div className="grid gap-5 md:grid-cols-2">
              <Input label="Covax Number" />
              <Select label="Was Client offered "></Select>
              <Select
                label="Does Client Want To Get Vaccinated Today?"
                required
                name="doesClientGetVaccinatedToday"
              ></Select>
              <Select
                label="Reason Client Doesn't Want To Get Vaccination"
                name="reasonClientRefusedForVaccination"
              ></Select>
              <div className="col-span-full">
                <Textarea
                  label=" Other Reason"
                  name="otherReasonClientRefusedForVaccination"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
              <div className="col-span-full">
                <h2 className="text-xl font-medium text-secondaryColor">
                  Comorbidities :
                </h2>
              </div>
              <Checkbox label="Pregnant/Lactating" />
              <Checkbox label="Cancer" />
              <Checkbox label="Diabetes" />
              <Checkbox label="Heart Disease" />
              <Checkbox label="Hyper Tension" />
              <Checkbox label="HIV" />
            </div>
            <div className="mt-8">
              <Textarea
                label=" Other Comorbidities (If the above Comorbidities are not selected, then write Other Comorbidities in this field.)"
                name="otherComorbidities"
                placeholder="Other Comorbidities"
              />
            </div>
          </form>
        </DefaultModal>
      )}
    </div>
  );
};

export default CovaxCreate;
