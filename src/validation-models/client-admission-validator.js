export const clientAdmissionValidator = (admissionData) => {
  const errors = {};

  if (!admissionData.admissionNote) {
    errors.admissionNote = "Required";
  }

  if (!admissionData.bedID) {
    errors.bedID = "Required";
  }

  if (!admissionData.departmentID) {
    errors.departmentID = "Required";
  }

  if (!admissionData.firmID) {
    errors.firmID = "Required";
  }

  if (!admissionData.wardID) {
    errors.wardID = "Required";
  }

  if (!admissionData.admissionDate) {
    errors.admissionDate = "Required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
