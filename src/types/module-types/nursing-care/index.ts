//
// TPR & Other Charts
// Vitals
// GlasgowComaScales form examination-diagnosis

//
import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// Enum

// ENUM TYPE
// export type Type = TypeAPIEnum;

// DATA TYPE
export type TypeTurningCharts = TypeAPIObject & {
  recordDate: string;
  turningTime: string; // "00:00:00"
  comments: string;
};

// Blood Transfusion Monitoring
// Vitals

/* 

InteractionId

RecordDate
TurningTime
Comments

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
