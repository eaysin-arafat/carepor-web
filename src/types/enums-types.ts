export type ApiEnumsType = {
  oid: string;
  description: string;
};
export type districtType = ApiEnumsType & {
  provinceId?: string;
};
export type facilityType = ApiEnumsType & {
  provinceId?: string;
  districtId?: string;
};
