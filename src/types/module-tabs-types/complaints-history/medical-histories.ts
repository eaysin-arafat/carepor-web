// ***
//
// Past Medical Histories and Family & Social Histories is equal to the Medical Histories

import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumInformationType

// ENUM TYPES

// DATA TYPES
// FamilyMedicalHistory / Past Medical Histories
export type TypeMedicalHistory = TypeAPIObject & {
  history: string;
  informationType: string;
};

/**
InteractionId
History
InformationType
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
