import { TypeAPIEnum, TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators

// ENUM TYPE
export type TypeVaccineTypesEnum = TypeAPIEnum;
export type TypeVaccinesEnum = TypeAPIEnum & {
  vaccineTypeId: string;
};
export type TypeVaccineDosesEnum = TypeAPIEnum & {
  vaccineId: string;
};

// DATA TYPE
export type TypeImmunizationRecords = TypeAPIObject & {
  dateGiven: string;
  batchNumber: string;
  doseId: string;
};

/**
InteractionId

DateGiven
BatchNumber
DoseId
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
