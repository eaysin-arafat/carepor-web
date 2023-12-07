import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumGeneralCondition
// EnumScoring
// EnumPresentNotPresent
// EnumAlbumin
// EnumPallor
// EnumGrade & clubbing
// EnumPresentNotPresent >> Jaundice, Cyanosis, OrtolaniSign,
// EnumNormalAbnormal >> UrineOutput, Fontanelles, Skull, Eyes, Mouth, Chest,Back, Limbs, Genitals, SymmetricalMoroReaction, MoroReaction
// EnumYesNo >> BreastFeeding, PassedMeconium, UrinePassed, ChildCardIssued,VitaminAgiven, FatherLiving, MotherLiving, BreastFeeding, InvolutionOfUterus
// EnumPueperalCondition
// EnumLochia
// EnumPerineumCondition >> PerineumCondition & EpisiotomyCondition
// Enum

// ENUM TYPE
// export type TypeEnum = TypeAPIEnum;

// DATA TYPE
export type TypeGynObsHistories = TypeAPIObject & {
  generalCondition?: string | number;
  nutritionalStatus?: string;
  jvp?: string;
  hydrationStatus?: string;
  glucose?: string | boolean;
  scoring?: string | number;
  varicoseVein?: string | number;
  albumin?: string | number;
  urineOutput?: string | number;
  feeding?: string | number;
  passedMeconium?: string | number;
  urinePassed?: string | number;
  childCardIssued?: string | number;
  vitaminAGiven?: string | number;
  fatherLiving?: string | number;
  motherLiving?: string | number;
  pallor?: string | number;
  edema?: string | number;
  clubbing?: string | number;
  jaundice?: string | number;
  cyanosis?: string | number;
  hb?: string;
  puerperalCondition?: string | number;
  breastFeeding?: string | number;
  involutionOfUterus?: string | number;
  lochia?: string | number;
  perineumCondition?: string | number;
  episiotomyCondition?: string | number;
  additionalNotes?: string;
  fontanelles?: string | number;
  skull?: string | number;
  eyes?: string | number;
  mouth?: string | number;
  chest?: string | number;
  back?: string | number;
  limbs?: string | number;
  genitals?: string | number;
  symmetricalMoroReaction?: string | number;
  moroReaction?: string | number;
  isGoodGraspReflex?: string | boolean;
  isMeconiumPassed?: string | boolean;
  isGoodHeadControl?: string | boolean;
  ortolaniSign?: string | number;
  rootingReflex?: string;
  suckingReflex?: string;
  palmarReflex?: string;
  plantarGrasp?: string;
  steppingReflex?: string;
  galantReflex?: string;
  rootingRefelx?: string;
};

/**
InteractionId

GeneralCondition
NutritionalStatus
JVP
HydrationStatus
Glucose
Scoring
VaricoseVein
Albumin
Pallor
Edema
Clubbing
Jaundice
Cyanosis
UrineOutput
Feeding
PassedMeconium
UrinePassed
ChildCardIssued
VitaminAgiven
FatherLiving
MotherLiving
Hb
PuerperalCondition
BreastFeeding
InvolutionOfUterus
Lochia
PerineumCondition
EpisiotomyCondition
Fontanelles
Skull
Eyes
AdditionalNotes
Mouth
Chest
Back
Limbs
Genitals
SymmetricalMoroReaction
MoroReaction
IsGoodGraspReflex
IsMeconiumPassed
IsGoodHeadControl
OrtolaniSign
RootingRefelx
SuckingReflex
PalmarReflex
PlantarGrasp
SteppingReflex
GalantReflex

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
