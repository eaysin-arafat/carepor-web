export const vmmcAssessmentPlanValidator = (data) => {
  const errors = {};

  if (!data?.asaClassification) errors.asaClassification = "Required";
  if (!data?.ivAccess) errors.ivAccess = "Required";
  if (!data?.bonyLandmarks) errors.bonyLandmarks = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// asaClassification: "string",
//   ivAccess: "string",
//   bonyLandmarks: "string",
