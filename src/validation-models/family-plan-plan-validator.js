export const FamilyPlanPlanValidator = (formData) => {
  const errors = {};

  if (!formData.anySexualViolenceSymptoms)
    errors.anySexualViolenceSymptoms = "Required";

  if (!formData.subclassId) errors.subclassId = "Required";

  if (!formData.fpMethodPlanRequest) errors.fpMethodPlanRequest = "Required";

  if (!formData.familyPlans) errors.familyPlans = "Required";

  if (formData.isHIVTestingNeed === "") errors.isHIVTestingNeed = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

/**
 * : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    isSTI: "",
    isCervicalCancer: "",
    isBreastCancer: "",
    isProstateCancer: "",
    subclassId: "",
 */
