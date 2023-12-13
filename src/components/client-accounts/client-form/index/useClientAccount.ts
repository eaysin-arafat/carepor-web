import usePersonalInfo from "@/components/client-accounts/client-form/PersonalInfo/usePersonalInfo";
import useContactInformation from "@/components/client-accounts/client-form/contact-information/useContactInformation";
import useEducationAndEmployment from "@/components/client-accounts/client-form/education-employment/useEducationEmployment";
import {
  contactInfoState,
  educationAndEmploymentState,
  maritalStatusAndSpouseState,
  parentsOrGuardiansState,
  personalInfoState,
  placeOfBirthAndReligionState,
} from "@/components/client-accounts/client-form/index/clientState";
import useMaritalStatusAndSpouse from "@/components/client-accounts/client-form/marital-status-And-spouse/useMaritalStatusAndSpouse";
import useParentsGuardianDetails from "@/components/client-accounts/client-form/parents-guardian-details/useParentsGuardianDetails";
import usePlaceOfBirthReligious from "@/components/client-accounts/client-form/place-of-birth-religious/usePlaceOfBirthReligious";
// import { ClientPersonalInfoType } from "@/types/clientFormTypes";
import useSubmitClientAccountCreate from "@/components/client-accounts/client-form/index/useSubmitClientAccountCreate";
import { useReadClientByNRCQuery } from "@/features/client/client-api";
import { useReadDistrictsQuery } from "@/features/district/district-api";
import { useReadHomeLanguagesQuery } from "@/features/home-language/home-language-api";
import { useReadProvincesQuery } from "@/features/province/province-api";

import useGetQueryParams from "@/hooks/useGetQueryParams";
import {
  ClientContactInfoErrorType,
  ClientEducationAndEmploymentErrorType,
  ClientMaritalStatusAndSpouseErrorType,
  ClientParentsOrGuardiansErrorType,
  ClientPersonalInfoErrorType,
  ClientPlaceOfBirthAndReligionErrorType,
} from "@/types/clientTypes";
import { RtkQueryType } from "@/types/reactTypes";
import { DateFunc } from "@/utilities/date";
import { useEffect, useState } from "react";
import useClientFormStep from "./useClientFormStep";
import useSetEditFormData from "./useSetEditFormData";
import useSubmitClientAccountEdit from "./useSubmitClientAccountEdit";

const nrcValidateForSearchReq = (value: string) => {
  const nrcReqPattern = /^\d{6}\/\d{2}\/[\d_]{1}$/;
  return !nrcReqPattern.test(value) && value != "000000/00/0";
};

/**
 *
 * @param editClientId  Client Oid
 * @param isEditForm if client edit form
 * @returns
 */
const useClientAccount = (
  ClientByKeyQuery: RtkQueryType,
  isEditForm: boolean
) => {
  // resux state receive and distructure
  const { data: editClient } = ClientByKeyQuery || {};
  const { data: province } = useReadProvincesQuery(undefined);
  const { data: district } = useReadDistrictsQuery(undefined);
  const { data: homeLanguageEnum } = useReadHomeLanguagesQuery(undefined);

  // form step state handler
  const formStepState = useClientFormStep();
  const { handleStepNext, stateCount } = formStepState;

  // back page
  const backTo = useGetQueryParams("back");

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

  // const [prevClientByNRC, setPrevClientByNRC] = useState();
  const { data: NRCprevClient } = useReadClientByNRCQuery(personalInfo?.nrc, {
    skip: nrcValidateForSearchReq(personalInfo?.nrc),
    refetchOnMountOrArgChange: true,
  });

  //
  const isClientUnder18Years = !DateFunc.isOverYears(personalInfo.dob, 18);

  const noNrc = personalInfo.nrc != "000000/00/0";
  const notPreNrc = personalInfo.nrc != editClient?.nrc;

  let alreadyExists = "";
  if (
    NRCprevClient?.length > 0 &&
    !isEditForm &&
    personalInfo.nrc != "000000/00/0"
  ) {
    alreadyExists = "NRC already exists";
  }
  if (
    NRCprevClient?.length > 0 &&
    isEditForm &&
    personalInfo.nrc != "000000/00/0" &&
    NRCprevClient[0]?.nrc != editClient?.nrc
  ) {
    alreadyExists = "NRC already exists";
  }

  // Personal information functionality Hook
  const { handlePersonalInfoChange, handleNrcChange, handlePersonalInfoNext } =
    usePersonalInfo({
      personalInfo,
      setPersonalInfo,
      setPersonalInfoError,
      handleStepNext,
      NRCprevClient,
      isEditForm,
      noNrc,
      notPreNrc,
    });
  // Parent and guardian information functionality Hook
  const { handleParentsGuardianDetailsChange, parentsOrGuardiansNext } =
    useParentsGuardianDetails({
      parentsOrGuardians,
      setParentsOrGuardians,
      setParentsOrGuardiansError,
      handleStepNext,
      isClientUnder18Years, // 18 years validation
    });
  // Marital status and Spouse functionality Hook
  const {
    handleMaritalStatusAndSpouseChange,
    // handleMaritalStatusAndSpouseNext,
  } = useMaritalStatusAndSpouse({
    maritalStatusAndSpouse,
    setMaritalStatusAndSpouse,
    setMaritalStatusAndSpouseError,
    handleStepNext,
  });
  // Parent and guardian information functionality Hook
  const {
    handleContactInformationChange,
    handleContactInformationNext,
    notZMPhoneResetContractInfo,
  } = useContactInformation({
    contactInfo,
    setContactInfo,
    setContactInfoError,
    handleStepNext,
  });
  // Place Of Birth Religious Functionality Hook
  const {
    handlePlaceOfBirthAndReligionChange,
    // handlePlaceOfBirthAndReligionNext,
  } = usePlaceOfBirthReligious({
    placeOfBirthAndReligion,
    setPlaceOfBirthAndReligion,
    setPlaceOfBirthAndReligionError,
    // handleStepNext,
  });
  // EducationAndEmploymentChange Functionality Hook
  const { handleEducationAndEmploymentChange } = useEducationAndEmployment({
    educationAndEmployment,
    setEducationAndEmployment,
    setEducationAndEmploymentError,
    // handleStepNext,
  });

  const handleFormReset = () => {
    setPersonalInfo(personalInfoState);
    setContactInfo(contactInfoState);
    setParentsOrGuardians(parentsOrGuardiansState);
    setMaritalStatusAndSpouse(maritalStatusAndSpouseState);
    setPlaceOfBirthAndReligion(placeOfBirthAndReligionState);
    setEducationAndEmployment(educationAndEmploymentState);
    setPersonalInfoError(null);
    setContactInfoError(null);
    setParentsOrGuardiansError(null);
    setMaritalStatusAndSpouseError(null);
    setPlaceOfBirthAndReligionError(null);
    setEducationAndEmploymentError(null);
  };

  // Client Edit form functionality starts here
  //
  useEffect(() => {
    if (isEditForm && editClient?.oid) {
      const {
        prevPersonalInfo,
        prevParentsOrGuardians,
        prevMaritalStatusAndSpouse,
        prevContactInfo,
        prevEducationAndEmployment,
        prevPlaceOfBirthAndReligion,
      } = useSetEditFormData(editClient);

      setPersonalInfo((prev) => ({ ...prev, ...prevPersonalInfo }));

      setParentsOrGuardians((prev) => ({
        ...prev,
        ...prevParentsOrGuardians,
      }));
      setMaritalStatusAndSpouse((prev) => ({
        ...prev,
        ...prevMaritalStatusAndSpouse,
      }));
      setContactInfo((prev) => ({ ...prev, ...prevContactInfo }));
      setPlaceOfBirthAndReligion((prev) => ({
        ...prev,
        ...prevPlaceOfBirthAndReligion,
      }));
      setEducationAndEmployment((prev) => ({
        ...prev,
        ...prevEducationAndEmployment,
      }));
    }
  }, [editClient?.oid, isEditForm]);

  // Create Client Data submission
  const { handleClientDataSubmit } = useSubmitClientAccountCreate({
    contactInfo,
    educationAndEmployment,
    maritalStatusAndSpouse,
    parentsOrGuardians,
    personalInfo,
    placeOfBirthAndReligion,
    handleFormReset,
    setMaritalStatusAndSpouseError,
    setPlaceOfBirthAndReligionError,
    // setEducationAndEmploymentError,
  });

  // Update Client Information Submissions
  const { handleClientDataUpdate } = useSubmitClientAccountEdit({
    contactInfo,
    educationAndEmployment,
    maritalStatusAndSpouse,
    parentsOrGuardians,
    personalInfo,
    placeOfBirthAndReligion,
    setMaritalStatusAndSpouseError,
    setPlaceOfBirthAndReligionError,
    // setEducationAndEmploymentError,
    editClient,
  });

  //
  // Client Edit form functionality end here
  // personal info form Handler
  const handleClintFormNextOperation = () => {
    // Personal info form handler
    if (stateCount === 1) {
      const { isSuccessPersonalInfo } = handlePersonalInfoNext();
      const { isSuccessContractInfo } = handleContactInformationNext();

      // return;
      if (!isSuccessPersonalInfo || !isSuccessContractInfo) {
        return;
      }
      // handleContactInformationNext();
      handleStepNext();
    }
    // Personal info form handler
    if (stateCount === 2) {
      parentsOrGuardiansNext();
      // handleStepNext();
      return;
    }
  };

  return {
    // form step state and handler
    formStepState,
    province,
    district,
    homeLanguageEnum,

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
    // handle NRC Change
    handleNrcChange,

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
    isClientUnder18Years,
    // contractInfo phone reset function
    notZMPhoneResetContractInfo,

    //
    // handleMaritalStatusAndSpouseNext,
    // handlePlaceOfBirthAndReligionNext,
    // Submit Handler
    handleClientDataSubmit,
    handleClientDataUpdate,

    // NRC prev
    alreadyExists,
    // Handle cancel edit
    backTo,
  };
};

export default useClientAccount;
