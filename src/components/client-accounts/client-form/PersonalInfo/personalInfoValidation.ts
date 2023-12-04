import {
  ClientPersonalInfoErrorType,
  ClientPersonalInfoType,
} from "@/types/clientTypes";
import { nameMinMaxCheck } from "@/utilities/string-validation";
import { isFuture } from "date-fns";

const personalInfoValidation = (formData: ClientPersonalInfoType) => {
  const errors: ClientPersonalInfoErrorType = {};

  nameMinMaxCheck(formData.firstName, "firstName", errors, true);
  nameMinMaxCheck(formData.surname, "surname", errors, true);
  //   if (!formData.firstName) errors.firstName = "Required";
  //   if (!formData.surname) errors.surname = "Required";
  if (!formData.dob) errors.dob = "Required";

  if (isFuture(new Date(formData.dob)))
    errors.dob = "This date should not be a future date!";
  if (!formData.sex) errors.sex = "Required";
  if (!formData.nrc) errors.nrc = "Required";
  if (!formData.countryId) errors.countryId = "Required";
  if (!formData.registrationDate) errors.countryId = "Required";
  if (isFuture(new Date(formData.registrationDate)))
    errors.registrationDate = "This date should not be a future date!";

  // if (formData.napsaNumber && formData.napsaNumber.length > 20) errors.napsaNumber = "Required";
  // if (formData.underFiveCardNumber && formData.underFiveCardNumber > 20) errors.underFiveCardNumber = "Required";

  return {
    isPersonalInfoValid: Object.keys(errors).length === 0,
    personalInfoErrors: errors,
  };
};

export default personalInfoValidation;
