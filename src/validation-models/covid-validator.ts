// import { TypeCovid, TypeCovidError } from "@/types/covid";

import { TypeCovid, TypeCovidError } from "@/types/module-types/covid";

export const covidValidator = (formData: TypeCovid) => {
  const errors: TypeCovidError = {};

  if (!formData.sourceOfAlert) errors.sourceOfAlert = "Required";

  if (!formData.isICUAdmitted) errors.isICUAdmitted = "Required";
  if (formData.isICUAdmitted == "true" && !formData?.icuAdmissionDate)
    errors.icuAdmissionDate = "Required";

  if (!formData.isOnOxygen) errors.isOnOxygen = "Required";
  if (!formData.dateFirstPositive) errors.dateFirstPositive = "Required";

  if (!formData.oxygenSaturation) errors.oxygenSaturation = "Required";
  if (!formData.receivedVentilatorySupport)
    errors.receivedVentilatorySupport = "Required";
  if (!formData.receivedBPSupport) errors.receivedBPSupport = "Required";
  if (!formData.anyInternationalTravel)
    errors.anyInternationalTravel = "Required";

  if (
    formData.anyInternationalTravel == "true" &&
    !formData.travelDestination
  ) {
    errors.travelDestination = "Required";
  }

  if (!formData.isClientHealthCareWorker)
    errors.isClientHealthCareWorker = "Required";
  if (!formData.hadCovidExposure) errors.hadCovidExposure = "Required";
  if (!formData.hasPneumonia) errors.hasPneumonia = "Required";
  if (!formData.isARDS) errors.isARDS = "Required";
  if (!formData.isPatientHospitalized)
    errors.isPatientHospitalized = "Required";
  if (formData.isPatientHospitalized && !formData?.dateHospitalized)
    errors.dateHospitalized = "Required";

  // Length Check
  if (formData?.otherExposureRisk?.length > 500) {
    errors.otherExposureRisk = "Maximum 500 characters";
  }
  if (formData?.otherCovidSymptom?.length > 500) {
    errors.otherCovidSymptom = "Maximum 500 characters";
  }
  if (formData?.mentalStatusOnAdmission?.length > 90) {
    errors.mentalStatusOnAdmission = "Maximum 90 characters";
  }
  if (formData?.travelDestination?.length > 90) {
    errors.travelDestination = "Maximum 90 characters";
  }
  // spelling missing in api response / otherComorbiditiesConditions
  if (formData?.otherComorbiditiesConditions?.length > 500) {
    errors.otherComorbiditiesConditions = "Maximum 500 characters";
  }
  if (formData?.otherRespiratoryIllness?.length > 500) {
    errors.otherComorbiditiesConditions = "Maximum 500 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
