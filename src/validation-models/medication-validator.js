export const medicationValidator = (formData, type) => {
  const errors = {};
  if (!formData.prescribedDosage) errors.prescribedDosage = "Required";

  if (!formData.itemPerDose) errors.itemPerDose = "Required";

  if (!formData.duration) errors.duration = "Required";

  if (!formData.timeUnit) errors.timeUnit = "Required";

  if (!formData.frequencyIntervalId) errors.frequencyIntervalId = "Required";
  if (!formData.startDate) errors.startDate = "Required";
  if (!formData.endDate) errors.endDate = "Required";
  if (!formData.prescribedQuantity) errors.prescribedQuantity = "Required";
  if (!formData.routeId) errors.routeId = "Required";
  if (type == "general") {
    if (!formData.generalDrugId) {
      errors.drugName = "Required";
    }
  }
  if (type == "special") {
    if (!formData.specialDrugId) {
      errors.drugName = "Required";
    }
  }

  if (type == "additional") {
    if (!formData.additionalDrugTitle) {
      errors.additionalDrugTitle = "Required";
    }
    if (!formData.additionalDrugFormulation) {
      errors.additionalDrugFormulation = "Required";
    }
  }
  if (type === "dispense") {
    if (!formData.dispensedDrugsBrand) {
      errors.dispensedDrugsBrand = "Required";
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
