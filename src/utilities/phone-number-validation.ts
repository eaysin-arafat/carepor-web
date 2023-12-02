export type PhoneValidationType = {
  phone: string;
  phoneKey: string;
  code: string;
  codeKey: string;
  errors: object;
  required: boolean;
};

/**
 * @useCase Form validation for cellphone and country code
 * @param phone Phone number value,
 * @param phoneKey Phone number phoneKey name
 * @param code  Country code
 * @param codeKey Country code phoneKey name
 * @param errors Errors object
 * @param required  If field is Required
 * @returns
 */
export const phoneNumberValidation = ({
  phone,
  phoneKey,
  code,
  codeKey,
  errors,
  required,
}: PhoneValidationType) => {
  if (required) {
    if (!phone) errors[phoneKey] = "Required";
    if (!code) errors[codeKey] = "Required";
    if (!code || !phone) return;
  }
  // if (required && (!code || !phone)) return;
  //   console.log({ phone, phoneKey, code, codeKey, errors, required });

  //   if (phone || code) {
  if (!phone && code) errors[phoneKey] = "Please enter phone number";
  if (phone && !code) errors[codeKey] = "Please  select country code";
  // return;
  //   }

  if (phone && code == "+260") {
    if (!/^0?\d{9}$/.test(phone)) {
      errors[phoneKey] =
        "Zambian Valid cellphone number start with a '0' and should not exceed 10 digits in length or not exceed 9 digits";
      // "Zambian Valid cellphone number must start with a '0' and should not exceed 10 digits in length or not exceed 9"
    }
  }

  if (phone && code != "+260") {
    if (!/^\d{9,11}$/.test(phone)) {
      errors[phoneKey] =
        "Cellphone must be min 9 digits or max 11 digits length.";
    }
  }
};
