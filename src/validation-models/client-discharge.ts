export type DischargeErrorType = {
  dischargeNote?: string;
  ipdDischargeDate?: string;
};

export type DischargeDataType = {
  dischargeNote: string;
  ipdDischargeDate: string;
};

export const clientDischargeValidator = (dischargeData: DischargeDataType) => {
  const errors: DischargeErrorType = {};

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
