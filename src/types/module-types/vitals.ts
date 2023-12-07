import { TypeAPIObject } from "@/types";

// ENUM TYPE
// PhysicalSystem enum
// export type TypeEnum = TypeAPIEnum;

// DATA TYPE
export type TypeVitals = Omit<TypeAPIObject, "interactionId"> & {
  oid?: string;
  weight: string | number;
  height: string | number;
  bmi: string;
  systolic: string | number;
  systolicIfUnrecordable: string | number;
  diastolic: string | number;
  diastolicIfUnrecordable: string | number;
  temperature: string | number;
  pulseRate?: string | number;
  respiratoryRate?: string | number;
  oxygenSaturation?: string | number;
  muac?: string | number;
  muacScore?: string;
  abdominalCircumference?: string | number;
  headCircumference?: string | number;
  hcScore?: string;
  randomBloodSugar?: string;
  comment?: string;
  vitalsDate: string;
};

/**
 * 
Oid
Weight
Height
BMI
Systolic
SystolicIfUnrecordable
Diastolic
DiastolicIfUnrecordable
Temperature
PulseRate
RespiratoryRate
OxygenSaturation
MUAC
MUACScore
AbdominalCircumference
HeadCircumference
HCScore
RandomBloodSugar
Comment
VitalsDate

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
