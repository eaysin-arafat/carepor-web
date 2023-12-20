import { DeathRecordErrorType } from "@/pages/death-record/create/Create";

export const deathRecordValidator = (formData) => {
  const errors: DeathRecordErrorType = {};

  //!formData?.ageInYears
  if (!formData.ageOfDeceased) errors.ageOfDeceased = "Required";
  if (!formData.dateOfDeath) errors.dateOfDeath = "Required";
  if (!formData.selectedProvince) errors.selectedProvince = "Required";
  if (!formData.districtOfDeath) errors.districtOfDeath = "Required";
  if (!formData.whereDeathOccured) errors.whereDeathOccured = "Required";
  //
  if (!formData.anatomicAxis) errors.anatomicAxis = "Required";
  if (!formData.pathologyAxis) errors.pathologyAxis = "Required";
  if (!formData.icpc2Description) errors.icpc2Description = "Required";
  if (!formData.icdDiagnosis) errors.icdDiagnosis = "Required";
  //
  if (!formData.informantFirstName) errors.informantFirstName = "Required";
  if (!formData.informantSurname) errors.informantSurname = "Required";
  if (!formData.informantRelationship)
    errors.informantRelationship = "Required";

  if (formData?.causeDeath?.length < 1) {
    errors.causeDeath = "Please Add At least one contributing death Cause.";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export interface ContributingCauseErrorType {
  anatomicAxis?: string;
  pathologyAxis?: string;
  icpc2Description?: string;
  icdDiagnosis?: string;
}

export const contributingCauseValidator = (formData) => {
  const errors: ContributingCauseErrorType = {};
  if (!formData.anatomicAxis) errors.anatomicAxis = "Required";
  if (!formData.pathologyAxis) errors.pathologyAxis = "Required";
  if (!formData.icpc2Description) errors.icpc2Description = "Required";
  if (!formData.icdDiagnosis) errors.icdDiagnosis = "Required";

  return {
    isValid: Object.keys(errors).length == 0,
    errors,
  };
};

const successData = {
  ageOfDeceased: 20,
  whereDeathOccured: 1,
  icpC2ID: 7,
  icD11ID: 9,
  informantFirstName: "AAAAA",
  informantSurname: "Record",
  informantNickname: "aaaaaa",
  informantRelationship: 2,
  informantOtherRelationship: "",
  informantCity: "",
  informantStreetNo: "",
  informantPOBox: "",
  informantLandmark: "",
  informantLandlineCountryCode: "",
  informantLandline: "",
  informantCellphoneCountryCode: "",
  informantCellphone: "",
  causeType: 1,
  dateOfDeath: "2023-10-29T06:29:28.389Z",
  districtOfDeath: 74,
  deathCause: [],
};
// Initial State
const initialState = {
  // dateOfDeath: "",
  ageOfDeceased: "",
  whereDeathOccured: "", // required
  // districtOfDeath: "", // required
  // icpC2ID: "", // required
  // icD11ID: "", // required
  informantFirstName: "", // required
  informantSurname: "", // required
  informantNickname: "",
  informantRelationship: "", // required
  informantOtherRelationship: "",
  informantCity: "",
  informantStreetNo: "",
  informantPOBox: "",
  informantLandmark: "",
  informantLandlineCountryCode: "",
  informantLandline: "",
  informantCellphoneCountryCode: "",
  informantCellphone: "",
};

export const causeItemValidation = ({
  causeAnatomicAxis,
  causePathologyAxe,
  causeIcpc2Description,
  causeIcdDiagnoses,
}) => {
  const errors = {};
  if (!causeAnatomicAxis?.value) errors.anatomic2 = "Required";
  if (!causePathologyAxe?.value) errors.pathology2 = "Required";
  if (!causeIcpc2Description?.value) errors.icpC2ID2 = "Required";
  if (!causeIcdDiagnoses?.value) errors.icD11ID2 = "Required";

  return {
    isValid: Object.keys(errors).length == 0,
    errors,
  };
};
