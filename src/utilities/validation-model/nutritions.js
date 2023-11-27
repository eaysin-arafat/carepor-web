export const nutritionsValidator = (formData) => {
  const errors = {};

  if (!formData.status) errors.status = "Required";

  if (!formData.obesity) errors.obesity = "Required";

  if (!formData.underWeight) errors.underWeight = "Required";

  if (!formData.stunting) errors.stunting = "Required";

  if (!formData.mam) errors.mam = "Required";

  if (!formData.sam) errors.sam = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// status: 1,
//   obesity: 1,
//   underWeight: 1,
//   stunting: 1,
//   mam: 1,
//   sam: 1,
