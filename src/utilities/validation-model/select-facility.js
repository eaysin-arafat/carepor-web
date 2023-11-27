export const selectFacilityValidator = (facilityObject) => {
  const errors = {};

  if (!facilityObject.province) {
    errors.province = "Required";
  }

  if (!facilityObject.district) {
    errors.district = "Required";
  }

  if (!facilityObject.facility) {
    errors.facility = "Required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
