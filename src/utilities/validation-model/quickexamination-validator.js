export const QuickExaminationValidator = (formData) => {
  const errors = {};

  if (!formData.hairWellSpread) errors.hairWellSpread = "required";

  if (!formData.hairHealthy) errors.hairHealthy = "required";

  if (!formData.headInfection) errors.headInfection = "required";

  if (!formData.neckAbnormal) errors.neckAbnormal = "required";

  if (!formData.thrash) errors.thrash = "required";

  if (!formData.dentalDisease) errors.dentalDisease = "required";

  if (!formData.cervicalGlandsEnlarged)
    errors.cervicalGlandsEnlarged = "required";

  if (!formData.breastLumps) errors.breastLumps = "required";

  if (!formData.armpits) errors.armpits = "required";

  if (!formData.fibroidPalpable) errors.fibroidPalpable = "required";

  if (!formData.scars) errors.scars = "required";

  if (!formData.liverPalpable) errors.liverPalpable = "required";

  if (!formData.tenderness) errors.tenderness = "required";

  if (!formData.masses) errors.masses = "required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
