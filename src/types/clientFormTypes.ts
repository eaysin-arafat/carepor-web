export type ClientPersonalInfoType = {
  firstName: string;
  surname: string;
  sex: string; // 0
  dob: string;
  isDOBEstimated: boolean;
  nrc: string;
  noNRC: boolean;
  countryId: string; // 0
  napsaNumber: string;
  underFiveCardNumber: string;
  nupn: string;
  registrationDate: string;
};
// Error Type
export type ClientPersonalInfoErrorType = {
  firstName?: string;
  surname?: string;
  sex?: string;
  dob?: string;
  isDOBEstimated?: string;
  nrc?: string;
  noNRC?: string;
  countryId?: string;
  napsaNumber?: string;
  underFiveCardNumber?: string;
  nupn?: string;
  registrationDate?: string;
};

export type ClientParentsOrGuardiansType = {
  fathersFirstName: string;
  fathersSurname: string;
  fathersNRC: string;
  fatherNAPSANumber: string;
  fatherNationality: string; //0
  isFatherDeceased: boolean;

  mothersFirstName: string;
  mothersSurname: string;
  mothersNRC: string;
  motherNAPSANumber: string;
  motherNationality: string; //0
  isMotherDeceased: boolean;

  guardiansFirstName: string;
  guardiansSurname: string;
  guardiansNRC: string;
  guardianNAPSANumber: string;
  guardianNationality: string; //0
  guardianRelationship: string; //0
};
// Error Type
export type ClientParentsOrGuardiansErrorType = {
  fathersFirstName?: string;
  fathersSurname?: string;
  fathersNRC?: string;
  fatherNAPSANumber?: string;
  fatherNationality?: string;
  isFatherDeceased?: string;
  mothersFirstName?: string;
  mothersSurname?: string;
  mothersNRC?: string;
  motherNAPSANumber?: string;
  motherNationality?: string;
  isMotherDeceased?: string;
  guardiansFirstName?: string;
  guardiansSurname?: string;
  guardiansNRC?: string;
  guardianNAPSANumber?: string;
  guardianNationality?: string;
  guardianRelationship?: string;
};

export type ClientMaritalStatusAndSpouseType = {
  spousesLegalName: string;
  spousesSurname: string;
  maritalStatus: string;
};
// Error Type
export type ClientMaritalStatusAndSpouseErrorType = {
  spousesLegalName?: string;
  spousesSurname?: string;
  maritalStatus?: string;
};
export type ClientContactInfoType = {
  cellphoneCountryCode: string;
  cellphone: string;
  otherCellphoneCountryCode: string;
  otherCellphone: string;
  landlineCountryCode: string;
  landline: string;
  email: string;
  householdNumber: string;
  road: string;
  area: string;
  townName: string;
  landmarks: string;
  noCellphone: false;
};
// Error Type
export type ClientContactInfoErrorType = {
  cellphoneCountryCode?: string;
  cellphone?: string;
  otherCellphoneCountryCode?: string;
  otherCellphone?: string;
  landlineCountryCode?: string;
  landline?: string;
  email?: string;
  householdNumber?: string;
  road?: string;
  area?: string;
  townName?: string;
  landmarks?: string;
  noCellphone?: string;
};
export type ClientPlaceOfBirthAndReligionType = {
  homeLanguageId: string; //0
  isZambianBorn: string; //
  // provinceId: string; // server key name
  province: string; //0
  districtId: string; //0
  birthPlace: string;
  religion: string; //0
};
// Error Type
export type ClientPlaceOfBirthAndReligionErrorType = {
  homeLanguageId?: string;
  isZambianBorn?: string;
  province?: string;
  district?: string;
  birthPlace?: string;
  religion?: string;
};

export type ClientEducationAndEmploymentType = {
  educationLevelId: string; //0
  occupationId: string; //0
};
// Error Type
export type ClientEducationAndEmploymentErrorType = {
  educationLevelId?: string;
  occupationId?: string;
};
