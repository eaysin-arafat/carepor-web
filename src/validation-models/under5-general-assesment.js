export const under5GeneralAssessmentValidator = (formData) => {
  const errors = {};

  if (!formData.generalCondition) errors.generalCondition = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// generalCondition: 1,
// pallor: 1,
// edema: 1,
// clubbing: 1,
// jaundice: 1,
// cyanosis: 1,
