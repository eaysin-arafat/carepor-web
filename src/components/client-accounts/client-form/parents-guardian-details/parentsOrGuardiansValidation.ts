import {
  ClientParentsOrGuardiansErrorType,
  ClientParentsOrGuardiansType,
} from "@/types/clientFormTypes";
import { nameMinMaxCheck } from "@/utilities/string-validation";
import { TypeValidation } from "@/utilities/type-valdation";

const parentsOrGuardiansValidation = (
  formData: ClientParentsOrGuardiansType,
  isClientUnder18Years: boolean
) => {
  let errors: ClientParentsOrGuardiansErrorType = {};
  // let isParentsOrGuardianFormError: boolean = false;

  const { isValidMothersData, mothersDataError, mothersDataIncomplete } =
    mothersSectionValidation(formData);
  const { isValidFathersData, fathersDataError, fathersDataIncomplete } =
    fatherSectionValidation(formData);
  const { isValidGuardiansData, guardianDataError, guardianDataIncomplete } =
    guardianSectionValidation(formData);

  if (isClientUnder18Years) {
    if (!isValidMothersData && !isValidFathersData && !isValidGuardiansData) {
      errors.parentsOrGuardianFormError =
        "Please complete at last one section of mother, father or guardian.";
    } else {
      delete errors.parentsOrGuardianFormError;
    }
  } else {
    delete errors.parentsOrGuardianFormError;
  }

  if (mothersDataIncomplete) {
    errors = { ...errors, ...mothersDataError };
    errors.mothersDataIncomplete = true;
  } else {
    delete errors.mothersFirstName;
    delete errors.motherNationality;
    delete errors.mothersSurname;
    delete errors.mothersDataIncomplete;
  }
  if (fathersDataIncomplete) {
    errors = { ...errors, ...fathersDataError };
    errors.fathersDataIncomplete = true;
  } else {
    delete errors.fathersFirstName;
    delete errors.fathersSurname;
    delete errors.fatherNationality;
    delete errors.fathersDataIncomplete;
  }
  if (guardianDataIncomplete) {
    errors = { ...errors, ...guardianDataError };
    errors.guardianDataIncomplete = true;
  } else {
    delete errors.guardiansFirstName;
    delete errors.guardiansSurname;
    delete errors.guardianNationality;
    delete errors.guardianDataIncomplete;
  }

  // data format validation
  dataFormatValidation(formData, errors);

  console.log({ isParentsOrGuardiansValid: Object.keys(errors).length === 0 });

  if (Object.keys(errors).length === 0) {
    delete errors.parentsOrGuardianFormError;
  }

  return {
    isParentsOrGuardiansValid: Object.keys(errors).length === 0,
    parentsOrGuardiansErrors: errors,
    // Parents or Guardians  form section errors

    // sectionErrors: {
    //   isParentsOrGuardianFormError,
    //   mothersDataIncomplete,
    //   fathersDataIncomplete,
    //   guardianDataIncomplete,
    // },
  };
};

export default parentsOrGuardiansValidation;

//
// Section divided validation
//
const mothersSectionValidation = (formData: ClientParentsOrGuardiansType) => {
  const errors: ClientParentsOrGuardiansErrorType = {};
  let mothersDataIncomplete: boolean = false;
  const {
    mothersFirstName,
    mothersSurname,
    motherNationality,
    mothersNRC,
    motherNAPSANumber,
  } = formData;

  if (!mothersFirstName) errors.mothersFirstName = "Please enter first name";
  if (!mothersSurname) errors.mothersSurname = "Please enter sure name";
  if (!motherNationality)
    errors.motherNationality = "Please select nationality";

  if (
    (mothersNRC || motherNAPSANumber) &&
    (!motherNationality || !mothersFirstName || !mothersSurname)
  ) {
    mothersDataIncomplete = true;
  } else {
    mothersDataIncomplete = false;
  }

  return {
    isValidMothersData: Object.keys(errors).length === 0,
    mothersDataError: errors,
    mothersDataIncomplete,
  };
};
const fatherSectionValidation = (formData: ClientParentsOrGuardiansType) => {
  const errors: ClientParentsOrGuardiansErrorType = {};
  const {
    fatherNAPSANumber,
    fathersNRC,
    fatherNationality,
    fathersFirstName,
    fathersSurname,
  } = formData;

  let fathersDataIncomplete: boolean = false;

  if (!fathersFirstName) errors.fathersFirstName = "Please enter first name";
  if (!fathersSurname) errors.fathersSurname = "Please enter sure name";
  if (!fatherNationality) errors.fatherNationality = "Please Select National";

  if (
    (fathersNRC || fatherNAPSANumber) &&
    (!fatherNationality || !fathersFirstName || !fathersSurname)
  ) {
    fathersDataIncomplete = true;
  } else {
    fathersDataIncomplete = false;
  }

  return {
    isValidFathersData: Object.keys(errors).length === 0,
    fathersDataError: errors,
    fathersDataIncomplete,
  };
};
const guardianSectionValidation = (formData: ClientParentsOrGuardiansType) => {
  const errors: ClientParentsOrGuardiansErrorType = {};
  let guardianDataIncomplete: boolean = false;

  const {
    guardianNationality,
    guardiansFirstName,
    guardiansSurname,
    guardianNAPSANumber,
    guardianRelationship,
    guardiansNRC,
  } = formData;

  if (!guardiansFirstName)
    errors.guardiansFirstName = "Please enter first name";
  if (!guardiansSurname) errors.guardiansSurname = "Please enter sure name";
  if (!guardianNationality)
    errors.guardianNationality = "Please select nationality";

  if (
    (guardianRelationship || guardianNAPSANumber || guardiansNRC) &&
    (!guardianNationality || !guardiansFirstName || !guardiansSurname)
  ) {
    guardianDataIncomplete = true;
  } else {
    guardianDataIncomplete = false;
  }

  return {
    isValidGuardiansData: Object.keys(errors).length === 0,
    guardianDataError: errors,
    guardianDataIncomplete,
  };
};

// Form data pattern matching
const dataFormatValidation = (
  formData: ClientParentsOrGuardiansType,
  errors: ClientParentsOrGuardiansErrorType
) => {
  if (
    formData.fathersNRC &&
    formData.fathersNRC !== "______/__/_" &&
    !TypeValidation.isNrcValid(formData.fathersNRC)
  )
    errors.fathersNRC = "Invalid NRC";
  if (
    formData.mothersNRC &&
    formData.mothersNRC !== "______/__/_" &&
    !TypeValidation.isNrcValid(formData.mothersNRC)
  )
    errors.mothersNRC = "Invalid NRC";
  if (
    formData.guardiansNRC &&
    formData.guardiansNRC !== "______/__/_" &&
    !TypeValidation.isNrcValid(formData.guardiansNRC)
  )
    errors.guardiansNRC = "Invalid NRC";
  nameMinMaxCheck(
    formData.mothersFirstName,
    "mothersFirstName",
    errors,
    false,
    "Please enter first name"
  );
  nameMinMaxCheck(
    formData.mothersSurname,
    "mothersSurname",
    errors,
    false,
    "Please enter sure name"
  );
  nameMinMaxCheck(
    formData.fathersSurname,
    "fathersSurname",
    errors,
    false,
    "Please enter sure name"
  );
  nameMinMaxCheck(
    formData.fathersFirstName,
    "fathersFirstName",
    errors,
    false,
    "Please enter first name"
  );
  nameMinMaxCheck(
    formData.guardiansFirstName,
    "guardiansFirstName",
    errors,
    false,
    "Please enter first name"
  );
  nameMinMaxCheck(
    formData.guardiansSurname,
    "guardiansSurname",
    errors,
    false,
    "Please enter sure name"
  );
};

/**
 *  if (
    mothersFirstName ||
    mothersSurname ||
    mothersNRC ||
    motherNAPSANumber ||
    motherNationality
  ) {
    if (!mothersFirstName) errors.mothersFirstName = "Please enter firstname.";
    if (!mothersSurname) errors.mothersSurname = "Please enter surname.";
    if (mothersFirstName?.length === 1)
      errors.mothersFirstName = "Firstname should be atleast 2 characters.";
    if (mothersSurname?.length === 1)
      errors.mothersSurname = "Firstname should be atleast 2 characters.";
    if (!motherNationality)
      errors.motherNationality = "Please select nationality.";
    if (mothersNRC && !TypeValidation.isNrcValid(mothersNRC)) errors.mothersNRC = "Invalid NRC";
    // if unsuccessful section data
    if (!mothersFirstName && !mothersSurname && !motherNationality) {
      guardianSectionError.mothersDataScroll = "mothersDataScroll";
    }
  }
 */

// export type ClientGuardianIncompleteType = {
//   mothersDataIncomplete: boolean;
//   fathersDataIncomplete: boolean;
//   guardianDataIncomplete: boolean;
// };
