import {
  TypeBirthRecord,
  TypeBirthRecordFormError,
} from "@/types/module-types/birth-records";
import { phoneNumberValidation } from "./phone-number-validation";

export const birthRecordValidator = (formData: TypeBirthRecord) => {
  const errors: TypeBirthRecordFormError = {};

  if (formData.isBirthRecordGiven === "")
    errors.isBirthRecordGiven = "Required";

  if (formData.isUnderFiveCardGiven === "")
    errors.isUnderFiveCardGiven = "Required";

  if (!formData.origin) errors.origin = "Required";

  if (!formData.informantFirstName) errors.informantFirstName = "Required";

  if (!formData.informantSurname) errors.informantSurname = "Required";

  //length check
  if (formData.informantFirstName && formData?.informantFirstName?.length > 60)
    errors.informantFirstName = "Max 30 characters";
  if (formData.informantSurname && formData?.informantSurname?.length > 60)
    errors.informantSurname = "Max 30 characters";
  if (formData.informantNickname && formData?.informantNickname?.length > 60)
    errors.informantNickname = "Max 30 characters";

  if (
    formData.underFiveCardNumber &&
    formData?.underFiveCardNumber?.length > 20
  ) {
    errors.underFiveCardNumber = "Max 20 characters";
  }
  if (
    formData.informantOtherRelationship &&
    formData?.informantOtherRelationship?.length > 60
  ) {
    errors.informantOtherRelationship = "Max 60 characters";
  }
  if (formData.informantStreetNo && formData?.informantStreetNo?.length > 30)
    errors.informantStreetNo = "Max 30 characters";
  if (formData.informantCity && formData?.informantCity?.length > 90)
    errors.informantCity = "Max 90 characters";
  if (formData.informantPOBox && formData?.informantPOBox?.length > 30)
    errors.informantPOBox = "Max 30 characters";
  if (formData.informantLandmark && formData?.informantLandmark?.length > 500)
    errors.informantLandmark = "Max 500 characters";

  phoneNumberValidation({
    phone: formData?.informantCellphone,
    phoneKey: "informantCellphone",
    code: formData?.informantCellphoneCountryCode,
    codeKey: "informantCellphoneCountryCode",
    errors,
    required: true,
  });

  phoneNumberValidation({
    phone: formData?.informantLandline,
    phoneKey: "informantLandline",
    code: formData?.informantLandlineCountryCode,
    codeKey: "informantLandlineCountryCode",
    errors,
    required: false,
  });

  if (!formData.informantRelationship)
    errors.informantRelationship = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
