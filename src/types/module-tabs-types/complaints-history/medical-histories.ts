// Past Medical Histories and Family & Social Histories is equal to the Medical Histories

import { TypeAPIEnum, TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumInformationType

// ENUM TYPES
export type TypeRisks = TypeAPIEnum & {
  // risk: string | number;
};

// DATA TYPES
export type TypeRiskStatuses = TypeAPIObject & {
  riskId: string;
};
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
