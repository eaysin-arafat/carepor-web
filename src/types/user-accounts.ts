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
