import { TypeAPIEnum, TypeAPIObject } from "@/types";

// ENUM TYPE
// PhysicalSystem enum
export type TypeHIVTestingReasonsEnum = TypeAPIEnum;
export type TypeHIVNotTestingReasonsEnum = TypeAPIEnum;
export type TypeHIVRiskFactorsEnum = TypeAPIEnum;
export type TypeRiskAssessmentsEnum = TypeAPIEnum & {
  riskFactorId: string | number;
  htsId: string;
};
export type TypeClientTypesEnum = TypeAPIEnum;
export type TypeVisitTypesEnum = TypeAPIEnum;
export type TypeServicePointsEnum = TypeAPIEnum;

// DATA TYPE
export type TypeVitals = TypeAPIObject & {
  clientSource: string | number;
  lastTested?: string;
  lastTestResult: string | number;
  partnerHIVStatus?: string | number;
  partnerLastTestDate?: string;
  hasCounselled: string | number;
  hasConsented: string | boolean;
  notTestingReason?: string;
  testNo?: string | number;
  determineTestResult: string | number;
  biolineTestResult?: string | number;
  hivType?: string | number;
  isDNAPCRSampleCollected: string | boolean;
  sampleCollectionDate?: string;
  isResultReceived: string | boolean;
  retestDate?: string;

  consentForSMS: string | boolean;
  clientTypeId: string | number;
  hivTestingReasonId: string | number;
  visitTypeId: string | number;
  servicePointId: string | number;

  hivNotTestingReasonId: string | number;
  riskAssessmentList?: number[];
};

/**
 InteractionId

ClientSource
LastTested
LastTestResult
PartnerHIVStatus
PartnerLastTestDate
HasCounselled
HasConsented
NotTestingReason
TestNo
DetermineTestResult
BiolineTestResult
HIVType
IsDNAPCRSampleCollected
SampleCollectionDate
IsResultReceived
RetestDate
ConsentForSMS
ClientTypeId  
VisitTypeId
ServicePointId
HIVTestingReasonId
HIVNotTestingReasonId

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
