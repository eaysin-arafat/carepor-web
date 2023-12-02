import OutlineButton from "@/components/core/buttons/OutlineButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";

type Props = {};

function CreateAdmission({}: Props) {
  return (
    <>
      <FormWrapper
        contentCenter
        title="New Patient Admission"
        maxWidth="max-w-[570px]"
        titleClass="text-center"
        className="mb-5"
      >
        <form action="" className="mt-5">
          <div className="flex flex-col gap-5">
            <DatePicker
              name="Admission Date"
              label="Admission Date"
              required
              onChange={() => {}}
            />
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

            <Textarea
              label="Additional Comments"
              placeholder="Additional Components"
              max={500}
            />
          </div>
          <div className="grid grid-cols-2 gap-5 mt-4">
            <SubmitButton buttonType="submit" title="Save & Admit" />
            <OutlineButton title="Cancel" />
          </div>
        </form>
      </FormWrapper>
    </>
  );
}

export default CreateAdmission;
