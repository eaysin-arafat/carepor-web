import { TypeAPIEnum, TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
//  EnumSeverity

// ENUM TYPE
export type TypeAllergiesEnum = TypeAPIEnum & { allergyName: string };
export type TypeAllergicDrugsEnum = TypeAPIEnum & { drugType: string };

// DATA TYPE
export type TypeAllergies = TypeAPIObject & {
  severity: string;
  allergyId: string;
  allergicDrugId: string;
};

/**
InteractionId
Severity
AllergyId
AllergicDrugId
ClientId
EncounterId
CreatedIn
DateCreated
CreatedBy
ModifiedIn
DateModified
ModifiedBy
IsDeleted
 */
