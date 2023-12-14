import { RootState } from "@/app/store";
import DateInput from "@/components/core/form-elements/DatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import { htsModalTypes } from "@/constants/modal-types";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch, useSelector } from "react-redux";

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 border border-borderColor rounded-lg shadow-light mt-3">
              <h2 className="col-span-full text-xl font-semibold">
                Pretest Assessment
              </h2>
              <div className="">
                <Select required label="Client Type" name=""></Select>
              </div>
              <div className="">
                <Select required label="Visit Type" name=""></Select>
              </div>
              <div className="">
                <Select required label="Service Point" name=""></Select>
              </div>
              <div className="">
                <Select required label="Source of Client" name=""></Select>
              </div>
              <div className="">
                <Select required label="Reason for Testing" name=""></Select>
              </div>
              <div className="">
                <DateInput label="Last Tested Date" onChange={() => {}} />
              </div>
              <div className="">
                <Select label="Last Test Result" name=""></Select>
              </div>
              <div className="">
                <DateInput
                  label="Partner's Last Tested Date"
                  onChange={() => {}}
                />
              </div>
              <div className="">
                <Select label="Partner's HIV Status" name=""></Select>
              </div>
              <div className="">
                <Select required label="Patient Counselled" name=""></Select>
              </div>
              <div className="">
                <Select required label="Consent Obtained" name=""></Select>
              </div>
              <div className="">
                <Select
                  required
                  label="Reason for Not Testing"
                  name=""
                ></Select>
              </div>
              <div className="col-span-full">
                <Textarea label="Other Reasons" name="comment" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 border border-borderColor rounded-lg mt-8 shadow-light">
              <h2 className="col-span-full text-xl font-semibold">
                Test & Results
              </h2>
              <div className="">
                <Input label="Test No" name="weight" />
              </div>
              <div className="">
                <Select required label="Determine" name=""></Select>
              </div>
              <div className="">
                <Select required label="Bioline" name=""></Select>
              </div>
              <div className="">
                <Select required label="HIV Type" name=""></Select>
              </div>
              <div className="">
                <Select required label="DNA PCR Sample Collected" name="">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>
              <div className="">
                <DateInput
                  label="DNA PCR Sample Collection Date"
                  onChange={() => {}}
                />
              </div>
              <div className="">
                <Select required label="Client Received Results" name="">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>
              <div className="">
                <Select required label="Consent to Receive SMS Alerts" name="">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>
            </div>

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
