export const fluidOutputValidator = (formData) => {
    const errors = {};
  
    if (!formData.outputAmount) errors.outputAmount = "required";
  
    if (!formData.route) errors.route = "required";
    if (!formData.outputAmount) errors.outputAmount = "required";
    if (!formData.outputType)
      errors.outputType = "required";
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    }}