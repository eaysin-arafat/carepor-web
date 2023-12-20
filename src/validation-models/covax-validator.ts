import { TypeCovaxForm, TypeCovaxFormError } from "@/types/module-types/covax";

export const covaxValidator = (formData: TypeCovaxForm) => {
  const errors: TypeCovaxFormError = {};

  if (!formData.covaxNumber) errors.covaxNumber = "Required";
  if (!formData.wasCovaxOffered) errors.wasCovaxOffered = "Required";
  if (!formData.doesClientGetVaccinatedToday)
    errors.doesClientGetVaccinatedToday = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
