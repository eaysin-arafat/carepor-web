import {
  ClientContactInfoType,
  ClientEducationAndEmploymentType,
  ClientMaritalStatusAndSpouseType,
  ClientParentsOrGuardiansType,
  ClientPersonalInfoType,
  ClientPlaceOfBirthAndReligionType,
} from "@/types/clientTypes";

//  // note
// export const initialState = {
//   createdIn: facilityData?.facilityId,
//   dateCreated: today(),
//   createdBy: opdVisitSession?.oid,
//   modifiedBy: opdVisitSession?.oid,
//   modifiedIn: 0, // Nullable Yes
//   isDeleted: false, // Nullable Yes
//   isSynced: false, // Nullable Yes
//   hivStatus: "", // Nullable Yes
//   isDeceased: false,
//   isOnART: false,
//   isAdmitted: false,
// };

export const personalInfoState: ClientPersonalInfoType = {
  firstName: "",
  surname: "",
  sex: "", // 0
  dob: "",
  isDOBEstimated: false,
  nrc: "",
  noNRC: false,
  countryId: "", // 0
  napsaNumber: "",
  underFiveCardNumber: "",
  nupn: "",
  registrationDate: new Date().toISOString(),
};

export const maritalStatusAndSpouseState: ClientMaritalStatusAndSpouseType = {
  spousesLegalName: "",
  spousesSurname: "",
  maritalStatus: "",
};

export const parentsOrGuardiansState: ClientParentsOrGuardiansType = {
  fathersFirstName: "",
  fathersSurname: "",
  fathersNRC: "",
  fatherNAPSANumber: "",
  fatherNationality: "", //0
  isFatherDeceased: false,

  mothersFirstName: "",
  mothersSurname: "",
  mothersNRC: "",
  motherNAPSANumber: "",
  motherNationality: "", //0
  isMotherDeceased: false,

  guardiansFirstName: "",
  guardiansSurname: "",
  guardiansNRC: "",
  guardianNAPSANumber: "",
  guardianNationality: "", //0
  guardianRelationship: "", //0
};

export const contactInfoState: ClientContactInfoType = {
  cellphoneCountryCode: "+260",
  cellphone: "",
  otherCellphoneCountryCode: "",
  otherCellphone: "",
  noCellphone: false,
  landlineCountryCode: "",
  landline: "",
  email: "",
  householdNumber: "",
  road: "",
  area: "",
  townName: "",
  landmarks: "",
};

export const placeOfBirthAndReligionState: ClientPlaceOfBirthAndReligionType = {
  homeLanguageId: "", //0
  isZambianBorn: "1", // server data is boolean true,

  provinceId: "", //0
  districtId: "", //0
  birthPlace: "",
  religion: "", //0
};

export const educationAndEmploymentState: ClientEducationAndEmploymentType = {
  educationLevelId: "", //0
  occupationId: "", //0
};
