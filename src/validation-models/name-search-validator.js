export const nameSearchValidator = (formData) => {
  const error = {};

  if (!formData.firstName) error.firstName = "required";

  if (!formData.surname) error.surname = "Required";

  if (!formData.sex) error.sex = "Required";

  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};
