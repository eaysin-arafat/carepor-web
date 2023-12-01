import ClientPersonalInfo from "@/components/client-accounts/client-form/PersonalInfo/PersonalInfo";
import ContactInformation from "@/components/client-accounts/client-form/contact-information/ContactInformation";
import EducationAndEmployment from "@/components/client-accounts/client-form/education-employment/EducationAndEmployment";
import MaritalStatusAndSpouse from "@/components/client-accounts/client-form/marital-status-And-spouse/MaritalStatusAndSpouse";
import GuardianDetails from "@/components/client-accounts/client-form/parents-guardian-details/ParentsGuardianDetails";
import PlaceOfBirthAndReligious from "@/components/client-accounts/client-form/place-of-birth-religious/PlaceOfBirthAndReligious";
import BackButton from "@/components/core/buttons/BackButton";
import NextButton from "@/components/core/buttons/NextButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import MultiStepComponent from "@/components/shared/multi-step/multiStep";
import useCreateClientAccount from "./useCreateClientAccount";

function CreateClientAccount() {
  const {
    // form step state
    formStepState,
    // state values
    personalInfo,
    parentsOrGuardians,
    maritalStatusAndSpouse,
    contactInfo,
    placeOfBirthAndReligion,
    educationAndEmployment,

    // onchange event handlers
    handlePersonalInfoChange,
    handleParentsGuardianDetailsChange,
    handleMaritalStatusAndSpouseChange,
    handleContactInformationChange,
    handlePlaceOfBirthAndReligionChange,
    handleEducationAndEmploymentChange,
    // filtered district and province //
    districtAndProvince,

    // Error State
    personalInfoError,
    parentsOrGuardiansError,
    maritalStatusAndSpouseError,
    contactInfoError,
    placeOfBirthAndReligionError,
    educationAndEmploymentError,
    // Error setState
    // setPersonalInfoError,
    // setParentsOrGuardiansError,
    // setMaritalStatusAndSpouseError,
    // setContactInfoError,
    // setPlaceOfBirthAndReligionError,
    // setEducationAndEmploymentError,

    // form Handler
    handleClintFormNextOperation,
    //
    notZMPhoneResetContractInfo,

    // Submit Handler
    handleClientDataSubmit,
  } = useCreateClientAccount();

  // console.log(personalInfo.dob);
  // const dateCheck = DateFunc.isOverYears("2018-11-29T11:50:03.000Z", 5);
  // console.log(dateCheck);

  // form step state and handler
  const {
    disabledBackButton,
    handleStepBack,
    handleStepNext,
    stepTitle,
    stateCount,
  } = formStepState;

  console.log({ parentsOrGuardiansError });

  return (
    <>
      <div className="max-w-[1022px] mx-auto ">
        <MultiStepComponent active={stateCount} title={stepTitle} />
      </div>
      <div className="my-8">
        <FormWrapper
          title="Client Profile Registration"
          titleClass="text-center"
          maxWidth="max-w-[1022px]"
          noBackground
        >
          <>
            <p className="text-center mt-2">
              Fields marked by <span className="text-dangerColor">*</span> are
              mandatory
            </p>
            <form action="" className="my-5">
              {stateCount === 1 && (
                <ClientPersonalInfo
                  personalInfo={personalInfo}
                  personalInfoError={personalInfoError}
                  handlePersonalInfoChange={handlePersonalInfoChange}
                />
              )}
              {stateCount === 2 && (
                <GuardianDetails
                  parentsOrGuardians={parentsOrGuardians}
                  parentsOrGuardiansError={parentsOrGuardiansError}
                  handleParentsGuardianDetailsChange={
                    handleParentsGuardianDetailsChange
                  }
                  // guardianSECError={guardianSECError}
                />
              )}
              {stateCount === 3 && (
                <MaritalStatusAndSpouse
                  maritalStatusAndSpouse={maritalStatusAndSpouse}
                  maritalStatusAndSpouseError={maritalStatusAndSpouseError}
                  handleMaritalStatusAndSpouseChange={
                    handleMaritalStatusAndSpouseChange
                  }
                />
              )}
              {stateCount === 4 && (
                <ContactInformation
                  contactInfo={contactInfo}
                  contactInfoError={contactInfoError}
                  handleContactInformationChange={
                    handleContactInformationChange
                  }
                  notZMPhoneResetContractInfo={notZMPhoneResetContractInfo}
                />
              )}
              {stateCount === 5 && (
                <PlaceOfBirthAndReligious
                  placeOfBirthAndReligion={placeOfBirthAndReligion}
                  placeOfBirthAndReligionError={placeOfBirthAndReligionError}
                  handlePlaceOfBirthAndReligionChange={
                    handlePlaceOfBirthAndReligionChange
                  }
                  districtAndProvince={districtAndProvince}
                />
              )}
              {stateCount === 6 && (
                <EducationAndEmployment
                  educationAndEmployment={educationAndEmployment}
                  educationAndEmploymentError={educationAndEmploymentError}
                  handleEducationAndEmploymentChange={
                    handleEducationAndEmploymentChange
                  }
                />
              )}
            </form>
            <div className="flex gap-5 mt-5 justify-end">
              <BackButton
                disabled={disabledBackButton}
                title="Back"
                type="button"
                onClick={handleStepBack}
                className="w-40"
              />
              {stateCount === 6 && (
                <SubmitButton
                  title="Submit"
                  buttonType="submit"
                  onClick={handleClientDataSubmit}
                  className="w-40"
                />
              )}
              {stateCount !== 6 && (
                <NextButton
                  title="Next"
                  type="button"
                  onClick={handleClintFormNextOperation}
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
