export const clientSearchValidator = (value) => {
  const errors = {};

  if (!value.countryCode) {
    errors.countryCode = "Required";
  }

  if (!value.cellphone) {
    errors.cellphone = "Required";
  }

  if (!value.nupn) {
    errors.nupn = "Required";
  }

  if (!value.firstName) {
    errors.firstName = "Required";
  }

  if (!value.surname) {
    errors.surname = "Required";
  }

  if (!value.sex) {
    errors.sex = "Required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

//countryCode
//cellphone
//nupn
//firstName
//surname
//sex
