import { getAgeMessage } from "@/data/data-formatting";
import { isDateInFuture } from "@/lib/helpers/date-helpers";
import { handlePageScroll } from "@/lib/helpers/scroll";
import isEmail from "validator/lib/isEmail";

const checkMothersData = (
  {
    mothersFirstName,
    mothersSurname,
    mothersNRC,
    motherNAPSANumber,
    motherNationality,
  },
  error
) => {
  const mothersError = {};

  if (!mothersFirstName) mothersError.mothersFirstName = "Required";
  if (!mothersSurname) mothersError.mothersSurname = "Required";
  if (!motherNationality) mothersError.motherNationality = "Required";

  // stringLengthValidator("Firstname", "mothersFirstName", mothersFirstName, error);
  // stringLengthValidator("Surname", "mothersSurname", mothersSurname, error);
  // if (!mothersNRC) mothersError.mothersNRC = "Required";
  // if (mothersNRC && mothersNRC.length !== 11) error.mothersNRC = "Invalid NRC!"
  // if (!motherNAPSANumber) mothersError.motherNAPSANumber = "Required";

  return {
    mothersError,
    isValidMothers: Object.keys(mothersError)?.length === 0,
  };
};
const checkFathersData = (
  {
    fathersFirstName,
    fathersSurname,
    fathersNRC,
    fatherNAPSANumber,
    fatherNationality,
  },
  error
) => {
  const fathersError = {};

  if (!fathersFirstName) fathersError.fathersFirstName = "Required";
  if (!fathersSurname) fathersError.fathersSurname = "Required";
  if (!fatherNationality) fathersError.fatherNationality = "Required";
  // stringLengthValidator("Firstname", "fathersFirstName", fathersFirstName, error);
  // stringLengthValidator("Surname", "fathersSurname", fathersSurname, error);
  // if (!fathersNRC) fathersError.fathersNRC = "Required";
  // if (fathersNRC && fathersNRC.length !== 11) error.fathersNRC = "Invalid NRC!"

  return {
    fathersError,
    isValidFathers: Object.keys(fathersError)?.length === 0,
  };
};
const checkGuardians = (
  {
    guardiansFirstName,
    guardiansSurname,
    guardiansNRC,
    guardianNAPSANumber,
    guardianNationality,
    guardianRelationship,
  },
  error
) => {
  const guardiansError = {};
  if (!guardiansFirstName) guardiansError.guardiansFirstName = "Required";
  if (!guardiansSurname) guardiansError.guardiansSurname = "Required";
  if (!guardianNationality) guardiansError.guardianNationality = "Required";
  // stringLengthValidator("Firstname", "guardiansFirstName", guardiansFirstName, error);
  // stringLengthValidator("Surname", "guardiansSurname", guardiansSurname, error);

  // if (!guardiansNRC) guardiansError.guardiansNRC = "Required";
  // if (guardiansNRC && guardiansNRC.length !== 11) error.guardiansNRC = "Invalid NRC!"

  // if (!guardianNAPSANumber) guardiansError.guardianNAPSANumber = "Required";
  // if (!guardianRelationship) guardiansError.guardianRelationship = "Required";

  return {
    guardiansError,
    isValidGuardians: Object.keys(guardiansError)?.length === 0,
  };
};

const stringLengthValidator = (
  name,
  keyName,
  data,
  error,
  min = 2,
  max = 60
) => {
  // if(!data) error[keyName] = "Required";
  if (data) {
    const length = data?.length;
    if (length < min && data)
      error[keyName] = name + " should be atleast 2 characters.";
    if (length > max && data)
      error[keyName] = name + " should be max 60 characters.";
  }
};

//
const checkValidPhoneNo = (key, cellphone, countryCode, error) => {
  // if (cellphone == "00000000000") {
  //   return false;
  // }
  const cellPhoneLength = cellphone?.length;
  const cellPhoneStartWith = cellphone.charAt(0);
  const errorMessage =
    "Please write valid Zambian cell number. Valid cellphone number must start with a '0' and should not exceed 10 digits in length.";
  if (+countryCode === 260) {
    if (cellPhoneLength == 9) {
      // DO Nothing
    } else if (+cellPhoneLength === 10 && +cellPhoneStartWith === 0) {
      // DO Nothing
    } else {
      error[key] = errorMessage;
    }
  } else {
    if (+cellPhoneLength >= 5 && +cellPhoneLength <= 11) {
      // DO Nothing
    } else {
      error[key] =
        "Please write valid cell number. Valid cellphone number should not exceed 11 digits in length & not less then 5.";
    }
  }
};

export const clientCreateValidator = (client) => {
  const {
    //  Personal Info
    firstName,
    surname,
    dob,
    sex,
    nrc,
    noNRC,
    countryId,
    registrationDate,
    napsaNumber,
    underFiveCardNumber,
    nupn,
    // Parents or Guardian Details
    fathersFirstName,
    fathersSurname,
    fathersNRC,
    fatherNAPSANumber,
    fatherNationality,
    mothersFirstName,
    mothersSurname,
    mothersNRC,
    motherNAPSANumber,
    motherNationality,
    guardiansFirstName,
    guardiansSurname,
    guardiansNRC,
    guardianNAPSANumber,
    guardianNationality,
    guardianRelationship,
    // Marital Status & Spouse Details
    maritalStatus,
    spousesLegalName,
    spousesSurname,
    // Contract Info Phone
    cellphoneCountryCode,
    cellphone,
    otherCellphoneCountryCode,
    otherCellphone,
    noCellphone,
    email,
    landlineCountryCode,
    landline,

    householdNumber,
    road,
    area,
    townName,
    landmarks,
    // Place of Birth & Religious Denomination
    homeLanguageId,
    isZambianBorn,
    birthPlace,
    provinceId,
    districtId,
    // Education And Employment Info
    occupationId,
    educationLevelId,
    // Client search data
    searchClients,
    isEditForm,
    clientPrevData,
  } = client;

  let error = {};
  let guardianSectionError = {};

  const testNrc = (nrc) => {
    const nrcPattarn = /^\d{6}\/\d{2}\/\d{1}$/;
    return nrcPattarn.test(nrc);
  };

  // Personal Info Check // Group 01
  if (!firstName) error.firstName = "Required";
  stringLengthValidator("Firstname", "firstName", firstName, error);
  if (!surname) error.surname = "Required";
  stringLengthValidator("Surname", "surname", surname, error);

  if (!dob) error.dob = "Required";
  if (dob && isDateInFuture(dob)) error.dob = "Select correct date of birth.";
  if (!sex) error.sex = "Required";
  // if noNRC is false
  if (!noNRC) {
    if (!nrc) error.nrc = "Required";
    if (nrc && !testNrc(nrc)) error.nrc = "Invalid NRC!";
  }

  if (!countryId) error.countryId = "Required";
  if (!registrationDate) error.registrationDate = "Required";

  // Check under 18 // group 02
  const isAgeLessThanEighteen = getAgeMessage(dob)?.age?.years < 18;
  if (isAgeLessThanEighteen) {
    const { isValidMothers, mothersError } = checkMothersData({
      mothersFirstName,
      mothersSurname,
      mothersNRC,
      motherNAPSANumber,
      motherNationality,
    });

    const { isValidFathers, fathersError } = checkFathersData({
      fathersFirstName,
      fathersSurname,
      fathersNRC,
      fatherNAPSANumber,
      fatherNationality: +fatherNationality,
    });
    const { isValidGuardians, guardiansError } = checkGuardians({
      guardiansFirstName,
      guardiansSurname,
      guardiansNRC,
      guardianNAPSANumber,
      guardianNationality,
      guardianRelationship,
    });

    // If client age under 18 & not provided mothers, fathers or guardians deities
    if (!isValidFathers && !isValidGuardians && !isValidMothers) {
      error.under18 = "Required";
    }
  }

  // IF CLIENT PROVIDE PARENTS OR CUARDIAN DETAILS CHECK VALIDITY
  const mother_Nationality = Number(motherNationality); // "0" skipping
  if (
    mothersFirstName ||
    mothersSurname ||
    mothersNRC ||
    motherNAPSANumber ||
    mother_Nationality
  ) {
    if (!mothersFirstName) error.mothersFirstName = "Please enter firstname.";
    if (!mothersSurname) error.mothersSurname = "Please enter surname.";
    if (mothersFirstName?.length === 1)
      error.mothersFirstName = "Firstname should be atleast 2 characters.";
    if (mothersSurname?.length === 1)
      error.mothersSurname = "Firstname should be atleast 2 characters.";
    if (!mother_Nationality)
      error.motherNationality = "Please select nationality.";
    if (mothersNRC && !testNrc(mothersNRC)) error.mothersNRC = "Invalid NRC";
    // if unsuccessful section data
    if (!mothersFirstName && !mothersSurname && !mother_Nationality) {
      guardianSectionError.mothersDataScroll = "mothersDataScroll";
    }
  }

  const father_Nationality = Number(fatherNationality); // "0" skipping
  if (
    fathersFirstName ||
    fathersSurname ||
    fathersNRC ||
    fatherNAPSANumber ||
    father_Nationality
  ) {
    if (!fathersFirstName) error.fathersFirstName = "Please enter firstname.";
    if (!fathersSurname) error.fathersSurname = "Please enter surname.";
    if (fathersFirstName && fathersFirstName?.length === 1)
      error.fathersFirstName = "Firstname should be atleast 2 characters.";
    if (fathersSurname && fathersSurname?.length === 1)
      error.fathersSurname = "Firstname should be atleast 2 characters.";
    if (!father_Nationality)
      error.fatherNationality = "Please select nationality.";
    if (fathersNRC && !testNrc(fathersNRC)) error.fathersNRC = "Invalid NRC";
    // if unsuccessful section data
    if (!fathersFirstName && !fathersSurname && !father_Nationality) {
      guardianSectionError.fathersDataScroll = "fathersDataScroll";
    }
  }
  // || guardianRelationship
  const guardian_Nationality = Number(guardianNationality); // "0" skipping
  if (
    guardiansFirstName ||
    guardiansSurname ||
    guardiansNRC ||
    guardianNAPSANumber ||
    guardian_Nationality
  ) {
    if (!guardiansFirstName)
      error.guardiansFirstName = "Please enter firstname.";
    if (!guardiansSurname) error.guardiansSurname = "Please enter surname.";
    if (guardiansFirstName && guardiansFirstName?.length === 1)
      error.guardiansFirstName = "Firstname should be atleast 2 characters.";
    if (guardiansSurname && guardiansSurname?.length === 1)
      error.guardiansSurname = "Firstname should be atleast 2 characters.";
    if (!guardian_Nationality)
      error.guardianNationality = "Please select nationality.";
    if (guardiansNRC && !testNrc(guardiansNRC))
      error.guardiansNRC = "Invalid NRC";
    // if unsuccessful section data
    if (!guardiansFirstName && !guardiansSurname && !guardian_Nationality) {
      guardianSectionError.guardianDataScroll = "guardianDataScroll";
    }
  }

  // Marital Status & Spouse Details Check   // Group 03
  if (!maritalStatus) error.maritalStatus = "Required";
  if (+maritalStatus === 2) {
    if (!spousesLegalName) error.spousesLegalName = "Required";
    if (!spousesSurname) error.spousesSurname = "Required";
    stringLengthValidator(
      "Firstname",
      "spousesLegalName",
      spousesLegalName,
      error
    );
    stringLengthValidator("Surname", "spousesSurname", spousesSurname, error);
  }

  // Contract Info Check   // Group 04
  if (!noCellphone) {
    if (!cellphone) error.cellphone = "Required";
    if (cellphone)
      checkValidPhoneNo("cellphone", cellphone, cellphoneCountryCode, error);
    if (!cellphoneCountryCode) error.cellphoneCountryCode = "Required";
    if (otherCellphoneCountryCode || otherCellphone) {
      if (!otherCellphoneCountryCode && otherCellphone)
        error.otherCellphoneCountryCode = "Required";
      if (!otherCellphone) error.otherCellphone = "Required";
      checkValidPhoneNo(
        "otherCellphone",
        otherCellphone,
        otherCellphoneCountryCode,
        error
      );
    }
  }

  // Contract Info - Landline Check   // Group 05
  if (!landlineCountryCode && landline) error.landlineCountryCode = "Required";
  if (householdNumber && householdNumber?.length > 30)
    error.householdNumber = "Household number should be max 30 characters.";
  if (road && road?.length > 90)
    error.road = "Road should be max 90 characters.";
  if (area && area?.length > 90)
    error.area = "Area should be max 90 characters.";
  if (landmarks && landmarks?.length > 500)
    error.landmarks = "Landmarks should be max 500 characters.";
  // townName

  // If Email Filed Value True, Then Check Valid Email.
  if (email) {
    if (!isEmail(email)) error.email = "Please enter valid email";
    if (email && email?.length > 60)
      error = "Email should be max 60 characters.";
  }

  // Place of Birth & Religious Denomination  Group 6
  if (!homeLanguageId) error.homeLanguageId = "Required";
  if (!isZambianBorn) error.isZambianBorn = "Required";

  if (+isZambianBorn === 1) {
    if (!districtId) error.districtId = "Required";
    if (!provinceId) error.provinceId = "Required";
  }
  if (+isZambianBorn === 2) {
    if (!birthPlace) error.birthPlace = "Required";
  }

  if (isEditForm && clientPrevData?.nrc == nrc) {
    // Do nothing
  } else if (searchClients?.length > 0) {
    error.nrc = "NRC already exists!";
  }

  // isEditForm && clientPrevData?.nrc == personalInfo?.nrc

  // // Education And Employment Info // Not required fields
  // if (occupationId) error.occupationId = "Required";
  // if (educationLevelId) error.educationLevelId = "Required";

  // Error Scrolling
  handleGroupScroll(error, guardianSectionError);

  return {
    isValid: Object.keys(error).length === 0,
    error,
  };
};

const handleGroupScroll = (error, guardianSectionError) => {
  const {
    //  Personal Info
    firstName,
    surname,
    dob,
    sex,
    nrc,
    countryId,
    registrationDate,
    // Parents or Guardian Details
    under18,
    // Marital Status & Spouse Details
    maritalStatus,
    spousesLegalName,
    spousesSurname,
    // Contract Info Phone
    cellphoneCountryCode,
    cellphone,
    otherCellphoneCountryCode,
    otherCellphone,
    noCellphone,
    email,
    landlineCountryCode,
    landline,
    // Place of Birth & Religious Denomination
    homeLanguageId,
    isZambianBorn,
    birthPlace,
    provinceId,
    districtId,
    // Education And Employment Info
    occupationId,
    educationLevelId,
  } = error;

  // Guardian section scroll keys
  const { mothersDataScroll, fathersDataScroll, guardianDataScroll } =
    guardianSectionError;

  if (
    firstName ||
    surname ||
    dob ||
    sex ||
    nrc ||
    countryId ||
    registrationDate
  ) {
    handlePageScroll("personalInfo");
  } else if (mothersDataScroll) {
    handlePageScroll("mothersDataScroll");
  } else if (fathersDataScroll) {
    handlePageScroll("fathersDataScroll");
  } else if (guardianDataScroll) {
    handlePageScroll("guardianDataScroll");
  } else if (under18) {
    handlePageScroll("parentsOrGuardianInfo");
  } else if (maritalStatus || spousesLegalName || spousesSurname) {
    handlePageScroll("maritalInfo");
  } else if (
    cellphoneCountryCode ||
    cellphone ||
    otherCellphoneCountryCode ||
    otherCellphone ||
    noCellphone ||
    email ||
    landlineCountryCode ||
    landline
  ) {
    handlePageScroll("contractInfo");
  } else if (
    homeLanguageId ||
    isZambianBorn ||
    birthPlace ||
    provinceId ||
    districtId
  ) {
    handlePageScroll("birthAndReligiousInfo");
  } else if (occupationId || educationLevelId) {
    handleGroupScroll("educationAndEmploymentInfo");
  }
};

/**
 * if(mothersDataScroll){
      handlePageScroll("mothersDataScroll");
    }else if(fathersDataScroll){
      handlePageScroll("fathersDataScroll");

    }else if(guardianDataScroll){
      handlePageScroll("guardianDataScroll");
    }else if(under18){
      handlePageScroll("parentsOrGuardianInfo");
    }
 */
