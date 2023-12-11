import { TypeAPIEnum, TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumHIVTestResult
// EnumRecencyType or EnumChildExposureStatus
// EnumPositiveNegative
// EnumTBScreening

// ENUM TYPE
// PEP,
export type TypeExposureTypeEnum = TypeAPIEnum;
// PrEP, ANC (all),,
export type TypeKeyPopulationsEnum = TypeAPIEnum;
// PrEP, ANC (all),
export type TypeQuestionsEnum = TypeAPIEnum;

// DATA TYPE
// PEP,
export type TypeExposures = Omit<TypeAPIObject, "interactionId"> & {
  oid: string;
  exposureTypeId: string;
  chiefComplaintId: string;
};
// PeEP, ANC (all),
export type TypeKeyPopulationDemographics = TypeAPIObject & {
  keyPopulationId: string;
};
// PeEP, ANC (all), >> Questions > answer
export type TypeKeyHIVRiskScreenings = TypeAPIObject & {
  answer: string;
  questionId: string;
};

// ***
export type TypeChiefComplaints = TypeAPIObject & {
  chiefComplaints: string;
  historyOfChiefComplaint: string;
  hivStatus: string | number;
  lastHIVTestDate: string;
  testingLocation: string;
  isChildGivenARV: false;
  isMotherGivenARV?: false;
  historySummary?: string;
  examinationSummary?: string;
  potentialHIVExposureDate?: string;
  recencyType?: string;
  recencyTestDate?: string;
  childExposureStatus?: string;
  natTestDate?: string;
  natResult?: string;
  tbScreenings?: string;
};

/**
 InteractionId

ChiefComplaints
HistoryOfChiefComplaint
HistorySummary
ExaminationSummary
HIVStatus
LastHIVTestDate
TestingLocation
PotentialHIVExposureDate
RecencyType
RecencyTestDate
ChildExposureStatus
IsChildGivenARV
IsMotherGivenARV
NATTestDate
NATResult
TBScreenings

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
