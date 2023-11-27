export const pepPaediatricsHistoryValidator = (formData) => {
  const errors = {};

  if (!formData.birthWeight) errors.birthWeight = "Required";
  if (!formData.birthOutcome) errors.birthOutcome = "Required";
  if (!formData.generalCondition) errors.generalCondition = "Required";
  if (!formData.otherFeedingOption) errors.otherFeedingOption = "Required";
  if (!formData.deliveryTime) errors.deliveryTime = "Required";
  if (!formData.tetanusAtBirth) errors.tetanusAtBirth = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
