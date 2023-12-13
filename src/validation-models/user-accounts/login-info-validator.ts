import { ErrorsType } from "@/types/user-accounts";

interface LoginInfoType {
  username: string;
  password: string;
  confirmPassword: string;
}

export const loginInfoValidator = (loginInfo: LoginInfoType) => {
  const errors: ErrorsType = {};

  if (!loginInfo.username) errors.username = "Required";
  if (
    loginInfo.username &&
    (loginInfo.username.length < 4 || loginInfo.username.length > 30)
  )
    errors.username = "Must be between 4 and 30 characters long.";

  if (loginInfo.username && !/^[a-zA-Z]/.test(loginInfo.username)) {
    errors.username = "Username must begin with a letter (A-Z, a-z).";
  }
  if (loginInfo.password && loginInfo.password.length < 8) {
    errors.password = "Password should be Minimum 8 characters";
  } else {
    if (!loginInfo.password) {
      errors.password = "Required";
    }

    if (!loginInfo.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (loginInfo.password !== loginInfo.confirmPassword) {
      errors.confirmPassword = "Password does not match";
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
