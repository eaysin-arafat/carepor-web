import { TypeAPIEnum, TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumYesNo >> PreviouslyGotPregnant, CesareanHistory, RecentClientGivenBirth, Postpartum, MiscarriageStatus, MiscarriageWithinFourWeeks, PostAbortionSepsis,
// EnumYesNoUnknown >> EnumIsBreastFeeding , EnumIsPregnant, EnumIsCaCxScreened, IsChildTestedForHIV, IsScreenedForSyphilis, HaveTreatedWithBenzathinePenicillin,
// CaCxResult >> EnumCaCxResult
// BreastFeedingChoice >> EnumBreastFeedingChoice
// BreastFeedingType >> EnumBreastFeedingType

// ENUM TYPE
export type TypeContraceptivesEnum = TypeAPIEnum;
export type TypeCaCxScreeningMethodsEnum = TypeAPIEnum;

// DATA TYPE
export type TypeContraceptiveHistories = TypeAPIObject & {
  contraceptiveId: string;
  gynObsHistoryId: string;
};
export type TypeGynObsHistories = TypeAPIObject & {
  menstrualHistory?: string;
  isBreastFeeding?: string;
  lnmp?: string;
  isPregnant?: string;
  obstetricsHistoryNote?: string;
  gestationalAge?: string | number;
  edd?: string;
  isCaCxScreened?: string;
  caCxLastScreened?: string;
  caCxResult?: string;
  isChildTestedForHIV?: string;
  isScreenedForSyphilis?: string;
  haveTreatedWithBenzathinePenicillin?: string;
  breastFeedingChoice?: string;
  breastFeedingType?: string;
  BreastFeedingNote?: string;
  isClientOnFP?: string | boolean;
  isClientNeedFP?: string | boolean;
  currentFP?: string;
  hasCounselled?: string | boolean;
  contraceptiveGiven?: string;
  previousSexualHistory?: string | boolean;
  previouslyGotPregnant?: string;
  totalNumberOfPregnancy?: string | number;
  totalBirthGiven?: string | number;
  tliveChildren?: string | number;
  cesareanHistory?: string;
  recentClientGivenBirth?: string;
  dateOfDelivery?: string;
  postpartum?: string;
  lastDeliveryTime?: string;
  miscarriageStatus?: string;
  miscarriageWithinFourWeeks?: string;
  postAbortionSepsis?: string;
  caCxScreeningMethodId?: string | number;
};

/**
 * InteractionId

MenstrualHistory
IsBreastFeeding
LNMP
IsPregnant
ObstetricsHistoryNote
GestationalAge
EDD
IsCaCxScreened
CaCxLastScreened
CaCxResult
IsChildTestedForHIV
IsScreenedForSyphilis
HaveTreatedWithBenzathinePenicillin
BreastFeedingChoice
BreastFeedingType
BreastFeedingNote
IsClientOnFP
IsClientNeedFP
CurrentFP
HasCounselled
ContraceptiveGiven
PreviousSexualHistory
PreviouslyGotPregnant
TotalNumberOfPregnancy
TotalBirthGiven
AliveChildren
CesareanHistory
RecentClientGivenBirth
DateOfDelivery
Postpartum
LastDeliveryTime
MiscarriageStatus
MiscarriageWithinFourWeeks
PostAbortionSepsis
CaCxScreeningMethodId

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
