export const covidValidator = (
  formData,
  dateFirstPositive,
  notificationDate
) => {
  const errors = {};

  if (!formData.sourceOfAlert) errors.sourceOfAlert = "Required";
  if (!formData.isICUAdmitted) errors.isICUAdmitted = "Required";
  if (!formData.isOnOxygen) errors.isOnOxygen = "Required";
  if (!formData.oxygenSaturation) errors.oxygenSaturation = "Required";
  if (!formData.receivedVentilatorySupport)
    errors.receivedVentilatorySupport = "Required";
  if (!formData.receivedBPSupport) errors.receivedBPSupport = "Required";
  if (!formData.anyInternationalTravel)
    errors.anyInternationalTravel = "Required";
  if (!formData.isClientHealthCareWorker)
    errors.isClientHealthCareWorker = "Required";
  if (!formData.hadCovidExposure) errors.hadCovidExposure = "Required";
  if (!formData.hasPneumonia) errors.hasPneumonia = "Required";
  if (!formData.isARDS) errors.isARDS = "Required";
  if (!formData.isPatientHospitalized)
    errors.isPatientHospitalized = "Required";
  // if (!formData.notificationDate) errors.notificationDate = "Required";
  // if (!formData.dateFirstPositive) errors.dateFirstPositive = "Required";
  // console.log({dateFirstPositive , notificationDate});
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
