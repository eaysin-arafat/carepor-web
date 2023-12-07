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

export type TypeTestsEnum = TypeAPIEnum & {
  title: string;
  lonic: string;
  testSubtype: object;
  resultType: number;
  subtypeId: number;
};

// DATA TYPE
export type TypeTestResults = TypeAPIObject & {
  resultDate: string;
  resultDescriptive: string;
  resultNumeric: number;
  commentOnResult: string;
  isResultNormal: number;
  measuringUnitId: number;
  investigationId: string;
};

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
