export const glasgowComaScaleValidator = (formData) => {
  const errors = {};

  if (!formData.eyeScore) errors.eyeScore = "Required";

  if (!formData.verbalScore) errors.verbalScore = "Required";

  if (!formData.motorScale) errors.motorScale = "Required";

  //   if (!formData.glasgowComaScore) errors.glasgowComaScore = "Required";

  if (!formData.result) errors.result = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// eyeScore: 1,
// verbalScore: 1,
// motorScale: 1,
// glasgowComaScore: "string",
// result: "string",
