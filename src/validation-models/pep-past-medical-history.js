export const pepPastMedicalHistoryValidator = (FormData) => {
  const errors = {};

  if (!FormData.drugHistory) errors.drugHistory = "Required";

  if (!FormData.admissionHistory) errors.admissionHistory = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// drugHistory: "",
// admissionHistory: "",
