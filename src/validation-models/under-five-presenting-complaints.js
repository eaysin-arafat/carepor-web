export const underFivePresentingComplaintsValidator = (formData) => {
  const errors = {};

  if (!formData.chiefComplaints) errors.chiefComplaints = "Required";

  if (!formData.historyOfChiefComplaint)
    errors.historyOfChiefComplaint = "Required";

  if (!formData.hivStatus) errors.hivStatus = "Required";

  if (!formData.childExposureStatus) errors.childExposureStatus = "Required";

  if (!formData.isChildGivenARV) errors.isChildGivenARV = "Required";

  if (!formData.isMotherGivenARV) errors.isMotherGivenARV = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// chiefComplaints: "string",
//   historyOfChiefComplaint: "string",
//   hivStatus: 1,
//   childExposureStatus: 1,
//   isChildGivenARV: true,
//   isMotherGivenARV: true,
