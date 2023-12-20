import {
  TypeAdverseForm,
  TypeAdverseFormError,
} from "@/types/module-types/covax";

export const adverseValidator = (formData: TypeAdverseForm) => {
  const errors: TypeAdverseFormError = {};

  if (!formData.aefiDate) errors.aefiDate = "Required";

  return {
    errors,
    isValid: Object.keys(errors)?.length === 0,
  };
};
