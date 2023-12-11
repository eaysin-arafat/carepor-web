import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumYesNo >> IsTakingMedications,
// EnumDosesMissed
// EnumReasonForMissing

// ENUM TYPES

// DATA TYPES
// Submit array type data
export type TypeDrugAdherence = TypeAPIObject & {
    isTakingMedications?: string | number,
    haveTroubleTakingPills?: string | boolean,
    dosesMissed?: string | number,
    reasonForMissing?: string | number,
    isPatientComplainedOnMedication?: string | boolean,
    note?: string,

    reasonForMissingList?: number[],
};

/**
InteractionId

IsTakingMedications
HaveTroubleTakingPills
DosesMissed
ReasonForMissing
IsPatientComplainedOnMedication
Note

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

