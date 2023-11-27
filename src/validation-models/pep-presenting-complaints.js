export const pepPresentingComplaintsValidator = (FormData) => {
  const errors = {};
  if (!FormData.chiefComplaints) errors.chiefComplaints = "Required";

  if (!FormData.historyOfChiefComplaint)
    errors.historyOfChiefComplaint = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// chiefComplaints: "",
// historyOfChiefComplaint: "",
