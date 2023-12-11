import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumEyeScore
// EnumVerbalScore
// EnumMotorScore

// ENUM TYPE
// export type TypeEnum = TypeAPIEnum;

// DATA TYPE
export type TypeContraceptiveHistories = TypeAPIObject & {
  eyeScore: string | number;
  verbalScore: string | number;
  motorScale: string | number;
  glasgowComaScore: string;
  result: string;
  rightPupilsLightReactionSize?: string;
  rightPupilsLightReactionReaction?: string;
  leftPupilsLightReactionSize?: string;
  leftPupilsLightReactionReaction?: string;
};

/**
InteractionId

EyeScore
VerbalScore
MotorScale
GlasgowComaScore
Result
RightPupilsLightReactionSize
RightPupilsLightReactionReaction
LeftPupilsLightReactionSize
LeftPupilsLightReactionReaction

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
