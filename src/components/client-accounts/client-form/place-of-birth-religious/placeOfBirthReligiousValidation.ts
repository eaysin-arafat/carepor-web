import {
  ClientPlaceOfBirthAndReligionErrorType,
  ClientPlaceOfBirthAndReligionType,
} from "@/types/clientFormTypes";

const placeOfBirthReligiousValidation = (
  formData: ClientPlaceOfBirthAndReligionType
) => {
  const errors: ClientPlaceOfBirthAndReligionErrorType = {};

  if (!formData.homeLanguageId) errors.homeLanguageId = "Required";
  if (!formData.isZambianBorn) errors.isZambianBorn = "Required";
  if (formData.isZambianBorn == "1") {
    if (!formData.district) errors.district = "Required";
    if (!formData.province) errors.province = "Required";
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
