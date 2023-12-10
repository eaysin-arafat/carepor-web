export type FormSectionType = {
  children: JSX.Element;
  titleText?: string;
  title?: string;
  titleClass?: string;
  boxClass?: string;
  noteText?: string;
  titleBorder?: boolean;
  noteClass?: string;
  border?: boolean;
  sectionErrorMsg?: string;
  sectionErrorClass?: string;
};

export interface LoginDataType {
  username: string;
  password: string;
  rememberMe: boolean;
}

export type TypeAPIObject = {
  interactionId?: string;
  encounterId?: string;
  encounterType?: number;
  createdIn?: number;
  dateCreated?: string;
  clinicianId?: string;
  clientId?: string;
  createdBy?: string;
  modifiedIn?: number;
  dateModified?: string;
  modifiedBy?: string;
  isDeleted?: boolean;
  isSynced?: boolean;
};

export type TypeAPIEnum = {
  oid: number;
  description: number;
  isDeleted?: boolean;
};

export type TypeFacilityToken = {
  facilityId: number;
  facilityName: string;
};
