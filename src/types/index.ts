import { Client } from "@/interface/clients";

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

export type TypeOpdVisit = {
  oid: string;
  opdVisitDate: string;
  clientId: string;
  client: Client;
  dateCreated: string;
  isDeleted: false;
  isSynced: false;
};
export type TypeOpdVisitFrom = {
  clientId: string;
  type: string;
};
