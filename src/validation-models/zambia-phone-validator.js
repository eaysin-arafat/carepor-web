/**
 *@description Validates a Zambian phone number without country code
 * @param {string} phoneNumber
 * @returns
 */

export function validatePhoneNumber(phoneNumber) {
  const startsWithZero = phoneNumber.startsWith("0");
  const hasTenDigits = phoneNumber.length === 10;
  const hasNineDigits = phoneNumber.length === 9;

  if (startsWithZero && hasTenDigits) {
    return true;
  }

  if (!startsWithZero && hasNineDigits) {
    return true;
  }

  return false;
}
