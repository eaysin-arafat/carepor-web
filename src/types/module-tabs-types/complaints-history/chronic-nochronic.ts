import { TypeAPIEnum, TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
//  EnumConditionType
//  EnumCertainty

// ENUM TYPE
// NTGLevelOneDiagnoses
export type TypeNTGLevelOneEnum = TypeAPIEnum;
// NTGLevelTwoDiagnoses
export type TypeNTGLevelTwoEnum = TypeAPIEnum & {
  ntgLevelOneId: string;
};
// ntgLevelThreeDiagnoses
export type TypeNTGLevelThreeEnum = TypeAPIEnum & {
  clinicalFeatures?: string;
  recommendedInvestigations?: string;
  investigationNotes?: string;
  treatmentNotes?: string;
  pharmacy?: string;
  complications?: string;
  prevention?: string | null;
  ntgLevelTwoId?: string;
};

// ICDDiagnosis
export type TypeICDEnum = TypeAPIEnum & {
  icdCode?: string;
  parentId?: string | number;
  icpC2Id?: string | number;
};

// export type TypeICPC2DescriptionsEnum = TypeAPIEnum & {
//   anatomicAxisId: string;
//   pathologyAxisId: string;
// };

// Districts

// DATA TYPE
export type TypeConditions = TypeAPIObject & {
  conditionType: string | number;
  dateDiagnosed: string;
  dateResolved?: string;
  isOngoing?: string | boolean;
  certainty?: string | number;
  comments?: string;
  ntgId?: string | number;
  icdId?: string | number;
};

/**
InteractionId

ConditionType
DateDiagnosed
DateResolved
IsOngoing
Certainty
Comments
NTGId
ICDId

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
