import { TypeAPIObject } from "@/types";

// *** Static enums reference from enumerators
// Enum

// ENUM TYPE
// export type Type = TypeAPIEnum;

// DATA TYPE
export type TypeNursingPlans = TypeAPIObject & {
  planningDate: string;
  planningTime: string; // "06:00:00";
  problem: string;
  objective: string;
  nursingDiagnosis: string;
  nursingIntervention: string;
  evaluation: string;
};

/**
InteractionId

PlanningDate
PlanningTime
Problem
Objective
NursingDiagnosis
NursingIntervention
Evaluation

ClientId
EncounterId
CreatedIn
CreatedBy
DateCreated
ModifiedIn
DateModified
ModifiedBy
IsDeleted
IsSynced
 */
