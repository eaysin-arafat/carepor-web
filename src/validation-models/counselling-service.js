export const counsellingServiceValidator = (formData) => {
  const errors = {};

  if (!formData.counsellingType) errors.counsellingType = "Required";

  if (formData.counsellingType == 3 && !formData.otherCounsellingType)
    errors.otherCounsellingType = "Required";

  if (!formData.sessionNumber) errors.sessionNumber = "Required";

  if (!formData.sessionDate) errors.sessionDate = "Required";

  //   if (!formData.sessionNote) errors.sessionNote = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// counsellingType: 1,
// otherCounsellingType: "string",
// sessionNumber: 99999999,
// sessionDate: null,
// sessionNote: "string",
