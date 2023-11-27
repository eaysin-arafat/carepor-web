export const changePasswordValidator = (passwordInfo) => {
  const errors = {};

  if (!passwordInfo.password) {
    errors.password = "Required";
  }

  if (!passwordInfo.newPassword) {
    errors.newPassword = "Required";
  }

  if (!passwordInfo.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (passwordInfo.confirmPassword !== passwordInfo.newPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
