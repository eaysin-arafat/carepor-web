import { TypeAPIObject } from ".";
import { TypeUser } from "./user-accounts";

// Data Type
export type TypeFacilityAccess = Omit<TypeAPIObject, "interactionId"> & {
  oid?: string;
  dateRequested?: string;
  dateApproved?: string;
  isApproved?: true;
  isIgnored?: true;
  forgotPassword?: true;
  userAccountId?: string;
  userAccount?: TypeUser;
  facilityId?: number;
  facility?: {};
  moduleAccesses?: [];
};
export type TypeFacilityToken = {
  facilityId: number;
  facilityName: string;
};
