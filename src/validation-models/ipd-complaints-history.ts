export interface IpdComplaintsHistory {
  historySummary: string;
  examinationSummary: string;
}

export interface IpdComplaintsHistoryErrors {
  historySummary?: string;
  examinationSummary?: string;
}

export const ipdComplaintsHistoryValidator = (
  formData: IpdComplaintsHistory
) => {
  const errors: IpdComplaintsHistoryErrors = {};

  if (!formData.historySummary) errors.historySummary = "Required";

  if (!formData.examinationSummary) errors.examinationSummary = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
