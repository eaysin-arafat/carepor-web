import { TypeBirthRecordFormError } from "@/types/module-types/birth-records";

export const birthRecordValidator = (formData) => {
  const errors: TypeBirthRecordFormError = {};

  if (formData.isBirthRecordGiven === "")
    errors.isBirthRecordGiven = "Required";

  if (formData.isUnderFiveCardGiven === "")
    errors.isUnderFiveCardGiven = "Required";

  if (!formData.origin) errors.origin = "Required";

  if (!formData.informantFirstName) errors.informantFirstName = "Required";

  if (!formData.informantSurname) errors.informantSurname = "Required";

  if (!formData.informantRelationship)
    errors.informantRelationship = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
