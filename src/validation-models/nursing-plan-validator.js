export const nursingPlanValidator = (formData) => {
    const errors = {};
  
    if (!formData.problem) errors.problem = "Required";
  
    if (!formData.objective) errors.objective = "Required";
  
    if (!formData.nursingDiagnosis) errors.nursingDiagnosis = "Required";
  
    if (!formData.nursingIntervention) errors.nursingIntervention = "Required";
  
    if (!formData.planingDate) errors.planingDate = "Required"
    if (!formData.planingTime) errors.planingTime = "Required";
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };