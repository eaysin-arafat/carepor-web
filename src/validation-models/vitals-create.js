import { isDateInFuture } from "@/lib/helpers/date-helpers";

export const vitalsCreateValidator = (vital) => {
  let error = {};

  // Patient Information
  if (vital?.lastTested) {
    if (isDateInFuture(vital?.lastTested))
      error.lastTested = "Cannot be in future";
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
