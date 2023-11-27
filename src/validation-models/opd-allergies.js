export const opdAllergiesValidator = (formData) => {
  const errors = {};

  if (!formData.allergyName) errors.allergyName = "Required";
  if (!formData.severity) errors.severity = "Required";

  if (formData.allergyName == 1 &&  !formData.drugType) errors.drugType = "Required";

  if (formData.hasOwnProperty("addButton")){
    errors.addButton = "Add one or more item."
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};


