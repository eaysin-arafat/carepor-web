export const ipdComplaintsHistoryValidator = (formData) => {
  const errors = {};

  if (!formData.historySummary) errors.historySummary = "Required";

  if (!formData.examinationSummary) errors.examinationSummary = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
