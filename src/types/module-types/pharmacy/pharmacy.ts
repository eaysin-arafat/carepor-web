import { TypeAPIEnum, TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumRegimenFor
// EnumInformantRelationship

// ENUM TYPE
export type TypeDrugRegimensEnum = TypeAPIEnum & {
  regimenFor: string | number;
};
export type TypeSpecialDrugsEnum = TypeAPIEnum & {
  strength: string;
  dosageUnitId: string | number;
  formulationId: string | number;
  regimenId: string | number;
};
export type TypeDrugFormulationsEnum = TypeAPIEnum;
export type TypeDrugDosageUnitesEnum = TypeAPIEnum;
export type TypeGeneralDrugDefinitionsEnum = TypeAPIEnum & {
  strength: string | number;
  dosageUnitId: string | number;
  formulationId: string | number;
  drugUtilityId: string | number;
  genericDrugId: string | number;
};
// /generic-medicines
export type TypeGenericDrugsEnum = TypeAPIEnum & {
  pregnancyRisk: string | number;
  breastFeedingRisk: string | number;
  subclassId: string | number;
};
export type TypeDrugRoutesEnum = TypeAPIEnum;
export type TypeDrugClassesEnum = TypeAPIEnum;
export type TypeDrugSubclassesEnum = TypeAPIEnum & {
  drugClassId: string | number;
};
// Already  on system extension
// export type TypePhysicalSystemsEnum = TypeAPIEnum;
export type TypeSystemRelevancesEnum = TypeAPIEnum & {
  physicalSystemId: string | number;
  drugDefinitionId: string | number;
};

// ---------- 09/12/23  upto TypeMedications
// DATA TYPE
export type TypeMedications = TypeAPIObject & {
  prescribedDosage: string;
  itemPerDose: string | number;
  duration: string | number;
  timeUnit: string | number;
  startDate: string;
  endDate: string;
  additionalDrugTitle?: string;
  additionalDrugFormulation?: string;
  prescribedQuantity?: string | number;
  dispensedDrugTitle?: string;
  dispensedDrugsBrand?: string;
  dispensedDrugsFormulation?: string;
  dispensedDrugsDosage?: string;
  dispensedDrugsItemPerDose?: string | number;
  dispensedDrugsFrequency?: string | number;
  dispensedDrugDuration?: string | number;
  dispensedDrugsFrequencyIntervalId?: string | number;
  dispensedDrugsTimeUnit?: string | number;
  dispensedDrugsRouteId?: string | number;
  dispensedDrugsQuantity?: string | number;
  dispensedDrugsStartDate?: string;
  dispensedDrugsEndDate?: string;
  reasonForReplacement?: string;
  frequency: string | number;
  note?: string;
  routeId: string | number;
  drugRoute?: {};
  generalDrugId: string | number;
  generalDrugDefinition?: {};
  specialDrugId: string | number;
  specialDrug?: {};
  prescriptionId: string;
  prescription?: {};
  frequencyIntervalId: string | number;
  frequencyInterval?: {};
  dispensedItems?: object;
  dosageUnit?: string;
  nextAppointmentDate?: string;
};

/** Medications
 * 
InteractionId

PrescribedDosage
ItemPerDose
Duration
TimeUnit
StartDate
EndDate
AdditionalDrugTitle
AdditionalDrugFormulation
PrescribedQuantity
DispensedDrugTitle
DispensedDrugsBrand
DispensedDrugsFormulation
DispensedDrugsDosage
DispensedDrugsItemPerDose
DispensedDrugsFrequency
DispensedDrugDuration
DispensedDrugsFrequencyIntervalId
DispensedDrugsTimeUnit
DispensedDrugsRouteId
DispensedDrugsQuantity
DispensedDrugsStartDate
DispensedDrugsEndDate
ReasonForReplacement
Frequency
Note
PrescriptionId
FrequencyIntervalId
RouteId
SpecialDrugId
GeneralDrugId

CreatedIn
DateCreated
CreatedBy
ModifiedIn
DateModified
ModifiedBy
IsDeleted
IsSynced
 */
