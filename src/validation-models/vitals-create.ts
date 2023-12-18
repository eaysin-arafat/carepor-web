import dayjs from "dayjs";

export interface VitalsCreate {
  vitalsDate?: string;
  weight?: string;
  height?: string;
  temperature?: string;
  systolic?: string;
  diastolic?: string;
  systolicIfUnrecordable?: string;
  diastolicIfUnrecordable?: string;
}

export const vitalsCreateValidator = (vital: VitalsCreate) => {
  const error: VitalsCreate = {};

  // Patient Information
  if (!vital?.vitalsDate) error.vitalsDate = "Required";
  else if (vital?.vitalsDate) {
    if (dayjs(vital?.vitalsDate).isAfter(dayjs()))
      error.vitalsDate = "Cannot be in future";
  }

  // partner's last test date and last test result
  if (!vital?.weight) error.weight = "Required";

  if (!vital?.height) error.height = "Required";

  if (!vital?.temperature) error.temperature = "Required";

  if (!vital?.systolicIfUnrecordable && !vital?.diastolicIfUnrecordable) {
    if (!vital?.systolic) error.systolic = "Required";
  }

  if (!vital?.systolic && !vital?.diastolic) {
    if (!vital?.systolicIfUnrecordable)
      error.systolicIfUnrecordable = "Required";
  }

  if (!vital?.systolicIfUnrecordable && !vital?.diastolicIfUnrecordable) {
    if (!vital?.diastolic) error.diastolic = "Required";
  }

  if (!vital?.systolic && !vital?.diastolic) {
    if (!vital?.diastolicIfUnrecordable)
      error.diastolicIfUnrecordable = "Required";
  }

  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};
