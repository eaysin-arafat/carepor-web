export const pepPlanValidator = (formData) => {
  const errors = {};

  if (!formData.plans) errors.plans = "Required";

  if (formData.plans == 3 && !formData?.stoppingReasonId)
    errors.stoppingReasonId = "Required";

  if (formData.plans == 2 && !formData?.note) errors.note = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// plans: 0,
//   stoppingReasonId: 0,
//   isUrinalysisNormal: false,
//   hasAcuteHIVInfectionSymptoms: false,
//   isAbleToAdhereDailyPrEP: false,
//   hasGreaterFiftyCreatinineClearance: false,
//   isPotentialHIVExposureMoreThanSixWeeksOld: false,
//   note: "",
