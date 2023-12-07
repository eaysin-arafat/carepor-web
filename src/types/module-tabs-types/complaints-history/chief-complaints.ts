import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumHIVTestResult
// EnumRecencyType or EnumChildExposureStatus
// EnumPositiveNegative
// EnumTBScreening

// ENUM TYPE
// ----------------

// DATA TYPE
export type TypeChiefComplaints = TypeAPIObject & {
  chiefComplaints: string;
  historyOfChiefComplaint: string;
  hivStatus: 2;
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
