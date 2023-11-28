import ContactInformation from "@/components/client-accounts/ContactInformation";
import EducationAndEmployment from "@/components/client-accounts/EducationAndEmployment";
import GuardianDetails from "@/components/client-accounts/GuardianDetails";
import MaritalStatusAndSpouse from "@/components/client-accounts/MaritalStatusAndSpouse";
import ClientPersonalInfo from "@/components/client-accounts/PersonalInfo";
import PlaceOfBirthAndReligious from "@/components/client-accounts/PlaceOfBirthAndReligious";
import BackButton from "@/components/core/buttons/BackButton";
import NextButton from "@/components/core/buttons/NextButton";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import MultiStepComponent from "@/components/shared/multi-step/multiStep";
import { useState } from "react";

type Props = {};

function CreateClientAccount({}: Props) {
  const [stateCount, setStateCount] = useState(1);
  const stepTitle = [
    "Personal <br /> Information",
    "Parents or  <br /> Guardian Details",
    "Marital Status &  <br /> Spouse Details",
    "Contact <br /> Information",
    "Place of Birth & <br /> Religious Denomination",
    "Education &  <br /> Employment",
  ];
console.log({stateCount});
console.log({stepTitle:stepTitle.length});
const disabledBackButton = stateCount === 1

  const handleBack = () => {
    setStateCount((prev: number) => Math.max(prev - 1, 1));
  };
  const handleNext = () => {
    setStateCount((next: number) => Math.min(next + 1, stepTitle.length ));
  };

  return (
    <>
      <div className="max-w-[1022px] mx-auto ">
        <MultiStepComponent active={stateCount} title={stepTitle} />
      </div>
      <div className="my-16">
        <FormWrapper
          title="Client Profile Registration"
          titleClass="text-center"
          maxWidth="max-w-[1022px]"
        >
          <>
            <p className="text-center mt-2">
              Fields marked by <span className="text-dangerColor">*</span> are
              mandatory
            </p>
            <form action="" className="my-5">
              {stateCount === 1 && <ClientPersonalInfo />}
              {stateCount === 2 && <GuardianDetails />}
              {stateCount === 3 && <MaritalStatusAndSpouse />}
              {stateCount === 4 && <ContactInformation />}
              {stateCount === 5 && <PlaceOfBirthAndReligious />}
              {stateCount === 6 && <EducationAndEmployment />}
            </form>
            <div className="flex gap-5 mt-5 justify-end">
              <BackButton
                disabled={disabledBackButton}
                title="Back"
                type="button"
                onClick={handleBack}
                className="w-40"
              />
              {stateCount === 6 && (
                <NextButton
                  title="Submit"
                  type="submit"
                  onClick={handleNext}
                  className=""
                />
              )}
              {stateCount !== 6 && (
                <NextButton
                title="Next"
                type="button"
                onClick={handleNext}
                className="w-40"
              />
              )}
            </div>
          </>
        </FormWrapper>
      </div>
    </>
  );
}

export default CreateClientAccount;
