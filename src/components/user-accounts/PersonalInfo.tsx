import Checkbox from "../core/form-elements/Checkbox";
import CustomNrc from "../core/form-elements/CustomNrc";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import FormSection from "../core/form-layouts/FormSection";

type Props = {};

function PersonalInfo({}: Props) {
  return (
    <>
      <FormSection titleText="Personal Information">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Input label="First Name" />
          <Input label="Surname" />
          <DateInput label="Date of birth" onChange={() => {}} />
          <Input label="Sex" />
          <div className="col-span-1 md:col-span-2">
            <Input label="Designation" />
          </div>
          <CustomNrc label="NRC" state="s" onChange={() => {}} />
          <div className="col-span-1 flex items-center mt-5">
            <Checkbox label="I do not have NRC" />
          </div>
        </div>
      </FormSection>
    </>
  );
}

export default PersonalInfo;
