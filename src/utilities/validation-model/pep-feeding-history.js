export const pepFeedingHistoryValidator = (formData) => {
  const errors = {};

  if (!formData.feedingCode) errors.feedingCode = "Required";
  else if (formData.feedingCode == 8 && !formData.otherFeedingCode)
    errors.otherFeedingCode = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
