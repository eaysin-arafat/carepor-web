import OutlineButton from "@/components/core/buttons/OutlineButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useDispatch } from "react-redux";

const AdmissionForm = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      <form action="" className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="col-span-1">
            <DatePicker
              name="Admission Date"
              label="Admission Date"
              required
              onChange={() => {}}
            />
          </div>
          <div className="col-span-1">
            <Select label="Department">
              <option value="">Select</option>
              <option value="">Engineer</option>
              <option value="">Printing</option>
            </Select>
          </div>
          <div className="col-span-1">
            <Select label="Firm/Unit">
              <option value="">Select</option>
              <option value="">Engineer</option>
              <option value="">Printing</option>
            </Select>
          </div>
          <div className="col-span-1">
            <Select label="Ward">
              <option value="">Select</option>
              <option value="">001</option>
              <option value="">002</option>
            </Select>
          </div>
          <div className="col-span-1">
            <Select label="Bed">
              <option value="">Select</option>
              <option value="">502</option>
              <option value="">503</option>
            </Select>
          </div>
          <div className="md:col-span-2">
            <Textarea
              label="Additional Comments"
              placeholder="Additional Components"
              max={500}
            />
          </div>
        </div>
        <div className="flex justify-end gap-5 mt-4 mb-4">
          <OutlineButton
            title="Cancel"
            onClick={closeModal}
            className="w-fit px-10 text-base sm:text-lg"
          />
          <SubmitButton
            buttonType="submit"
            title="Save & Admit"
            className="w-fit text-base sm:px-10 sm:text-lg "
          />
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
