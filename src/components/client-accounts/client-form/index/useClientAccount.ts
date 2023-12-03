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
import {
  ClientContactInfoErrorType,
  ClientEducationAndEmploymentErrorType,
  ClientMaritalStatusAndSpouseErrorType,
  ClientParentsOrGuardiansErrorType,
  ClientPersonalInfoErrorType,
  ClientPlaceOfBirthAndReligionErrorType,
} from "@/types/clientFormTypes";
import { RtkQueryType } from "@/types/reactTypes";
import { DateFunc } from "@/utilities/date";
import { useEffect, useState } from "react";
import useClientFormStep from "./useClientFormStep";
import useSetEditFormData from "./useSetEditFormData";
import useSubmitClientAccountEdit from "./useSubmitClientAccountEdit";

const nrcValidateForSearchReq = (value) => {
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

  // form step state handler
  const formStepState = useClientFormStep();
  const { handleStepNext, stateCount } = formStepState;

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

  console.log(NRCprevClient);
  //
  const isClientUnder18Years = !DateFunc.isOverYears(personalInfo.dob, 18);

  // Personal information functionality Hook
  const { handlePersonalInfoChange, handlePersonalInfoNext } = usePersonalInfo({
    personalInfo,
    setPersonalInfo,
    setPersonalInfoError,
    handleStepNext,
    NRCprevClient: NRCprevClient || [],
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
    handleMaritalStatusAndSpouseNext,
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
    handlePlaceOfBirthAndReligionNext,
  } = usePlaceOfBirthReligious({
    placeOfBirthAndReligion,
    setPlaceOfBirthAndReligion,
    setPlaceOfBirthAndReligionError,
    handleStepNext,
  });
  // EducationAndEmploymentChange Functionality Hook
  const { handleEducationAndEmploymentChange } = useEducationAndEmployment({
    educationAndEmployment,
    setEducationAndEmployment,
    setEducationAndEmploymentError,
    handleStepNext,
  });

  const handleFormReset = () => {};

  // Create Client Data submission
  const { handleClientDataSubmit } = useSubmitClientAccountCreate({
    contactInfo,
    educationAndEmployment,
    maritalStatusAndSpouse,
    parentsOrGuardians,
    personalInfo,
    placeOfBirthAndReligion,
    handleFormReset,
  });

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
        // districtProvince,
      } = useSetEditFormData(editClient);
      console.log(prevPlaceOfBirthAndReligion);
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

  //
  // Client Edit form functionality end here

  // personal info form Handler
  const handleClintFormNextOperation = () => {
    // Personal info form handler
    if (stateCount === 1) {
      // handleStepNext();
      // return; // skip for develop next operation
      handlePersonalInfoNext();
      return;
    }
    // Personal info form handler
    if (stateCount === 2) {
      // handleStepNext();
      // return; // skip for develop next operation
      parentsOrGuardiansNext();
      return;
    }
    // Marital Status & Spouse Details
    if (stateCount === 3) {
      // handleStepNext();
      // return; // skip for develop next operation
      handleMaritalStatusAndSpouseNext();
    }
    // Contact Information
    if (stateCount === 4) {
      // handleStepNext();
      // return; // skip for develop next operation
      handleContactInformationNext();
    }
    // Place of Birth & Religious Denomination
    if (stateCount === 5) {
      // handleStepNext();
      // return; // skip for develop next operation
      handlePlaceOfBirthAndReligionNext();
    }
    // if (stateCount === 6) {
    //   // if (editClient?.oid) {
    //   //   handleUpdateClientDataSubmit;
    //   // } else {
    //     handleClientDataSubmit;
    //   // }
    // }
  };

  // Update Client Information Submissions
  const { handleClientDataUpdate } = useSubmitClientAccountEdit({
    contactInfo,
    educationAndEmployment,
    maritalStatusAndSpouse,
    parentsOrGuardians,
    personalInfo,
    placeOfBirthAndReligion,
    editClient,
  });
  // console.log("personal information", personalInfo);

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

    // Submit Handler
    handleClientDataSubmit,
    handleClientDataUpdate,

    // NRC prev
    NRCprevClient: NRCprevClient || [],
  };
};

export default useClientAccount;
