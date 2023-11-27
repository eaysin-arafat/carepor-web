export const passwordRecoveryRequestValidator = (recoveryInfo) => {
  const errors = {};

  if (
    !recoveryInfo.username &&
    !recoveryInfo.cellphone &&
    !recoveryInfo.countryCode
  ) {
    errors.common = "Please provide either username or cellphone";
  }

  if (!recoveryInfo.countryCode && recoveryInfo.cellphone) {
    errors.countryCode = "Required";
  }

  if (recoveryInfo.countryCode && !recoveryInfo.cellphone)
    errors.cellphone = "Required";
  else if (recoveryInfo?.countryCode == "+260" && recoveryInfo?.cellphone) {
    if (
      recoveryInfo?.cellphone.startsWith("0") &&
      recoveryInfo?.cellphone?.length > 11
    ) {
      errors.cellphone = "Cellphone must be 10 digits";
    } else if (
      !recoveryInfo?.cellphone.startsWith("0") &&
      recoveryInfo?.cellphone?.length > 10
    ) {
      errors.cellphone = "Cellphone must be 9 digits";
    }
  } else if (recoveryInfo?.cellphone?.length > 11)
    errors.cellphone = "Cellphone must be 11 digits";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
