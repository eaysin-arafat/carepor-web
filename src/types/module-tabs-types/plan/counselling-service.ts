import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators

// ENUM TYPE
// export type Type = TypeAPIEnum;

// DATA TYPE

export type TypeCounsellingServices = TypeAPIObject & {
  counsellingType: string | number;
  otherCounsellingType: string;
  sessionNumber: string | number;
  sessionDate: string;
  sessionNote: string;
};

/**
InteractionId

CounsellingType
OtherCounsellingType
SessionNumber
SessionDate
SessionNote

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
