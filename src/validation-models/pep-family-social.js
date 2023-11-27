export const pepFamilySocialValidator = (formData) => {
  const errors = {};

  if (!formData.familyMedicalHistory) errors.familyMedicalHistory = "Required";

  if (!formData.alchoholSmokingHistory)
    errors.alchoholSmokingHistory = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// familyMedicalHistory: "",
// alchoholSmokingHistory: "",
