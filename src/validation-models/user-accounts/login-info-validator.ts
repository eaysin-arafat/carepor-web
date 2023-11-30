import { ErrorsType } from "@/types/user-accounts";

interface LoginInfoType {
  username: string;
  password: string;
  confirmPassword: string;
}

export const loginInfoValidator = (loginInfo: LoginInfoType) => {
  const errors: ErrorsType = {};

  if (!loginInfo.username) errors.username = "required";

  if (!loginInfo.password) {
    errors.password = "Required";
  }

  if (!loginInfo.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (loginInfo.password !== loginInfo.confirmPassword) {
    errors.confirmPassword = "Password does not match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
