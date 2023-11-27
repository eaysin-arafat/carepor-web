export const adverseValidator = (formData) => {
  const errors = {};

  if (!formData.aefiDate) errors.aefiDate = "Required";

  return {
    errors,
    isValid: Object.keys(errors)?.length === 0,
  };
};
