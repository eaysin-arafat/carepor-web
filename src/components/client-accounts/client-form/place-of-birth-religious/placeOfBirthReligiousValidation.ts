import {
  ClientPlaceOfBirthAndReligionErrorType,
  ClientPlaceOfBirthAndReligionType,
} from "@/types/clientTypes";

const placeOfBirthReligiousValidation = (
  formData: ClientPlaceOfBirthAndReligionType
) => {
  const errors: ClientPlaceOfBirthAndReligionErrorType = {};

  if (!formData.homeLanguageId) errors.homeLanguageId = "Required";
  if (!formData.isZambianBorn) errors.isZambianBorn = "Required";
  if (formData.isZambianBorn == "1") {
    if (!formData.districtId) errors.districtId = "Required";
    if (!formData.provinceId) errors.provinceId = "Required";
  }
  if (formData.isZambianBorn == "2") {
    if (!formData.birthPlace) errors.birthPlace = "Required";
  }

  return {
    isPersonalInfoValid: Object.keys(errors).length === 0,
    placeOfBirthReligiousErrors: errors,
  };
};

export default placeOfBirthReligiousValidation;
