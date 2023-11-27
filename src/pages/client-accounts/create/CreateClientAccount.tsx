import ContactInformation from "@/components/client-accounts/ContactInformation";
import EducationAndEmployment from "@/components/client-accounts/EducationAndEmployment";
import GuardianDetails from "@/components/client-accounts/GuardianDetails";
import MaritalStatusAndSpouse from "@/components/client-accounts/MaritalStatusAndSpouse";
import ClientPersonalInfo from "@/components/client-accounts/PersonalInfo";
import PlaceOfBirthAndReligious from "@/components/client-accounts/PlaceOfBirthAndReligious";
import FormLayout from "@/components/core/form-layouts/FormLayout";

type Props = {};

function CreateClientAccount({}: Props) {
  return (
    <FormLayout
      mainTitle="Client Profile Registration"
      className="max-w-[1022px]"
    >
      <>
        <p className="text-center text-sm mt-2">
          Fields marked by <span className="text-dangerColor">*</span> are
          mandatory
        </p>
        <form action="" className="my-5">
          <ClientPersonalInfo />
          <GuardianDetails />
          <MaritalStatusAndSpouse />
          <ContactInformation />
          <PlaceOfBirthAndReligious />
          <EducationAndEmployment />
        </form>
      </>
    </FormLayout>
  );
}

export default CreateClientAccount;
