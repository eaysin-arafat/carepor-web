export const fluidIntakeValidator = (formData) => {
  const errors = {};

  if (!formData?.intakeTime) errors.intakeTime = "required";

  if (!formData?.route) errors.route = "required";
  if (!formData?.intakeAmount) errors.intakeAmount = "required";
  if (!formData?.intakeType) errors.intakeType = "required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
