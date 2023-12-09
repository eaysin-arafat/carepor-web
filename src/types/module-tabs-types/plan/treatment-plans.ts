import { TypeAPIEnum, TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators

// ENUM TYPE
export type TypeStoppingReasons = TypeAPIEnum;

// DATA TYPE
export type TypeTreatmentPlans = TypeAPIObject & {
  treatmentPlans: string;
  surgeryId: string;
};

// Not found match with .next Swagger with Data Dictionary 08/12/23
// difference as
export type TypePrEPTreatmentPlans = TypeAPIObject & {
  plans: string;
  startDate: string;
  stopDate: string;
  isUrinalysisNormal: string | boolean;
  isAbleToAdhereDailyPrEP: string | boolean;
  hasAcuteHIVInfectionSymptoms: string | boolean;
  hasGreaterFiftyCreatinineClearance: string | boolean;
  isPotentialHIVExposureMoreThanSixWeeksOld: string | boolean;
  note: string;
  stoppingReasonId: string;
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

/**
 * prep plan
InteractionId

Plans
StartDate
StopDate
IsUrinalysisNormal
IsAbleToAdhereDailyPrEP
HasAcuteHIVInfectionSymptoms
HasGreaterFiftyCreatinineClearance
IsPotentialHIVExposureMoreThanSixWeeksOld
Note
StoppingReasonId

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
