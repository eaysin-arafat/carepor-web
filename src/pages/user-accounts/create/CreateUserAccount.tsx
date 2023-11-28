import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import ContactInfo from "@/components/user-accounts/ContactInfo";
import LoginInfo from "@/components/user-accounts/LoginInfo";

import PersonalInfo from "@/components/user-accounts/PersonalInfo";

type Props = {};

function CreateUserAccount({}: Props) {
  return (
    <FormWrapper
      // emergencyAccess
      title="User Profile Registration"
      titleClass="text-center"
      maxWidth="max-w-[1022px]"
    >
      <form action="" className="my-5">
        <PersonalInfo />
        <ContactInfo />
        <LoginInfo />
      </form>
    </FormWrapper>
    // <FormLayout
    //   emergencyAccess
    //   className="!min-w-[950px] "
    //   subTitle="User Profile Registration"
    // >
    //   <form action="" className="my-5">
    //     <PersonalInfo />
    //     <ContactInfo />
    //     <LoginInfo />
    //   </form>
    // </FormLayout>
  );
}

export default CreateUserAccount;
