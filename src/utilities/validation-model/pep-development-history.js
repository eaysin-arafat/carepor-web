export const pepDevelopmentHistoryValidator = (FormData) => {
  const errors = {};

  if (!FormData.feedingHistory) errors.feedingHistory = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
