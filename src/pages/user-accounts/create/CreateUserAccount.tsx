import BackButton from "@/components/core/buttons/BackButton";
import NextButton from "@/components/core/buttons/NextButton";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import MultiStepComponent from "@/components/shared/multi-step/multiStep";
import ContactInfo from "@/components/user-accounts/ContactInfo";
import LoginInfo from "@/components/user-accounts/LoginInfo";
import PersonalInfo from "@/components/user-accounts/PersonalInfo";
import useUserRegistration from "./useCreate";

function CreateUserAccount() {
  const {
    contactInfo,
    countries,
    errors,
    handleCellphoneChange,
    handleContactInfoChange,
    handleLoginInfoChange,
    handleNrcChange,
    handlePersonalInfoChange,
    handleSubmit,
    handleUsernameChange,
    isCellphoneValid,
    isNRCValid,
    isUsernameValid,
    loginInfo,
    noNRC,
    nrc,
    personalInfo,
    username,
    handleSetNoNRC,
    disabledBackButton,
    handleBack,
    handleNext,
    stateCount,
    stepTitle,
  } = useUserRegistration();

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
          className="rounded-lg"
          childrenMaxWidth="w-full"
        >
          <>
            <form action="" className="my-5" onSubmit={handleSubmit}>
              {stateCount === 1 && (
                <PersonalInfo
                  personalInfo={personalInfo}
                  handleChange={handlePersonalInfoChange}
                  noNrc={noNRC}
                  handleNoNRC={handleSetNoNRC}
                  handleNrcChange={handleNrcChange}
                  nrc={nrc}
                  errors={errors}
                  isNrcValid={isNRCValid}
                />
              )}
              {stateCount === 2 && (
                <ContactInfo
                  contactInfo={contactInfo}
                  handleChange={handleContactInfoChange}
                  errors={errors}
                  countries={countries}
                  handleCellphoneChange={handleCellphoneChange}
                  isCellphoneValid={isCellphoneValid}
                />
              )}
              {stateCount === 3 && (
                <LoginInfo
                  loginInfo={loginInfo}
                  handleChange={handleLoginInfoChange}
                  errors={errors}
                  username={username}
                  handleUsernameChange={handleUsernameChange}
                  isUsernameValid={isUsernameValid}
                />
              )}

              <div className="flex gap-5 mt-5 justify-end">
                <BackButton
                  disabled={disabledBackButton}
                  title="Back"
                  type="button"
                  onClick={handleBack}
                  className="w-40"
                />
                {stateCount === 3 && (
                  <NextButton title="Submit" type="submit" className="" />
                )}

                {stateCount !== 3 && (
                  <NextButton
                    title="Next"
                    type="button"
                    onClick={handleNext}
                    className="w-40"
                  />
                )}
              </div>
            </form>
          </>
        </FormWrapper>
      </div>
    </>
  );
}

export default CreateUserAccount;
