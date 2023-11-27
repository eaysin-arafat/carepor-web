export const pepDrugAdherenceValidator = (formData) => {
  const errors = {};

  if (formData.isTakingMedications === "")
    errors.isTakingMedications = "Required";

  if (formData.haveTroubleTakingPills === "")
    errors.haveTroubleTakingPills = "Required";

  if (formData.dosesMissed === "") errors.dosesMissed = "Required";

  if (!formData.reasonForMissing) errors.reasonForMissing = "Required";

  if (formData.isPatientComplainedOnMedication === "")
    errors.isPatientComplainedOnMedication = "Required";

  if (!formData.note) errors.note = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// isTakingMedications: 0,
// haveTroubleTakingPills: 0,
// dosesMissed: 1,
// reasonForMissing: 1,
// isPatientComplainedOnMedication: true,
// note: "",
