export const createAnestheticPlanValidator = (anestheticPlan) => {
  const errors = {};

  if (!anestheticPlan.clientHistory) {
    errors.clientHistory = "Required";
  }
  if (!anestheticPlan.clientExamination) {
    errors.clientExamination = "Required";
  }
  if (!anestheticPlan.anestheticPlans) {
    errors.anestheticPlans = "Required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export const intraAnestheticValidator = (preAnesthetic) => {
  const errors = {};

  if (!preAnesthetic.anesthesiaStartTime)
    errors.anesthesiaStartTime = "Required";

  if (!preAnesthetic.anesthesiaEndTime) errors.anesthesiaEndTime = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export const postOpAnestheticValidator = (postOpAnesthetic) => {
  const errors = {};

  if (!postOpAnesthetic.preOperativeAdverse)
    errors.preOperativeAdverse = "Required";

  if (!postOpAnesthetic.postOperative) errors.postOperative = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

//     preOperativeAdverse: "string",
//   postOperative: "string",
