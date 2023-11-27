import FormSection from "../core/form-layouts/FormSection";
import DatePicker from "../core/form-elements/CustomDatePicker";
import Select from "../core/form-elements/Select";
import Textarea from "../core/form-elements/textarea";

type Props = {};

function AdmissionForm({}: Props) {
  return (
    <>
      <FormSection titleText="Admission Details">
        <>
          <div className="mt-4">
            <DatePicker
              name="Admission Date"
              label="Admission Date"
              required
              onChange={() => {}}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-4">
            <Select label="Department">
              <option value="">Select</option>
              <option value="">Engineer</option>
              <option value="">Printing</option>
            </Select>
            <Select label="Firm/Unit">
              <option value="">Select</option>
              <option value="">Engineer</option>
              <option value="">Printing</option>
            </Select>
            <Select label="Ward">
              <option value="">Select</option>
              <option value="">001</option>
              <option value="">002</option>
            </Select>
            <Select label="Bed">
              <option value="">Select</option>
              <option value="">502</option>
              <option value="">503</option>
            </Select>
          </div>
          <div className="mt-4">
            <Textarea
              label="Additional Comments"
              placeholder="Additinal Components"
              max={500}
            />
          </div>
        </>
      </FormSection>
    </>
  );
}

export default AdmissionForm;
