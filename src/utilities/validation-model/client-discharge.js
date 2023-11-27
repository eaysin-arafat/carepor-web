export const clientDischargeValidator = (dischargeData) => {
  const errors = {};

  if (!dischargeData.dischargeNote) {
    errors.dischargeNote = "Required";
  }

  if (!dischargeData.ipdDischargeDate) {
    errors.ipdDischargeDate = "Required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
