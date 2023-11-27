export const vmmcAirwayNewAssessmentValidator = (data) => {
  const errors = {};

  if (!data?.hasDentures) errors.hasDentures = "Required";
  if (!data?.hasLooseTeeth) errors.hasLooseTeeth = "Required";
  if (!data?.hasAbnormalitiesOfTheNeck)
    errors.hasAbnormalitiesOfTheNeck = "Required";
  if (!data?.tongueSize) errors.tongueSize = "Required";
  if (!data?.mandibleSize) errors.mandibleSize = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// hasDentures: "",
// hasLooseTeeth: "",
// hasAbnormalitiesOfTheNeck: "",
// tongueSize: "",
// mandibleSize: "",

module.exports = {
  vmmcAirwayNewAssessmentValidator,
};
