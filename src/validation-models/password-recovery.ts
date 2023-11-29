import {
  PasswordRecoveryFormErrorType,
  PasswordRecoveryFormType,
} from "@/types/user-accounts";

export const passwordRecoveryRequestValidator = (
  recoveryInfo: PasswordRecoveryFormType
) => {
  const errors: PasswordRecoveryFormErrorType = {};

  if (!recoveryInfo.username) {
    errors.username = "Required";
  }

  if (!recoveryInfo.cellphone) {
    errors.cellphone = "Required";
  }
  if (!recoveryInfo.countryCode) {
    errors.countryCode = "Required";
  }

  if (recoveryInfo?.countryCode == "+260" && recoveryInfo?.cellphone) {
    if (!/^0?\d{9}$/.test(recoveryInfo?.cellphone)) {
      errors.cellphone =
        "Zambian Valid cellphone number start with a '0' and should not exceed 10 digits in length or not exceed 9 digits";
      // "Zambian Valid cellphone number must start with a '0' and should not exceed 10 digits in length or not exceed 9"
    }
  } else if (recoveryInfo?.countryCode != "+260" && recoveryInfo?.cellphone) {
    if (!/^\d{9,11}$/.test(recoveryInfo?.cellphone)) {
      errors.cellphone =
        "Cellphone must be min 9 digits or max 11 digits length.";
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// if (
//   !recoveryInfo.username &&
//   !recoveryInfo.cellphone &&
//   !recoveryInfo.countryCode
// ) {
//   errors.common = "Please provide either username or cellphone";
// }
