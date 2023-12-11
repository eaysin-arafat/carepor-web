import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// EnumRoute  (FluidInputs)

// ENUM TYPE
// export type Type = TypeAPIEnum;

// DATA TYPE
export type TypeFluids = TypeAPIObject & {
  recordDate: string;
  doctorsOrder: string;
};

// TypeFluidIntakes in data table and swagger as /fluid-inputs (.next)
export type TypeFluidInputs = Omit<
  TypeAPIObject,
  "clientId" | "createdBy" | "modifiedBy" | "createdIn"
> & {
  fluidId: "041b710a-840d-43c6-8df4-25816f9096be";
  intakeTime: "06:30:00";
  intakeType: "tyeu";
  intakeAmount: 5625;
  route: 1;
};
export type TypeFluidOutputs = TypeAPIObject & {
  outputTime: string; // "15:45:00";
  outputType: string;
  outputAmount: string | number;
  route: string | number;
  fluidId: string;
};

/*
*** Fluids
InteractionId

RecordDate
DoctorsOrder

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

/*
*** FluidInputs
InteractionId

IntakeTime
IntakeType
IntakeAmount
Route
FluidId

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
/*
*** FluidOutputs
InteractionId

OutputTime
OutputType
OutputAmount
Route
FluidId

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
