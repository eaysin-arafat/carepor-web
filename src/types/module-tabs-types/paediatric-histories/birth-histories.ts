import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumBirthOutcome
// EnumGeneralCondition
// EnumOtherFeedingOption
// EnumYesNoUnknown

// ENUM TYPE
// export type Type = TypeAPIEnum;

// DATA TYPE
export type TypeContraceptiveHistories = TypeAPIObject & {
  contraceptiveId: string;
  gynObsHistoryId: string;
};
export type TypeBirthHistories = TypeAPIObject & {
  birthWeight: string | number;
  birthHeight: string | number;
  birthOutcome: string;
  headCircumference: string | number;
  chestCircumference: string | number;
  generalCondition: string;
  isBreastFeedingWell: string | boolean;
  otherFeedingOption: string;
  deliveryTime: string;
  vaccinationOutside: string;
  tetanusAtBirth: string;
  note: string;
};

/**
InteractionId

BirthWeight
BirthHeight
BirthOutcome
HeadCircumference
ChestCircumference
GeneralCondition
IsBreastFeedingWell
OtherFeedingOption
DeliveryTime
VaccinationOutside
TetanusAtBirth
Note

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
