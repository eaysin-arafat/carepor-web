import BackButton from "@/components/core/buttons/BackButton";
import NextButton from "@/components/core/buttons/NextButton";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import MultiStepComponent from "@/components/shared/multi-step/multiStep";
import ContactInfo from "@/components/user-accounts/ContactInfo";
import LoginInfo from "@/components/user-accounts/LoginInfo";
import PersonalInfo from "@/components/user-accounts/PersonalInfo";
import { useState } from "react";

type Props = {};

function CreateUserAccount({}: Props) {
  const [stateCount, setStateCount] = useState(1);
  const stepTitle = [
    "Personal <br /> Information",
    "Contect <br /> Information",
    "Login <br /> Information",
  ];

  const disabledBackButton = stateCount === 1;

  const handleBack = () => {
    setStateCount((prev: number) => Math.max(prev - 1, 1));
  };
  const handleNext = () => {
    setStateCount((next: number) => Math.min(next + 1, stepTitle.length));
  };

  return (
    <>
      <div className="max-w-[700px] mx-auto ">
        <MultiStepComponent active={stateCount} title={stepTitle} />
      </div>
      <div className="my-8">
        <FormWrapper
          title="User Profile Registration"
          titleClass="text-center"
          maxWidth="max-w-[1022px]"
          noBackground
        >
          <>
            <form action="" className="my-5">
              {stateCount === 1 && <PersonalInfo />}
              {stateCount === 2 && <ContactInfo />}
              {stateCount === 3 && <LoginInfo />}
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

export default CreateUserAccount;
