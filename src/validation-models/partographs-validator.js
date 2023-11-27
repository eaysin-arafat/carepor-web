export const partographsValidator = (formData) => {
  const errors = {};

  if (!formData.gravida) errors.gravida = "Required";

  if (!formData.parity) errors.parity = "Required";

  if (!formData.lmp) errors.lmp = "Required";

  if (!formData.regularContractions) errors.regularContractions = "Required";

  if (!formData.initiateDate) errors.initiateDate = "Required";

  if (!formData.initiateTime) errors.initiateTime = "Required";

  // if (!formData.lmp) errors.lmp = "Required";

  // if (!formData.lmp) errors.lmp = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

/**
 *gravida: "",
  parity: "",
  sbOrNND: "",
  abortion: "",
  borderlineRiskFactors: "",
  height: "",
  initiateTime: "",
  edd,
  regularContractions,
  membranesRuptured,
  initiateDate,
 */
