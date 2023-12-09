import { TypeAPIEnum, TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumInformantRelationship
// EnumWhereDeathOccured

// ENUM TYPE
export type TypeAnatomicAxiEnum = TypeAPIEnum;
export type TypePathologyAxisesEnum = TypeAPIEnum;
export type TypeICPC2DescriptionsEnum = TypeAPIEnum & {
  anatomicAxisId: string;
  pathologyAxisId: string;
};
export type TypeICDDiagnosisEnum = TypeAPIEnum & {
  icdCode?: string;
  parentId?: string | number;
  icpC2Id?: string | number;
};

// Districts

// DATA TYPE
export type TypeDeathCauses = TypeAPIObject & {
  causeType: string | number;
  icpC2Id: string | number;
  icD11Id: string | number;
  deathRecordId: string;
};
export type TypeDeathRecords = TypeAPIObject & {
  informantFirstName: string;
  informantSurname: string;

  informantNickname?: string;
  informantRelationship: string | number;
  informantOtherRelationship?: string;
  informantCity?: string;
  informantStreetNo?: string;
  informantPOBox?: string;
  informantLandmark?: string;
  informantLandlineCountryCode?: string;
  informantLandline?: string;
  informantCellphoneCountryCode?: string;
  informantCellphone?: string;
  dateOfDeath: string;
  ageOfDeceased: string;
  whereDeathOccured: string | number;
  districtOfDeath: string | number;
  deathCause: number[];
  icpC2ID: string | number;
  icD11ID: string | number;
  causeType: string | number;
};

/**
InteractionId

InformantFirstName
InformantSurname
InformantNickname
InformantRelationship
InformantOtherRelationship
InformantCity
InformantStreetNo
InformantPOBox
InformantLandmark
InformantLandlineCountryCode
InformantLandline
InformantCellphoneCountryCode
InformantCellphone
DateOfDeath
AgeOfDeceased
WhereDeathOccured
DistrictOfDeath

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
