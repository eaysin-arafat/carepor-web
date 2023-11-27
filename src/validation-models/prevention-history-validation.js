export const preventionValidator = (formData) => {
  const errors = {};

  if (!formData.isPEPUsedBefore) errors.isPEPUsedBefore = "Required";
  if (!formData.isPrEPUsedBefore) errors.isPrEPUsedBefore = "Required";
  if (!formData.isCondomLubricantUsed) errors.isCondomLubricantUsed = "Required";
  if (!formData.isCircumcised) errors.isCircumcised = "Required";


  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
