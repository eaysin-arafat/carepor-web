import { vitalModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch } from "react-redux";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import Select from "../core/form-elements/Select";
import Textarea from "../core/form-elements/textarea";
import Modal from "../core/modal/Modal";

const VitalsCreateForm = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      <Modal
        title="Patient Information"
        addModalId={vitalModalTypes.addVital}
        className="max-w-[1300px]"
      >
        <form action="">
          <div className="grid grid-cols-6 gap-5 p-3">
            <div className="col-span-6  md:col-span-3">
              <DateInput label="Date" required onChange={() => {}} />
            </div>
            <div className="col-span-6  md:col-span-3">
              <DateInput label="Time" required onChange={() => {}} />
            </div>
            <div className="col-span-6  md:col-span-2">
              <Input required label="Weight (kg)" name="weight" />
            </div>
            <div className="col-span-6  md:col-span-2">
              <Input required label="Height (cm)" name="weight" />
            </div>
            <div className="col-span-6  md:col-span-2">
              <Input required label="Temperature (c)" name="temperature" />
            </div>
            <div className="col-span-6 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="">
                <Input required label="Systolic (mmHg)" name="systolic" />
              </div>
              <div className="">
                <Select
                  required
                  name="systolicIfUnrecordable"
                  label="Systolic Unrecordable"
                >
                  <option value="">Select</option>
                  <option value="1">Too Hight</option>
                  <option value="2">Too Low</option>
                  <option value="3">Unknown</option>
                </Select>
              </div>
              <div className="">
                <Input required label="Diastolic (mmHg)" name="diastolic" />
              </div>
              <div className="">
                <Select
                  required
                  label="Diastolic Unrecordable"
                  name="diastolicIfUnrecordable"
                >
                  <option value="1">Too Hight</option>
                  <option value="2">Too Low</option>
                  <option value="3">Unknown</option>
                </Select>
              </div>
            </div>
            <div className="col-span-6  md:col-span-2">
              <Input label="Pulse Rate (bpm)" name="pulseRate" />
            </div>
            <div className="col-span-6  md:col-span-2">
              <Input label="Respiratory Rate (bpm)" name="respiratoryRate" />
            </div>
            <div className="col-span-6  md:col-span-2">
              <Input label="Oxygen Saturation (%)" name="oxygenSaturation" />
            </div>
            <div className="col-span-6  md:col-span-2">
              <Input label="MUAC" name="muac" />
            </div>
            <div className="col-span-6  md:col-span-4">
              <Input label="MUAC Score" name="muacScore" />
            </div>
            <div className="col-span-6  md:col-span-2">
              <Input
                label="Abdominal Circumference (cm)"
                name="abdominalCircumference"
              />
            </div>
            <div className="col-span-6  md:col-span-2">
              <Input label="Head Circumference (cm)" name="headCircumference" />
            </div>
            <div className="col-span-6  md:col-span-2">
              <Input label="HC Score" name="hcScore" />
            </div>
            <div className="col-span-6">
              <Textarea label="Note" name="comment" />
            </div>
          </div>
          <div className="px-5 flex gap-5 justify-center md:justify-end my-5">
            {/* <CancelAndAddButton /> */}
            <button
              onClick={closeModal}
              className="transparent_btn px-5 py-2 md:py-2.5"
            >
              Cancel
            </button>
            <button type="submit" className="main_btn py-2 md:py-2.5">
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default VitalsCreateForm;
