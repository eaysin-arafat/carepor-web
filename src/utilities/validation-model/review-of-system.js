export const reviewOfSystemValidator = (formData) => {
  const errors = {};

  if (!formData.note) errors.note = "Required";
  if (!formData.physicalSystemId) errors.physicalSystemId = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// note: "",
// physicalSystemId: "",
