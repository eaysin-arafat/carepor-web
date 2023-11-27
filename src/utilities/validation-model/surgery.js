export const surgeryCreateValidator = (surgeryData) => {
  const errors = {};

  if (!surgeryData.bookingDate) errors.bookingDate = "Required";
  if (!surgeryData.bookingTime) errors.bookingTime = "Required";
  if (!surgeryData.operationDate) errors.operationDate = "Required";
  if (!surgeryData.operationTime) errors.operationTime = "Required";
  if (!surgeryData.operationType) errors.operationType = "Required";
  if (!surgeryData.wardId) errors.wardId = "Required";
  if (!surgeryData.postOpProcedure) errors.postOpProcedure = "Required";
  if (!surgeryData.surgeons) errors.surgeons = "Required";

  if (!surgeryData.departmentId) errors.departmentId = "Required";
  if (!surgeryData.firmId) errors.firmId = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export const surgeryProOperationValidator = (surgeryData) => {
  const errors = {};

  if (!surgeryData.timePatientWheeledTheater)
    errors.timePatientWheeledTheater = "Required";
  if (!surgeryData.nursingPreOpPlan) errors.nursingPreOpPlan = "Required";
  if (!surgeryData.surgeons) errors.surgeons = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export const surgeryIntrOperationValidator = (surgeryData) => {
  const errors = {};

  if (!surgeryData.operationStartTime) errors.operationStartTime = "Required";
  if (!surgeryData.operationEndTime) errors.operationEndTime = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export const surgeryPostOperationValidator = (surgeryData) => {
  const errors = {};

  if (!surgeryData.postOpProcedure) errors.postOpProcedure = "Required";
  if (!surgeryData.team) errors.team = "Required";
  if (!surgeryData.surgeryIndication) errors.surgeryIndication = "Required";
  if (!surgeryData.operationName) errors.operationName = "Required";
  if (!surgeryData.treatmentNote) errors.treatmentNote = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// postOpProcedure: "",
//   team: "",
//   surgeryIndication: "",
//   operationName: "",
//   treatmentNote: "",
