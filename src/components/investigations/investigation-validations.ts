import { TypeInvestigationForm } from "@/types/module-types/investigation";

// validation for investigation add form
export const investigationValidator = (formData) => {
  const errors: TypeInvestigationForm = {};

  if (!formData.testType) errors.testType = "required";
  if (!formData.subTestType) errors.subTestType = "required";
  if (!formData.testId) errors.testId = "required";
  if (!formData.orderDate) errors.orderDate = "required";
  if (!formData.quantity) errors.quantity = "required";
  if (!formData.piority) errors.piority = "required";
  if (!formData?.testId) errors.testId = "Required";

  if (formData.testType != 3 && !formData.sampleQuantity)
    errors.sampleQuantity = "required";
  if (formData.testType == 3 && !formData.imagingTestDetails)
    errors.imagingTestDetails = "required";
  if (formData.hasOwnProperty("addButton"))
    errors.addButton = "At last one investigation required.";
  //----------------------------------------------------------------
  if (formData.quantity == "0") errors.quantity = "0 is not valid quantity";
  if (formData.testType != 3 && formData.sampleQuantity == "0")
    errors.sampleQuantity = "0 is not valid quantity";
  //----------------------------------------------------------------
  return {
    errors,
    isValid: Object.keys(errors)?.length === 0,
  };
};

// validation for Composite Test add form
export const compositeTestValidator = (formData: TypeInvestigationForm) => {
  const errors: TypeInvestigationForm = {};

  if (!formData.orderDate) errors.orderDate = "required";
  if (!formData.orderNumber) errors.orderNumber = "required";
  if (!formData.piority) errors.piority = "required";
  if (!formData.quantity) errors.quantity = "required";
  if (!formData.sampleQuantity) errors.sampleQuantity = "required";
  if (!formData.testId) errors.testId = "required";

  return {
    errors,
    isValid: Object.keys(errors)?.length === 0,
  };
};
