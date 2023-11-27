export const vmmcPredictiveTestValidator = (formData) => {
  const errors = {};

  if (!formData.interIncisorGap) errors.interIncisorGap = "Required";
  if (!formData.movementOfHeadNek) errors.movementOfHeadNek = "Required";
  if (!formData.thyromentalDistance) errors.thyromentalDistance = "Required";
  if (!formData.thyromentalDistance) errors.thyromentalDistance = "Required";
  if (!formData.atlantoOcciptalFlexion)
    errors.atlantoOcciptalFlexion = "Required";
  if (!formData.mallampatiClass) errors.mallampatiClass = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// interIncisorGap: "string",
//   movementOfHeadNek: "string",
//   thyromentalDistance: "string",
//   atlantoOcciptalFlexion: "string",
//   mallampatiClass: "string",
