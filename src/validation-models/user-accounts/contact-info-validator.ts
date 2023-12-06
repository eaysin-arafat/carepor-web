import { TypeValidation } from "@/utilities/type-valdation";

interface ContactInfoType {
  contactAddress?: string;
  countryCode?: string;
  cellphone?: string;
}

export const contactInfoValidator = (
  contactInfo: ContactInfoType
): { isValid: boolean; error: ContactInfoType } => {
  const error: ContactInfoType = {};

  // validate contact address
  if (!contactInfo.contactAddress) error.contactAddress = "Required";

  // validate country code
  if (!contactInfo.countryCode) error.countryCode = "Required";

  // validate cellphone
  if (!contactInfo.cellphone) error.cellphone = "Required";

  if (contactInfo?.countryCode == "+260") {
    if (!TypeValidation.isZambiaCellphone(contactInfo.cellphone)) {
      error.cellphone = "Invalid cellphone number";
    }
  }
  console.log("gss" + contactInfo?.countryCode);

  if (contactInfo?.countryCode != "+260") {
    if (!TypeValidation.isPhoneNumber(contactInfo.cellphone)) {
      error.cellphone = "Cellphone must be max 11 & min 9 digits";
    }
  }

  // return error state
  return {
    isValid: Object.keys(error).length === 0,
    error,
  };
};
