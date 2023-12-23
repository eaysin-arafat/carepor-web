import {
  ClientContactInfoErrorType,
  ClientContactInfoType,
} from "@/types/clientTypes";
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
    checkPhoneNumber({
      phone: cellphone,
      phoneKey: "cellphone",
      code: cellphoneCountryCode,
      codeKey: "cellphoneCountryCode",
      errors: errors,
      required: true,
    });
  }

  checkPhoneNumber({
    phone: otherCellphone,
    phoneKey: "otherCellphone",
    code: otherCellphoneCountryCode,
    codeKey: "otherCellphoneCountryCode",
    errors: errors,
    required: false,
  });
  checkPhoneNumber({
    phone: landline,
    phoneKey: "landline",
    code: landlineCountryCode,
    codeKey: "landlineCountryCode",
    errors: errors,
    required: false,
  });
  console.log({ landline, landlineCountryCode });

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

type PhoneValidationType = {
  phone: string;
  phoneKey: string;
  code: string;
  codeKey: string;
  errors: object;
  required: boolean;
};

/**
 * @useCase Form validation for cellphone and country code
 * @param phone Phone number value,
 * @param phoneKey Phone number phoneKey name
 * @param code  Country code
 * @param codeKey Country code phoneKey name
 * @param errors Errors object
 * @param required  If field is Required
 * @returns
 */
const checkPhoneNumber = ({
  phone,
  phoneKey,
  code,
  codeKey,
  errors,
  required,
}: PhoneValidationType) => {
  if (required) {
    if (!phone) errors[phoneKey] = "Required";
    if (!code) errors[codeKey] = "Required";
    if (!code || !phone) return;
  }
  // if (required && (!code || !phone)) return;
  //   console.log({ phone, phoneKey, code, codeKey, errors, required });

  if (phone || code) {
    if (!phone && code && code != "0000")
      errors[phoneKey] = "Please enter phone number";
    if (phone && !code && code != "0000")
      errors[codeKey] = "Please  select country code";
    // return;
  }
  console.log({ phoneKey, phone, code });

  if (phone && code == "+260") {
    if (!/^0?\d{9}$/.test(phone)) {
      errors[phoneKey] =
        "Zambian Valid cellphone number start with a '0' and should not exceed 10 digits in length or not exceed 9 digits";
      // "Zambian Valid cellphone number must start with a '0' and should not exceed 10 digits in length or not exceed 9"
    }
  }

  if (phone && code != "+260") {
    if (!/^\d{9,11}$/.test(phone)) {
      errors[phoneKey] =
        "Cellphone must be min 9 digits or max 11 digits length.";
    }
  }
};
