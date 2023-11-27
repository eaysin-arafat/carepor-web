// Check if user is over 18 years old

import { isDateInFuture, isOver18Years } from "@/lib/helpers/date-helpers";

// USER REGISTRATION VALIDATOR
export const userRegistrationValidator = (user) => {
  const error = {};

  // validate first name
  if (!user.firstName) error.firstName = "Required";
  else if (user.firstName?.length > 60)
    error.firstName = "First name must be less than 60 characters";
  else if (user.firstName?.length < 2)
    error.firstName = "First name must be more than 2 characters";

  // validate surname
  if (!user.surname) error.surname = "Required";
  else if (user.surname?.length > 60)
    error.surname = "Surname must be less than 20 characters";
  else if (user.surname?.length < 2)
    error.surname = "Surname must be more than 2 characters";

  // validate dob
  if (!user.dob) error.dob = "Required";
  else if (isDateInFuture(user.dob)) error.dob = "Date cannot be in the future";
  else if (!isOver18Years(user.dob))
    error.dob = "User must be equal or above 18 years old.";

  // validate sex
  if (!user.sex) error.sex = "Required";

  // validate designation
  if (!user.designation) error.designation = "Required";

  // validate nrc
  if (!user.nrc) error.nrc = "Required";
  else if (user.nrc?.length < 11) error.nrc = "NRC must be 11 digits";

  // validate contact address
  if (!user.contactAddress) error.contactAddress = "Required";

  // validate country code
  if (!user.countryCode) error.countryCode = "Required";

  // validate cellphone
  if (!user.cellphone) error.cellphone = "Required";
  else if (user?.countryCode == "+260") {
    if (user?.cellphone?.startsWith("0") && user?.cellphone?.length == 10) {
      // do nothing
    } else if (user?.cellphone?.length == 9) {
      // do nothing
    } else if (
      user?.cellphone?.startsWith("0") &&
      user?.cellphone?.length > 10
    ) {
      error.cellphone = "Cellphone must be 10 digits";
    } else if (user?.cellphone?.length > 9) {
      error.cellphone = "Cellphone must be 9 digits";
    }
  } else if (user?.cellphone?.length > 11)
    error.cellphone = "Cellphone must be 11 digits";

  // validate username
  if (!user.username) error.username = "Required";

  // validate password
  if (!user.password) error.password = "Required";

  // validate confirm password
  if (!user.password) error.password = "Required";

  // validate confirm password
  if (!user.confirmPassword) error.confirmPassword = "Required";
  else if (user.password !== user.confirmPassword)
    error.confirmPassword = "Password does not match";

  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};

// EDIT USER VALIDATOR
export const editUserValidator = (user) => {
  const error = {};

  if (!user.firstName) error.firstName = "Required";
  else if (user.firstName?.length > 60)
    error.firstName = "First name must be less than 60 characters";
  else if (user.firstName?.length < 2)
    error.firstName = "First name must be more than 2 characters";

  if (!user.surname) error.surname = "Required";
  else if (user.surname?.length > 60)
    error.surname = "Surname must be less than 20 characters";
  else if (user.surname?.length < 2)
    error.surname = "Surname must be more than 2 characters";

  if (!user.dob) error.dob = "Required";
  else if (isDateInFuture(user.dob)) error.dob = "Date cannot be in the future";
  else if (!isOver18Years(user.dob))
    error.dob = "You must be over 18 years old";

  if (!user.sex) error.sex = "Required";

  if (!user.designation) error.designation = "Required";

  if (!user.nrc) error.nrc = "Required";
  else if (user.nrc?.length < 11) error.nrc = "NRC must be 11 digits";

  if (!user.contactAddress) error.contactAddress = "Required";

  if (!user.countryCode) error.countryCode = "Required";

  if (!user.cellphone) error.cellphone = "Required";
  else if (user?.countryCode == "+260") {
    if (user?.cellphone.startsWith(0) && user?.cellphone?.length > 10) {
      error.cellphone = "Cellphone must be 10 digits";
    } else if (!user?.cellphone.startsWith(0) && user?.cellphone?.length > 9) {
      error.cellphone = "Cellphone must be 9 digits";
    }
  } else if (user?.cellphone?.length > 11)
    error.cellphone = "Cellphone must be 11 digits";

  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};
