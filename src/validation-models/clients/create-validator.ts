interface ICreateClientValidator {
  name?: string;
  email?: string;
}

export const createClientValidator = (data: ICreateClientValidator) => {
  const errors: ICreateClientValidator = {};

  if (!data.name) {
    errors.name = "Required";
  }
  if (!data.email) {
    errors.email = "Required";
  }

  return {
    errors,
    isValid: !Object.keys(errors).length,
  };
};
