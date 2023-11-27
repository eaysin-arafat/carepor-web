export const QuickExaminationValidator = (formData) => {
  const errors = {};

  if (formData.implantInsertion === "") errors.implantInsertion = "Required";

  if (formData.implantRemoval === "") errors.implantRemoval = "Required";

  if (formData.iucdInsertion === "") errors.iucdInsertion = "Required";

  if (formData.iucdRemoval === "") errors.iucdRemoval = "Required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

/**
 * : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
    : "",
 */
