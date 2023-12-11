import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumStatus
// EnumObesity
// EnumUnderWeight
// EnumStunting
// EnumMalnutritionOutcome >> SAM, MAM

// ENUM TYPE
// export type Type = TypeAPIEnum;

// DATA TYPE
export type TypeNutrition = TypeAPIObject & {
  status: string | number;
  obesity: string | number;
  underWeight: string | number;
  stunting: string | number;
  mam: string | number;
  sam: string | number;
};

/**
InteractionId

Status
Obesity
UnderWeight
Stunting
MAM
SAM

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
