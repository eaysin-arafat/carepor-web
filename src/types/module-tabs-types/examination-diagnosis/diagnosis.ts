import { TypeAPIEnum, TypeAPIObject } from "@/types";
import { TypeNTGLevelThreeEnum } from "../complaints-history/chronic-nochronic";

// *** Static enums reference from enumerators
//  EnumDiagnosisType

// ENUM TYPE
// NTGLevelOneDiagnoses >> Same as chronic non-chronic
// export type TypeNTGLevelOneEnum = TypeAPIEnum;
// NTGLevelTwoDiagnoses >> Same as chronic non-chronic
// export type TypeNTGLevelTwoEnum = TypeAPIEnum & {
//   ntgLevelOneId: string;
// };
// ntgLevelThreeDiagnoses >> Same as chronic non-chronic
// type TypeNTGLevelThreeEnum = TypeAPIEnum & {
//   clinicalFeatures?: string;
//   recommendedInvestigations?: string;
//   investigationNotes?: string;
//   treatmentNotes?: string;
//   pharmacy?: string;
//   complications?: string;
//   prevention?: string | null;
//   ntgLevelTwoId?: string;
// };

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


// DATA TYPE
export type TypeDiagnosis = TypeAPIObject & {
  diagnosisType: string | number;
  ntgId?: string | number;
  icdId?: string | number;
  ntgLevelThreeDiagnosis?: TypeNTGLevelThreeEnum;
  isSelectedForSurgery: string | boolean;
  surgeryId: string;
};

/**
InteractionId

DiagnosisType
IsSelectedForSurgery
NTGId
ICDId
SurgeryId

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
