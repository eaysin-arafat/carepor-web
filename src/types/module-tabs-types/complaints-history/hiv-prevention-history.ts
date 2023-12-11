import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators

// ENUM TYPE
// export type TypeEnum = TypeAPIEnum

// DATA TYPE
export type TypeHIVPreventionHistories = TypeAPIObject & {
  isPEPUsedBefore: string | boolean;
  isPrEPUsedBefore: string | boolean;
  isCondomLubricantUsed: string | boolean;
  isCircumcised: string | number;
};

/**
InteractionId

IsPEPUsedBefore
IsPrEPUsedBefore
IsCondomLubricantUsed
IsCircumcised

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
