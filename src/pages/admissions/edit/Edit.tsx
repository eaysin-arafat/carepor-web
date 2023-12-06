import OutlineButton from "@/components/core/buttons/OutlineButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";

type Props = {};

function EditAdmission({}: Props) {
  return (
    <>
      <FormWrapper
        noBackground
        isAppNameHide
        title="Edit Admission"
        maxWidth="max-w-[1022px] "
        titleClass="text-center"
        className="rounded-lg mb-5"
        childrenMaxWidth="w-full"
      >
        <form action="" className="mt-5">
          <div className="grid grid-cols-2 gap-5">
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
            <div className="col-span-2">
              <Textarea
                label="Additional Comments"
                placeholder="Additional Components"
                max={500}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5 ">
            <SubmitButton buttonType="submit" title="Save & Admit" />
            <OutlineButton title="Cancel" />
          </div>
        </form>
      </FormWrapper>
    </>
  );
}

export default EditAdmission;
