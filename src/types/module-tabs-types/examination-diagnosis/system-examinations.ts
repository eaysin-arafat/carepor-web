import { TypeAPIObject } from "@/types";

// ENUM TYPE
// PhysicalSystem enum
// Already  on system extension
// export type TypePhysicalSystemsEnum = TypeAPIEnum;

// DATA TYPE
// Submit Array type Data
export type TypeSystemExaminations = TypeAPIObject & {
  note: string;
  physicalSystemId: string; // ***
};
