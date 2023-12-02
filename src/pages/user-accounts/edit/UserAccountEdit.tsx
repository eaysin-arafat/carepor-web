import BackButton from "@/components/core/buttons/BackButton";
import NextButton from "@/components/core/buttons/NextButton";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import MultiStepComponent from "@/components/shared/multi-step/multiStep";
import ContactInfo from "@/components/user-accounts/ContactInfo";
import PersonalInfo from "@/components/user-accounts/PersonalInfo";
import useEditUserAccounts from "./useEdit";

function EditUserAccount() {
  const {
    contactInfo,
    countries,
    disabledBackButton,
    errors,
    handleBack,
    handleCellphoneChange,
    handleContactInfoChange,
    handleNext,
    handleNrcChange,
    handlePersonalInfoChange,
    handleSetNoNRC,
    handleSubmit,
    isCellphoneValid,
    isLoading,
    isNRCValid,
    noNRC,
    nrc,
    personalInfo,
    stateCount,
    stepTitle,
  } = useEditUserAccounts();

  console.log("nrc", contactInfo);

  return (
    <>
      <div className="max-w-[700px] mx-auto ">
        <MultiStepComponent active={stateCount} title={stepTitle} />
      </div>
      <div className="my-8">
        <FormWrapper
          title="User Profile Edit"
          titleClass="text-center"
          maxWidth="max-w-[1022px]"
          noBackground
        >
          <>
            <form action="" className="my-5" onSubmit={handleSubmit}>
              {stateCount === 1 && (
                <PersonalInfo
                  handleChange={handlePersonalInfoChange}
                  handleNoNRC={handleSetNoNRC}
                  handleNrcChange={handleNrcChange}
                  noNrc={noNRC}
                  nrc={nrc}
                  personalInfo={personalInfo}
                  errors={errors}
                  isNrcValid={isNRCValid}
                  editMode={true}
                  key="personal-info-edit-user"
                />
              )}
              {stateCount === 2 && (
                <ContactInfo
                  contactInfo={contactInfo}
                  countries={countries}
                  handleCellphoneChange={handleCellphoneChange}
                  handleChange={handleContactInfoChange}
                  errors={errors}
                  isCellphoneValid={isCellphoneValid}
                  key="contact-info-edit-user"
                  editMode={true}
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
                {stateCount === 2 && (
                  <NextButton
                    title="Submit"
                    type="submit"
                    onClick={handleNext}
                    className=""
                  />
                )}
                {stateCount !== 2 && (
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

export default EditUserAccount;
