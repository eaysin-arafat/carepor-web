import usePersonalInfo from "@/components/client-accounts/client-form/PersonalInfo/usePersonalInfo";
import {
  contactInfoState,
  educationAndEmploymentState,
  maritalStatusAndSpouseState,
  parentsOrGuardiansState,
  personalInfoState,
  placeOfBirthAndReligionState,
} from "@/components/client-accounts/client-form/clientState";
import useContactInformation from "@/components/client-accounts/client-form/contact-information/useContactInformation";
import useEducationAndEmployment from "@/components/client-accounts/client-form/education-employment/useEducationEmployment";
import useMaritalStatusAndSpouse from "@/components/client-accounts/client-form/marital-status-And-spouse/useParentsGuardianDetails";
import useParentsGuardianDetails from "@/components/client-accounts/client-form/parents-guardian-details/useParentsGuardianDetails";
import usePlaceOfBirthReligious from "@/components/client-accounts/client-form/place-of-birth-religious/usePlaceOfBirthReligious";
// import { ClientPersonalInfoType } from "@/types/clientFormTypes";
import {
  ClientContactInfoErrorType,
  ClientEducationAndEmploymentErrorType,
  ClientMaritalStatusAndSpouseErrorType,
  ClientParentsOrGuardiansErrorType,
  ClientPersonalInfoErrorType,
  ClientPlaceOfBirthAndReligionErrorType,
} from "@/types/clientFormTypes";
import { useState } from "react";
import useClientFormStep from "./useClientFormStype";

const useCreateClientAccount = (editClientId?: string) => {
  console.log(editClientId);
  // form step state handler
  const formStepState = useClientFormStep();

  // form data states
  const [personalInfo, setPersonalInfo] = useState(personalInfoState);
  const [parentsOrGuardians, setParentsOrGuardians] = useState(
    parentsOrGuardiansState
  );
  const [maritalStatusAndSpouse, setMaritalStatusAndSpouse] = useState(
    maritalStatusAndSpouseState
  );
  const [contactInfo, setContactInfo] = useState(contactInfoState);
  const [placeOfBirthAndReligion, setPlaceOfBirthAndReligion] = useState(
    placeOfBirthAndReligionState
  );
  const [educationAndEmployment, setEducationAndEmployment] = useState(
    educationAndEmploymentState
  );

  // form error states
  const [personalInfoError, setPersonalInfoError] =
    useState<ClientPersonalInfoErrorType>(null);
  const [parentsOrGuardiansError, setParentsOrGuardiansError] =
    useState<ClientParentsOrGuardiansErrorType>(null);
  const [maritalStatusAndSpouseError, setMaritalStatusAndSpouseError] =
    useState<ClientMaritalStatusAndSpouseErrorType>(null);
  const [contactInfoError, setContactInfoError] =
    useState<ClientContactInfoErrorType>(null);
  const [placeOfBirthAndReligionError, setPlaceOfBirthAndReligionError] =
    useState<ClientPlaceOfBirthAndReligionErrorType>(null);
  const [educationAndEmploymentError, setEducationAndEmploymentError] =
    useState<ClientEducationAndEmploymentErrorType>(null);

  // Personal information functionality Hook
  const { handlePersonalInfoChange } = usePersonalInfo({
    personalInfo,
    setPersonalInfo,
  });
  // Parent and guardian information functionality Hook
  const { handleParentsGuardianDetailsChange } = useParentsGuardianDetails({
    parentsOrGuardians,
    setParentsOrGuardians,
  });
  // Marital status and Spouse functionality Hook
  const { handleMaritalStatusAndSpouseChange } = useMaritalStatusAndSpouse({
    maritalStatusAndSpouse,
    setMaritalStatusAndSpouse,
  });
  // Parent and guardian information functionality Hook
  const { handleContactInformationChange } = useContactInformation({
    contactInfo,
    setContactInfo,
  });
  // Place Of Birth Religious functionality Hook
  const { handlePlaceOfBirthAndReligionChange, districtAndProvince } =
    usePlaceOfBirthReligious({
      placeOfBirthAndReligion,
      setPlaceOfBirthAndReligion,
    });
  const { handleEducationAndEmploymentChange } = useEducationAndEmployment({
    educationAndEmployment,
    setEducationAndEmployment,
  });

  return {
    // form step state and handler
    formStepState,

    // state value
    personalInfo,
    parentsOrGuardians,
    maritalStatusAndSpouse,
    contactInfo,
    placeOfBirthAndReligion,
    educationAndEmployment,
    // set state function
    setPersonalInfo,
    setParentsOrGuardians,
    setMaritalStatusAndSpouse,
    setContactInfo,
    setPlaceOfBirthAndReligion,
    setEducationAndEmployment,
    // onChange handlers
    handlePersonalInfoChange,
    handleParentsGuardianDetailsChange,
    handleMaritalStatusAndSpouseChange,
    handleContactInformationChange,
    handlePlaceOfBirthAndReligionChange,
    handleEducationAndEmploymentChange,

    // district and provence filtered with Hooks // ContactInformation
    districtAndProvince,

    // Error State
    personalInfoError,
    parentsOrGuardiansError,
    maritalStatusAndSpouseError,
    contactInfoError,
    placeOfBirthAndReligionError,
    educationAndEmploymentError,
    // Error setState
    setPersonalInfoError,
    setParentsOrGuardiansError,
    setMaritalStatusAndSpouseError,
    setContactInfoError,
    setPlaceOfBirthAndReligionError,
    setEducationAndEmploymentError,
  };
};

export default useCreateClientAccount;
