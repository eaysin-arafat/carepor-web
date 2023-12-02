import { DateFunc } from "@/utilities/date";

interface PersonalInfoType {
  firstName?: string;
  surname?: string;
  dob?: string | null;
  sex?: string;
  designation?: string;
  nrc?: string;
}

export const userAccountPersonalInfoValidator = (
  personalInfo: PersonalInfoType
): { isValid: boolean; error: PersonalInfoType } => {
  const error: PersonalInfoType = {};

  // validate first name
  if (!personalInfo.firstName) error.firstName = "Required";
  else if (personalInfo.firstName?.length > 60)
    error.firstName = "First name must be less than 60 characters";
  else if (personalInfo.firstName?.length < 2)
    error.firstName = "First name must be more than 2 characters";

  // validate surname
  if (!personalInfo.surname) error.surname = "Required";
  else if (personalInfo.surname?.length > 60)
    error.surname = "Surname must be less than 20 characters";
  else if (personalInfo.surname?.length < 2)
    error.surname = "Surname must be more than 2 characters";

  // validate dob
  if (!personalInfo.dob) error.dob = "Required";
  else if (DateFunc.isDateInFuture(personalInfo.dob))
    error.dob = "Date cannot be in the future";
  else if (!DateFunc.isOverYears(personalInfo.dob, 18))
    error.dob = "User must be equal or above 18 years old.";

  // validate sex
  if (!personalInfo.sex) error.sex = "Required";

  // validate designation
  if (!personalInfo.designation) error.designation = "Required";

  // validate nrc
  if (!personalInfo.nrc) error.nrc = "Required";
  else if (personalInfo.nrc?.replace("_" || "/", "").length < 11)
    error.nrc = "Invalid NRC";

  // return error state
  return {
    isValid: Object.keys(error).length === 0,
    error,
  };
};
