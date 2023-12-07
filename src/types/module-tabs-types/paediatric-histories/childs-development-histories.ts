import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumFeedingCode

// ENUM TYPE
// export type TypeEnum = TypeAPIEnum;

// DATA TYPE
export type TypeChildDevelopmentHistories = TypeAPIObject & {
  feedingHistory: string;

  socialSmile: number;
  headHolding: number;
  turnTowardSoundOrigin: number;
  graspToy: number;
  sitting: number;
  standing: number;
  walking: number;
  talking: number;
  followObjectsWithEyes: number;
  rollsOver: number;
  babbles: number;
  takesObjectsToMouth: number;
  repeatsSyllables: number;
  movesObjects: number;
  playsPeekaBoo: number;
  respondsToOwnName: number;
  takesStepsWithSupport: number;
  picksUpSmallObjects: number;
  imitatesSimpleGestures: number;
  saysTwoToThreeWords: number;
  drinksFromCup: number;
  saysSevenToTenWords: number;
  pointsToBodyParts: number;
  startsToRun: number;
  pointsPictureOnRequest: number;
  sings: number;
  buildTowerWithBox: number;
  jumpsAndRun: number;
  beginsToDressAndUndress: number;
  groupsSimilarObjects: number;
  playsWithOtherChildren: number;
  saysFirstNameAndShortStory: number;
};

/**
InteractionId

FeedingHistory
SocialSmile
HeadHolding
TurnTowardSoundOrigin
GraspToy
Sitting
Standing
Walking
Talking
FollowObjectsWithEyes
RollsOver
Babbles
TakesObjectsToMouth
RepeatsSyllables
MovesObjects
PlaysPeekaBoo
RespondsToOwnName
TakesStepsWithSupport
PicksUpSmallObjects
ImitatesSimpleGestures
SaysTwoToThreeWords
DrinksFromCup
SaysSevenToTenWords
PointsToBodyParts
StartsToRun
PointsPictureOnRequest
Sings
BuildTowerWithBox
JumpsAndRun
BeginsToDressAndUndress
GroupsSimilarObjects
PlaysWithOtherChildren
SaysFirstNameAndShortStory

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
