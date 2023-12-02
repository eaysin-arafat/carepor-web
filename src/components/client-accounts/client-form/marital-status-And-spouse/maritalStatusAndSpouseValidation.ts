import {
  ClientMaritalStatusAndSpouseErrorType,
  ClientMaritalStatusAndSpouseType,
} from "@/types/clientFormTypes";
import { nameMinMaxCheck } from "@/utilities/string-validation";

const maritalStatusAndSpouseValidation = (
  formData: ClientMaritalStatusAndSpouseType
) => {
  const errors: ClientMaritalStatusAndSpouseErrorType = {};

  if (!formData.maritalStatus) errors.maritalStatus = "Required";

  if (formData.maritalStatus == "2") {
    nameMinMaxCheck(
      formData.spousesLegalName,
      "spousesLegalName",
      errors,
      true
    );
    nameMinMaxCheck(formData.spousesSurname, "spousesSurname", errors, true);
  }

  return {
    isMaritalStatusAndSpouseValid: Object.keys(errors).length === 0,
    maritalStatusAndSpouseErrors: errors,
  };
};

export default maritalStatusAndSpouseValidation;
