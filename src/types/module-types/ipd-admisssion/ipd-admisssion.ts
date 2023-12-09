import { TypeAPIEnum } from "@/types";

// ENUM TYPE
export type TypeDepartments = Omit<TypeAPIEnum, "description"> & {
  departmentName: string;
  facilityId: string | number;
};
export type TypeFirms = Omit<TypeAPIEnum, ""> & {
  departmentId: string | number;
};
export type TypeWards = Omit<TypeAPIEnum, "description"> & {
  wardName: string;
  firmId: string | number;
};
export type TypeBeds = Omit<TypeAPIEnum, ""> & {
  wardId: string | number;
};
