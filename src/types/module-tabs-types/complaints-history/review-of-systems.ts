import { TypeAPIEnum, TypeAPIObject } from "@/types";

// ENUM TYPE
// PhysicalSystem enum
export type TypePhysicalSystemsEnum = TypeAPIEnum;

// DATA TYPE
// Submit Array type Data
export type TypeSystemReviews = TypeAPIObject & {
  note: string;
  physicalSystemId: string; // ***
};

/**
InteractionId

Note
PhysicalSystemId

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
