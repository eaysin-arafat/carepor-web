export const pepGynAndObsValidator = (formData) => {
  const errors = {};

  if (!formData.menstrualHistory) {
    errors.menstrualHistory = "Required";
  }

  if (formData.lnmp && !formData.isPregnant) {
    errors.isPregnant = "Required";
  }

  if (formData.isPregnant && !formData.lnmp) {
    errors.lnmp = "Required";
  }

  if (formData?.isPregnant == 1 && !formData?.isBreastFeeding) {
    errors.isBreastFeeding = "Required";
  }

  if (formData?.isCaCxScreened == 1) {
    if (!formData?.caCxLastScreened) {
      errors.caCxLastScreened = "Required";
    }
    if (!formData?.caCxResult) {
      errors.caCxResult = "Required";
    }
    if (!formData?.caCxScreeningMethodId) {
      errors.caCxScreeningMethodId = "Required";
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
