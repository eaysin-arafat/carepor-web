import { Client } from "@/interface/clients";
import { TypeAPIEnum, TypeAPIObject } from "..";

// ENUM TYPE
export type TypeCompositeTestEnum = TypeAPIEnum;

export type TypeTestItemsEnum = TypeAPIEnum & {
  compositeTestId: number;
  testId: number;
};
export type TypeTestTypesEnum = TypeAPIEnum;

export type TypeResultOptionsEnum = TypeAPIEnum & {
  testId: number;
};
export type TypeMeasuringUnitsEnum = TypeAPIEnum & {
  minimumRange: number;
  maximumRange: number;
  testId: number;
};
export type TypeTestSubtypesEnum = TypeAPIEnum;

export type TypeTestsEnum = Omit<TypeAPIEnum, "description"> & {
  title: string;
  lonic: string;
  testSubtype: object;
  resultType: number;
  subtypeId: number;
};

// DATA TYPE
// form data
export type TypeTestResults = TypeAPIObject & {
  resultDate: string;
  resultDescriptive: string;
  resultNumeric: number;
  commentOnResult: string;
  isResultNormal: number;
  measuringUnitId: number;
  investigationId: string;
};
// form data
export type TypeInvestigations = TypeAPIObject & {
  orderDate: string;
  orderNumber: string;
  quantity: string;
  sampleQuantity: string;
  piority: string;
  additionalComment: string;
  isResultReceived: true;
  testId: number;
};

//  read api data

export type TypeInvestigation = TypeAPIObject & {
  orderDate?: string;
  orderNumber?: string;
  quantity: number;
  sampleQuantity: number;
  piority?: number;
  additionalComment: string;
  isResultReceived: boolean;
  clinicianId: string;
  testId: number;
  test?: TypeTestsEnum;
  clientId?: string;
  client?: Client;
  sampleCollectionDate?: string;
  results?: TypeTestResults[];
};

export type TypeInvestigationDashboard = {
  investigations: TypeInvestigation[];
  totalItems: number;
  resultRecievedTotalItems: number;
  pageNumber: number;
  pageSize: number;
};

export type TypeInvestigationDashboardArgs = {
  facilityId: number;
  pageNo: number;
  itemPerPage: number;
  PatientName: string;
  investigationDateSearch: string;
};

export type withoutCompositeInvestigation = Omit<
  TypeInvestigation,
  "interactionId" | "testId" | "clinicianId"
> & {
  interactionID: string;
  testResult: string;
  clinicianID: string;
  testID: number;
};
export type withCompositeInvestigation = withoutCompositeInvestigation & {
  compositeName: string;
};
export type TypeInvestigationByClient = {
  investigation: TypeInvestigation[];
  investigationWithOutComposite: withoutCompositeInvestigation[];
  investigationWithComposite: withCompositeInvestigation[];
  encounterID: string;
  clientID: string;
  dateCreated: string;
  encounterDate: string;
  createdIn: number;
  createdBy: string;
};
