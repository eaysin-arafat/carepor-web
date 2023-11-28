import Button from "@/components/core/buttons/Button";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import FormLayout from "@/components/core/form-layouts/FormLayout";

type Props = {};

function CreateAdmission({}: Props) {
  return (
    <>
      <FormLayout
        layoutCenter
        mainTitle="New Patient Admission"
        className="md:w-[570px] "
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
              placeholder="Additinal Components"
              max={500}
            />
          </div>
          <div className="grid grid-cols-2 gap-5 mt-4">
            <Button type="submit" title="Save & Admit" />
            <Button type="outline" title="Cancel" />
          </div>
        </form>
      </FormLayout>
    </>
  );
}

export default CreateAdmission;
