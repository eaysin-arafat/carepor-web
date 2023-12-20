import { TypeVaccineForm } from "@/types/module-types/covax";

export const ImmunizationHistoryValidator = (formData) => {
  const errors: TypeVaccineForm = {};

  if (!formData.vaccineTypeId) errors.vaccineTypeId = "Required";
  if (!formData.vaccineId) errors.vaccineId = "Required";
  // if (!formData.vaccineDoseId) errors.vaccineDoseId = "Required";
  if (!formData.doseId) errors.doseId = "Required";
  if (!formData.dateGiven) errors.dateGiven = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
