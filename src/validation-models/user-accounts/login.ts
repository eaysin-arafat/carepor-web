/**
 * @description Validate login data
 * @param {object} loginData
 * @returns {object} {isValid: boolean, errors: object
 */

import { LoginDataType } from "@/types";

type errorType = {
  username?: string;
  password?: string;
};

export const loginValidator = (loginData: LoginDataType) => {
  const errors: errorType = {};

  // validate username
  if (!loginData.username) errors.username = "Required";
  else if (loginData.username.length < 3) errors.username = "Invalid";

  // validate password
  if (!loginData.password) errors.password = "Required";

  // return error state
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
