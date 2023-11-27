export const cellphoneSearchValidator = (formData) => {
  const error = {};

  if (!formData.cellphone) error.cellphone = "required";

  if (!formData.countryCode) error.countryCode = "Required";

  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};
