import {
  ChangePasswordFormErrorType,
  ChangePasswordFormType,
} from "@/types/user-accounts";

export const changePasswordValidator = (
  passwordInfo: ChangePasswordFormType
) => {
  const errors: ChangePasswordFormErrorType = {};

  if (!passwordInfo.password) {
    errors.password = "Required";
  }

  if (!passwordInfo.newPassword) {
    errors.newPassword = "Required";
  }

  if (!passwordInfo.confirmPassword) {
    errors.confirmPassword = "Required";
    console.log(passwordInfo.confirmPassword);
  }

  if (
    passwordInfo.confirmPassword &&
    passwordInfo.newPassword &&
    passwordInfo.confirmPassword !== passwordInfo.newPassword
  ) {
    errors.confirmPassword = "Passwords must match";
  }

  console.log({ passwordInfo });

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
