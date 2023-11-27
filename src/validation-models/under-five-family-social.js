export const underFiveFamilySocialValidator = (formData) => {
  const errors = {};

  if (!formData.familySocialHistory) errors.familySocialHistory = "required";

  if (!formData.alchoholSmokingHistory)
    errors.alchoholSmokingHistory = "required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
