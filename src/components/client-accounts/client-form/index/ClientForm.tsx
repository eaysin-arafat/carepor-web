import ClientPersonalInfo from "@/components/client-accounts/client-form/PersonalInfo/PersonalInfo";
import ContactInformation from "@/components/client-accounts/client-form/contact-information/ContactInformation";
import EducationAndEmployment from "@/components/client-accounts/client-form/education-employment/EducationAndEmployment";
import MaritalStatusAndSpouse from "@/components/client-accounts/client-form/marital-status-And-spouse/MaritalStatusAndSpouse";
import GuardianDetails from "@/components/client-accounts/client-form/parents-guardian-details/ParentsGuardianDetails";
import PlaceOfBirthAndReligious from "@/components/client-accounts/client-form/place-of-birth-religious/PlaceOfBirthAndReligious";
import BackButton from "@/components/core/buttons/BackButton";
import NextButton from "@/components/core/buttons/NextButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";

function ClientForm({ clientManager, isEditForm }) {
  const {
    // form step state
    formStepState,
    // Select enums
    district,
    province,

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

    // Error State
    personalInfoError,
    parentsOrGuardiansError,
    maritalStatusAndSpouseError,
    contactInfoError,
    placeOfBirthAndReligionError,
    educationAndEmploymentError,

    // form Handler
    handleClintFormNextOperation,
    //
    notZMPhoneResetContractInfo,

    // Submit Handler
    handleClientDataSubmit,
    handleClientDataUpdate,
    //
    alreadyExists,
  } = clientManager;

  // form step state and handler
  const { disabledBackButton, handleStepBack, stateCount } = formStepState;

  return (
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
            alreadyExists={alreadyExists}
          />
        )}
        {stateCount === 2 && (
          <GuardianDetails
            parentsOrGuardians={parentsOrGuardians}
            parentsOrGuardiansError={parentsOrGuardiansError}
            handleParentsGuardianDetailsChange={
              handleParentsGuardianDetailsChange
            }
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
            handleContactInformationChange={handleContactInformationChange}
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
            province={province}
            district={district}
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
            onClick={
              isEditForm ? handleClientDataUpdate : handleClientDataSubmit
            }
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
  );
}

export default ClientForm;
