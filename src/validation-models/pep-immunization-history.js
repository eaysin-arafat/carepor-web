export const pepImmunizationHistoryValidator = (formData) => {
  const errors = {};

  if (!formData.vaccineTypeId) errors.vaccineTypeId = "Required";
  if (!formData.vaccineId) errors.vaccineId = "Required";
  if (!formData.vaccineDoseId) errors.vaccineDoseId = "Required";
  if (!formData.dateGiven) errors.dateGiven = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
