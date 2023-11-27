export const TBServiceValidator = (formData) => {
  const errors = {};

  if (!formData.caseIdNumber) errors.caseIdNumber = "required";

  if (!formData.isHealthCareWorker) errors.isHealthCareWorker = "required";
  if (!formData.isInmate) errors.isInmate = "required";
  if (!formData.isMiner) errors.isMiner = "required";
  if (!formData.isExMiner) errors.isExMiner = "required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
