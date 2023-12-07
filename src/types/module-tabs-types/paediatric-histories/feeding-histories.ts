import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumFeedingCode

// ENUM TYPE
// export type TypeEnum = TypeAPIEnum;

// DATA TYPE
export type TypeFeedingHistories = TypeAPIObject & {
  feedingCode: string;
  otherFeedingCode: string;
  comments: string;
};

/**
InteractionId

FeedingCode
OtherFeedingCode
Comments

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
