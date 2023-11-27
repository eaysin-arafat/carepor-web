export const familyPlaningValidator = (data) => {
  const errors = {};

  if (!data?.referredBy) {
    errors.referredBy = "Required";
  }
  if (!data?.clientStaysWith) {
    errors.clientStaysWith = "Required";
  }
  if (!data?.communicationConsent) {
    errors.communicationConsent = "Required";
  }
  if (!data?.communicationPreference) {
    errors.communicationPreference = "Required";
  }
  if (!data?.typeOfAlternativeContacts) {
    errors.typeOfAlternativeContacts = "Required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
