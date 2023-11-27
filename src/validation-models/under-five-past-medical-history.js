export const underFivePastMedicalHistoryValidator = (formData) => {
  const errors = {};

  if (!formData.drugHistory) errors.drugHistory = "Drug History is required";
  if (!formData.admissionHistory)
    errors.admissionHistory = "Admission History is required";
  if (!formData.surgicalHistory)
    errors.surgicalHistory = "Surgical History is required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// drugHistory: "",
// admissionHistory: "",
// surgicalHistory: "",
