export const covaxValidator = (formData) => {
  const errors = {};

  if (!formData.covaxNumber) errors.covaxNumber = "Required";
  if (!formData.wasCovaxOffered) errors.wasCovaxOffered = "Required";
  if (!formData.doesClientGetVaccinatedToday) errors.doesClientGetVaccinatedToday = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};


