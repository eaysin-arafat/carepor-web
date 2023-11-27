import GuardianDetails from "@/components/client-accounts/GuardianDetails";
import ClientPersonalInfo from "@/components/client-accounts/PersonalInfo";
import FormLayout from "@/components/form-elements/form-layouts/FormLayout";

type Props = {};

function CreateClientAccount({}: Props) {
  return (
    <FormLayout className="" subTitle="Client Profile Registration">
      <>
        <p className="text-center mt-2">
          Fields marked by <span className="text-dangerColor">*</span> are
          mandatory
        </p>
        <form action="" className="my-5">
          <ClientPersonalInfo />
          <GuardianDetails/>
        </form>
      </>
    </FormLayout>
  );
}

export default CreateClientAccount;
