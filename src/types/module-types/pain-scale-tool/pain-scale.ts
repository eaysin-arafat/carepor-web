import { TypeAPIEnum, TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumOrigin
// EnumInformantRelationship

// ENUM TYPE
export type TypePainScalesEnum = TypeAPIEnum;

// DATA TYPE
export type TypePainRecords = TypeAPIObject & {
  painScales: string | boolean;
  painScaleId: string | number;
};

/*
InteractionId

PainScale
PainScaleId

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
