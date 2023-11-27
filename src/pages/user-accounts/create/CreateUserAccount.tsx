import FormLayout from "@/components/form-elements/form-layouts/FormLayout";
import ContactInfo from "@/components/user-form/ContactInfo";
import LoginInfo from "@/components/user-form/LoginInfo";

import PersonalInfo from "@/components/user-form/PersonalInfo";

type Props = {};

function CreateUserAccount({}: Props) {
  return (
    <FormLayout
      emergencyAccess
      className="!min-w-[950px] "
      subTitle="User Profile Registration"
    >
      <form action="" className="my-5">
        <PersonalInfo />
        <ContactInfo />
        <LoginInfo />
      </form>
    </FormLayout>
  );
}

export default CreateUserAccount;
