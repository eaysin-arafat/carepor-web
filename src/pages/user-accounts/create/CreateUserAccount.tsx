import FormLayout from "@/components/form-elements/form-layouts/FormLayout";

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
      </form>
    </FormLayout>
  );
}

export default CreateUserAccount;
