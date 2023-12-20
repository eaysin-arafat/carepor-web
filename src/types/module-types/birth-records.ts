import { TypeAPIEnum, TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumOrigin
// EnumInformantRelationship

// ENUM TYPE
export type TypeEnum = TypeAPIEnum;

// DATA TYPE
export type TypeBirthRecord = TypeAPIObject & {
  isBirthRecordGiven?: string | boolean;
  origin?: string | number;
  informantFirstName?: string;
  informantSurname?: string;
  underFiveCardNumber?: string;
  isUnderFiveCardGiven?: string | boolean;
  informantNickname?: string;
  informantRelationship?: string | number;
  informantOtherRelationship?: string;
  informantCity?: string;
  informantStreetNo?: string;
  informantPOBox?: string;
  informantLandmark?: string;
  informantLandlineCountryCode?: string;
  informantLandline?: string;
  informantCellphoneCountryCode?: string;
  informantCellphone?: string;
};
export type TypeBirthRecordFormError = TypeAPIObject & {
  isBirthRecordGiven?: string;
  origin?: string;
  informantFirstName?: string;
  informantSurname?: string;
  underFiveCardNumber?: string;
  isUnderFiveCardGiven?: string;
  informantNickname?: string;
  informantRelationship?: string;
  informantOtherRelationship?: string;
  informantCity?: string;
  informantStreetNo?: string;
  informantPOBox?: string;
  informantLandmark?: string;
  informantLandlineCountryCode?: string;
  informantLandline?: string;
  informantCellphoneCountryCode?: string;
  informantCellphone?: string;
};

/**
InteractionId
IsUnderFiveCardGiven
UnderFiveCardNumber
Origin
IsBirthRecordGiven
InformantFirstName
InformantSurname
InformantNickname
InformantRelationship
InformantOtherRelationship
InformantCity
InformantStreetNo
InformantPOBox
InformantLandmark
InformantLandlineCountryCode
InformantLandline
InformantCellphoneCountryCode
InformantCellphone
ClientId
EncounterId
CreatedIn
DateCreated
CreatedBy
ModifiedIn
DateModified
ModifiedBy
IsDeleted
IsSynced
 */
