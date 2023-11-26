import Checkbox from "../form-elements/Checkbox";
import Input from "../form-elements/Input";
import FormSection from "../form-elements/form-layouts/FormSection";

type Props = {};

function PersonalInfo({}: Props) {
  return (
    <>
      <FormSection titleText="Personal Information">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Input label="First Name" />
          <Input label="Surname" />
          <Input label="Date of birth" />
          <Input label="Sex" />
          <div className="col-span-1 md:col-span-2">
            <Input label="Designation" />
          </div>
          <Input label="NRC" />
          <div className="col-span-1 flex items-center">
            <Checkbox label="I do not have NRC" />
          </div>
        </div>
      </FormSection>
    </>
  );
}

export default PersonalInfo;
