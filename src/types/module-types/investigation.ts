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
export type TypeTestSubtypesEnum = TypeAPIEnum & {
  testType: TypeAPIEnum;
  testTypeId: number | string;
};

export type TypeTestsEnum = TypeAPIEnum & {
  title: string;
  lonic: string;
  testSubtype: TypeTestSubtypesEnum;
  resultType: number;
  subtypeId: number;
  testType: TypeAPIEnum;
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
  isResultReceived: boolean;
  testId: number;
};

//  read api data

export type TypeInvestigation = TypeAPIObject & {
  orderDate?: string;
  orderNumber?: string;
  quantity?: string | number;
  sampleQuantity: string | number;
  piority?: string | number;
  additionalComment?: string;
  isResultReceived?: string | boolean;
  clinicianId?: string;
  testId?: string | number;
  test?: TypeTestsEnum;
  clientId?: string;
  // client?: Client;

  sampleCollectionDate?: string;
  // results?: TypeTestResults[];
  // custom
  testName: string;
  client: {
    surname: string;
    firstName: string;
  };
};

export type TypeInvestigationForm = {
  orderDate?: string;
  orderNumber?: string;
  quantity?: string;
  sampleQuantity?: string;
  piority?: string;
  additionalComment?: string;
  isResultReceived?: string;
  clinicianId?: string;
  testId?: string;
  testType?: string;
  clientId?: string;
  subTestType?: string;
  sampleCollectionDate?: string;
  imagingTestDetails?: string;
  addButton?: boolean | string;
  testID?: string;
  testName?: string;
  testTypeId?: string;
  subtypeId?: string;
  interactionID?: string;
  testSubtypeId?: string;
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
  compositeName?: string;
  testNameDetails?: string;
  imagingTestDetails: string;
};

export type TypeInvestigationByClient = {
  investigation?: TypeInvestigation[] | null;
  investigationWithOutComposite?: withoutCompositeInvestigation[] | null;
  investigationWithComposite?: withCompositeInvestigation[] | null;
  mergeInvestigations?: withCompositeInvestigation[] | null;
  encounterID: string;
  clientID: string;
  dateCreated: string;
  encounterDate: string;
  createdIn: number;
  createdBy: string;
};
