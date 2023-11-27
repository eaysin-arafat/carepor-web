export const fluidWeightValidator = (formData) => {
    const errors = {};
  
    // Validate the "Record Date" field
    if (!formData.recordDate) {
      errors.recordDate = " Required";
    }
  
    // Validate the "Doctor Order" field
    if (!formData.doctorsOrder) {
      errors.doctorsOrder = "Required";
    }
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };
  