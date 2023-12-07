import { TypeAPIEnum, TypeAPIObject } from "@/types";

// ENUM TYPE
export type TypeConstitutionalSymptomsEnum = TypeAPIEnum;
export type TypeConstitutionalSymptomsTypeEnum = TypeAPIEnum & {
  constitutionalSymptomId: string;
};
export type TypeTBSymptomsEnum = TypeAPIEnum;

// DATA TYPE
// Submit Array type Data
export type TypeIdentifiedConstitutionalSymptoms = TypeAPIObject & {
  constitutionalSymptomTypeId: string; // ***
};
// Submit Array type Data
export type TypeIdentifiedTbSymptom = TypeAPIObject & {
  tbSymptomId: string; // ***
};
