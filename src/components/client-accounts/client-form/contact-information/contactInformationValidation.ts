import {
  ClientContactInfoErrorType,
  ClientContactInfoType,
} from "@/types/clientFormTypes";
import { phoneNumberValidation } from "@/utilities/phone-number-validation";
import { TypeValidation } from "@/utilities/type-valdation";

const contactInformationValidation = (formData: ClientContactInfoType) => {
  const errors: ClientContactInfoErrorType = {};
  const {
    cellphone,
    cellphoneCountryCode,
    otherCellphone,
    otherCellphoneCountryCode,
    noCellphone,
    landline,
    landlineCountryCode,
    email,
    householdNumber,
    road,
    area,
    townName,
    landmarks,
  } = formData;

  // Contract Info Check   // Group 04
  if (!noCellphone) {
    phoneNumberValidation({
      phone: cellphone,
      phoneKey: "cellphone",
      code: cellphoneCountryCode,
      codeKey: "cellphoneCountryCode",
      errors: errors,
      required: true,
    });
    console.log(errors);
  }
  phoneNumberValidation({
    phone: otherCellphone,
    phoneKey: "otherCellphone",
    code: otherCellphoneCountryCode,
    codeKey: "otherCellphoneCountryCode",
    errors: errors,
    required: false,
  });
  phoneNumberValidation({
    phone: landline,
    phoneKey: "landline",
    code: landlineCountryCode,
    codeKey: "landlineCountryCode",
    errors: errors,
    required: false,
  });

  if (householdNumber && householdNumber?.length > 30)
    errors.householdNumber = "Household number should be max 30 characters.";
  if (road && road?.length > 90)
    errors.road = "Road should be max 90 characters.";
  if (area && area?.length > 90)
    errors.area = "Area should be max 90 characters.";
  if (landmarks && landmarks?.length > 500)
    errors.landmarks = "Landmarks should be max 500 characters.";
  // townName
  if (townName && townName.length > 60) {
    errors.townName = "Town name should be max 60 characters.";
  }

  // If Email Filed Value True, Then Check Valid Email.
  if (email) {
    if (!TypeValidation.isEmail(email))
      errors.email = "Please enter valid email";
    if (email && email?.length > 60)
      errors.email = "Email should be max 60 characters.";
  }

  return {
    isContactInformationValid: Object.keys(errors).length === 0,
    contactInformationError: errors,

    //
  };
};

export default contactInformationValidation;
