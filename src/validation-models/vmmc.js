export const vmmcPresentingComplaintsValidator = (formData) => {
  const errors = {};

  if (!formData.chiefComplaints) errors.chiefComplaints = "Required";
  if (!formData.historyOfChiefComplaint)
    errors.historyOfChiefComplaint = "Required";
  if (!formData.hivStatus) errors.hivStatus = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
