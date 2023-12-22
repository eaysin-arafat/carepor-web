import { Option } from "@/components/core/form-elements/MultipleSelect";
import { Client } from "@/interface/clients";

// api response types
export type TypeCovidSymptom = {
  oid: number;
  description: string;
  // covidSymptomScreenings: [];
  dateCreated: string;
  dateModified: string;
  isDeleted: boolean;
  isSynced: boolean;
};
// api response types
export type CovidSymptomScreening = {
  interactionId: string;
  covidSymptomId: number;
  covidSymptom: TypeCovidSymptom;
  covidId: string;
  createdIn: number;
  encounterType: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
};
// api response types
export type CovidComorbidity = {
  interactionId: string;
  covidComorbidityConditions: number;
  covidId: string;
  encounterId: string;
  encounterType: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
};
// api response types
export type exposureRisk = {
  interactionId: string;
  exposureRisks: number;
  covidComorbidityConditions?: string;
  covidId: string;
  encounterId: string;
  encounterType: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
};
// api response types
export type TypeCovidRecord = {
  interactionId: string;
  sourceOfAlert: number;
  notificationDate: string;
  isICUAdmitted: boolean;
  isOnOxygen: boolean;
  oxygenSaturation: number;
  receivedBPSupport: boolean;
  receivedVentilatorySupport: boolean;
  dateFirstPositive: string;
  anyInternationalTravel: boolean;
  isClientHealthCareWorker: true;
  hadCovidExposure: true;
  hasPneumonia: boolean;
  isPatientHospitalized: boolean;
  isARDS: boolean;
  encounterId: string;
  encounterType: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
  encounterDate: string;

  clientId: string;
  client: Client;

  otherExposureRisk: string;
  otherRespiratoryIllness: string;
  otherComorbiditiesConditions: string;
  otherCovidSymptom: string;
  icuAdmissionDate: string;
  travelDestination: string;
  mentalStatusOnAdmission: string;
  dateHospitalized: string;

  //merge on transformation on rtk
  mergeCovidSymptomScreenings: Option[];
  mergeCovidComorbidities: Option[];
  mergeExposureRisks: Option[];

  // Remove after transformation on rtk
  covidSymptomScreenings?: CovidSymptomScreening[];
  covidComorbidities?: CovidComorbidity[];
  exposureRisks?: exposureRisk[];
};

export type TypeCovidPageRecord = {
  data: TypeCovidRecord[];
  totalItems: number;
  pageNumber: number;
  pageSize: number;
};

// Form state type

// For Types
export interface TypeCovid {
  sourceOfAlert?: string;
  otherCovidSymptom?: string;
  otherExposureRisk?: string;
  isICUAdmitted?: string;
  isOnOxygen?: string;
  oxygenSaturation?: string;
  receivedVentilatorySupport?: string;
  receivedBPSupport?: string;
  anyInternationalTravel?: string;
  travelDestination?: string;
  isClientHealthCareWorker?: string;
  hadCovidExposure?: string;
  mentalStatusOnAdmission?: string;
  hasPneumonia?: string;
  isARDS?: string;
  isPatientHospitalized?: string;
  otherComorbiditiesConditions?: string;
  otherRespiratoryIllness?: string;

  notificationDate: string;
  icuAdmissionDate: string;
  dateFirstPositive: string;
  dateHospitalized: string;
}

export interface TypeCovidError {
  sourceOfAlert?: string;
  otherCovidSymptom?: string;
  otherExposureRisk?: string;
  isICUAdmitted?: string;
  isOnOxygen?: string;
  oxygenSaturation?: string;
  receivedVentilatorySupport?: string;
  receivedBPSupport?: string;
  anyInternationalTravel?: string;
  travelDestination?: string;
  isClientHealthCareWorker?: string;
  hadCovidExposure?: string;
  mentalStatusOnAdmission?: string;
  hasPneumonia?: string;
  isARDS?: string;
  isPatientHospitalized?: string;
  otherComorbiditiesConditions?: string;
  otherRespiratoryIllness?: string;
  notificationDate?: string;
  icuAdmissionDate?: string;
  dateFirstPositive?: string;
  dateHospitalized?: string;
}
