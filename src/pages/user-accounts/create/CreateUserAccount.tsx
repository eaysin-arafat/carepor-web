import FormLayout from "@/components/core/form-layouts/FormLayout";
import ContactInfo from "@/components/user-accounts/ContactInfo";
import LoginInfo from "@/components/user-accounts/LoginInfo";

import PersonalInfo from "@/components/user-accounts/PersonalInfo";

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
