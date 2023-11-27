export const GuidedExaminationValidator = (formData) => {
  const errors = {};

  if (!formData.sores) errors.sores = "Required";

  if (!formData.abnormalDischarge) errors.abnormalDischarge = "Required";

  if (!formData.warts) errors.warts = "Required";

  if (!formData.otherAbnormalities) errors.otherAbnormalities = "Required";

  if (!formData.normal) errors.normal = "Required";

  if (!formData.vaginalMuscleTone) errors.vaginalMuscleTone = "Required";

  if (!formData.cervixColour) errors.cervixColour = "Required";

  if (!formData.cervicalConsistency) errors.cervicalConsistency = "Required";

  if (!formData.fibroidPalpable) errors.fibroidPalpable = "Required";

  if (!formData.scars) errors.scars = "Required";

  if (!formData.masses) errors.masses = "Required";

  if (!formData.liverPalpable) errors.liverPalpable = "Required";

  if (!formData.tenderness) errors.tenderness = "Required";

  if (!formData.uterusPosition) errors.uterusPosition = "Required";

  if (!formData.size) errors.size = "Required";

  if (!formData.tenderAdnexa) errors.tenderAdnexa = "Required";

  if (!formData.otherFindings) errors.otherFindings = "Required";

  if (!formData.cervicalDischarge) errors.cervicalDischarge = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

/**
 * : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
 */
