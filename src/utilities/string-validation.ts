/**
 * @param value the value to validate
 * @param min How many characters minimum
 * @param max How many characters maximum
 * @param errorObj Validation error object
 */
export const nameMinMaxCheck = (
  value: string,
  key: string,
  errorObj: object,
  required: boolean = false,
  message?: string
) => {
  if (required && !value) {
    return (errorObj[key] = message || "Required");
  }
  if (value && value.length > 30) {
    return (errorObj[key] = "Maximum length 30 characters");
  }
  if (value && value.length < 2) {
    return (errorObj[key] = "Minimum length 2 characters");
  }
  return true;
};
