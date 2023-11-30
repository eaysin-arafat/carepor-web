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
  else if (
    contactInfo?.countryCode == "+260" &&
    !TypeValidation.isZambiaCellphone(contactInfo.cellphone)
  ) {
    error.cellphone = "Invalid cellphone number";
  } else if (contactInfo?.cellphone?.length > 11)
    error.cellphone = "Cellphone must be 11 digits";

  // return error state
  return {
    isValid: Object.keys(error).length === 0,
    error,
  };
};
