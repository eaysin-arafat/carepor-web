import { Client } from "@/interface/clients";

// ENUM TYPE
// export type TypeVaccineTypesEnum = TypeAPIEnum;
export type TypeVaccineTypesEnum = {
  oid: number;
  description: string;
  createdIn: number;
  dateCreated: string;
  dateModified: string;
  isDeleted: boolean;
  isSynced: boolean;
};

export type TypeVaccinesEnum = {
  oid: number;
  description: string;
  vaccineTypeId: number;
  vaccineType?: TypeVaccineTypesEnum;
  dateCreated: string;
  dateModified: string;
  isDeleted: boolean;
  isSynced: boolean;
};
export type TypeVaccineDosesEnum = {
  oid: number;
  description: string;
  vaccineId: number;
  vaccine: TypeVaccinesEnum;
  dateCreated: string;
  dateModified: string;
  isDeleted: boolean;
  isSynced: boolean;
};

// Covax by client
// __baseApi__/covax/by-client/:clientId
export type TypeCovax = {
  interactionId: string;
  covaxNumber: string;
  wasCovaxOffered: boolean;
  doesClientGetVaccinatedToday: boolean;
  isPregnantOrLactating: boolean;
  hasCancer: boolean;
  hasDiabetes: boolean;
  hasHeartDisease: boolean;
  hasHyperTension: boolean;
  hasHIV: boolean;
  otherComorbidities: string;
  clientId: string;
  encounterId: string;
  encounterType: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
  encounterDate: string;
  otherReasonClientRefusedForVaccination: string;
  reasonClientRefusedForVaccination: string;
};

// __baseApi__/immunization-record/by-client/:clientId

export type TypeAdverseEvent = {
  interactionId: string;
  aefiDate: string;
  swelling: true;
  joint: true;
  malaise: boolean;
  bodyAches: true;
  fever: boolean;
  allergicReaction: boolean;
  otherAdverseEvent: boolean;
  otherAEFI: string;
  immunizationId: string;
  encounterId: string;
  encounterType: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
};

// convert as type
export type TypeImmunizationVaccine = {
  interactionId: string;
  dateGiven: string;
  batchNumber: string;
  doseId: number;
  vaccineDose: TypeVaccineDosesEnum;
  clientId: string;
  client?: Client;
  adverseEvents: TypeAdverseEvent[];
  encounterId: string;
  encounterType: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
};

// form state type
// export type TypeCovaxForm = {
//   covaxNumber?: string;
//   wasCovaxOffered?: boolean;
//   doesClientGetVaccinatedToday?: string;
//   reasonClientRefusedForVaccination?: string;
//   otherReasonClientRefusedForVaccination?: string;
//   isPregnantOrLactating?: boolean;
//   hasCancer?: boolean;
//   hasDiabetes?: boolean;
//   hasHeartDisease?: boolean;
//   hasHyperTension?: boolean;
//   hasHIV?: boolean;
//   otherComorbidities: string;
// };
export type TypeCovaxForm = {
  covaxNumber: string;
  wasCovaxOffered: string;
  doesClientGetVaccinatedToday: string;
  reasonClientRefusedForVaccination: string;
  otherReasonClientRefusedForVaccination: string;
  otherComorbidities: string;
  // CheckBoxType
  isPregnantOrLactating: boolean;
  hasCancer: boolean;
  hasDiabetes: boolean;
  hasHeartDisease: boolean;
  hasHyperTension: boolean;
  hasHIV: boolean;
};
export type TypeCovaxFormError = {
  covaxNumber?: string;
  wasCovaxOffered?: string;
  doesClientGetVaccinatedToday?: string;
  reasonClientRefusedForVaccination?: string;
  otherReasonClientRefusedForVaccination?: string;
  // CheckBoxType
  isPregnantOrLactating?: string;
  hasCancer?: string;
  hasDiabetes?: string;
  hasHeartDisease?: string;
  hasHyperTension?: string;
  hasHIV?: string;
  otherComorbidities?: string;
};

// TypeImmunizationVaccineForm
export type TypeVaccineForm = {
  vaccineTypeId?: string;
  vaccineId?: string;
  doseId?: string;
  batchNumber?: string;
  dateGiven?: string;
};

// Type TypeAdverseForm
export type TypeAdverseForm = {
  aefiDate: string;
  // CheckBoxType
  swelling: boolean;
  joint: boolean;
  malaise: boolean;
  bodyAches: boolean;
  fever: boolean;
  allergicReaction: boolean;
  otherAdverseEvent: boolean;

  otherAEFI: string;
};
export type TypeAdverseFormError = {
  aefiDate?: string;

  swelling?: boolean;
  joint?: boolean;
  malaise?: boolean;
  bodyAches?: boolean;
  fever?: boolean;
  allergicReaction?: boolean;
  otherAdverseEvent?: boolean;

  otherAEFI?: string;
};
