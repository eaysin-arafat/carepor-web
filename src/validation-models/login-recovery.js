export const loginRecoveryValidator = (recoveryData) => {
  const errors = {};

  if (!recoveryData?.newPassword) {
    errors.newPassword = "Required";
  }

  if (!recoveryData?.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (recoveryData?.confirmPassword !== recoveryData?.newPassword) {
    errors.confirmPassword = "Password does not match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// newPassword: "string",
//   confirmPassword: "string",
