import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators

// ENUM TYPE
// export type TypeEnum = TypeAPIEnum;

// DATA TYPE
export type TypeContraceptiveHistories = TypeAPIObject & {
  contraceptiveId: string;
  gynObsHistoryId: string;
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
