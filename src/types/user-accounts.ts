// Change password page types
export type ChangePasswordFormType = {
  password: string;
  newPassword: string;
  confirmPassword: string;
};

export type ChangePasswordFormErrorType = {
  password?: string;
  newPassword?: string;
  confirmPassword?: string;
};

// Password recovery page types
export type PasswordRecoveryFormType = {
  countryCode: string;
  cellphone: string;
  username: string;
};
export type PasswordRecoveryFormErrorType = {
  countryCode?: string;
  cellphone?: string;
  username?: string;
  common?: string;
};
