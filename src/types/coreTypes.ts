// use manage facility hook
export type facilityStateType = {
  facility: string;
  district: string;
  province: string;
};
export type facilityStateErrorType = {
  facility?: string;
  district?: string;
  province?: string;
};

export type ProvinceType = {
  oid: string;
  description: string;
  provinceCode: string;
  dateCreated: string;
  dateModified: string;
  isDeleted: false;
  isSynced: false;
};

export type DistrictType = {
  readonly oid: number | string;
  readonly description: string;
  readonly districtCode: string | number;
  readonly provinceId: string | number;
};
export type FacilityType = {
  oid: string | number;
  description?: string;
  facilityMasterCode?: string | number;
  hmisCode?: string | number;
  longitude?: string;
  latitude?: string;
  location?: string | number;
  facilityType?: string | number;
  ownership?: string | number;
  isPrivateFacility?: boolean;
  isLive?: boolean;
  isDFZ?: boolean;
  districtId?: string | number;
  createdIn?: string;
  dateCreated?: string;
  createdBy?: string;
  modifiedIn?: string | number;
  dateModified?: string;
  modifiedBy?: string;
  isDeleted?: boolean;
  isSynced?: boolean;
};

export type FacilityToken = {
  facilityId: number;
  facilityName: string;
};
