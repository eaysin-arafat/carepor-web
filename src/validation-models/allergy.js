export const allergyValidator = (formData) => {
  const errors = {};

  if (!formData.allergyName) errors.allergyName = "required";

  if (!formData.severity) errors.severity = "required";

  if (formData.allergyName == 1 && !formData.drugType)
    errors.drugType = "required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};


