import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators

// ENUM TYPE
// export type Type = TypeAPIEnum;

// DATA TYPE
export type TypeTreatmentPlans = TypeAPIObject & {
  treatmentPlans: string;
  surgeryId: string;
};

/**
InteractionId

TreatmentPlans
SurgeryId

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
