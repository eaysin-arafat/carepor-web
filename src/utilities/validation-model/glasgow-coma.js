export const glasgowComaValidation = (formData) => {
    const errors = {};
  
    // Validate eyeScore
    if (formData.eyeScore == 0) {
      errors.eyeScore = "Required";
    }
  
    // Validate verbalScore
    if (formData.verbalScore == 0) {
      errors.verbalScore = "Required";
    }
  
    // Validate motorScale
    if (formData.motorScale ==0) {
      errors.motorScale = "Required";
    }
    if (!formData.result.trim()) {
        errors.result = "Required";
      }
      
  
  
    // You can add more specific validation rules as needed for each field
  
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };
  