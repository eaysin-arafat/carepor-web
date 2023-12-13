import {
  TypeCompositeTestEnum,
  TypeMeasuringUnitsEnum,
  TypeResultOptionsEnum,
  TypeTestItemsEnum,
  TypeTestSubtypesEnum,
  TypeTestTypesEnum,
  TypeTestsEnum,
} from "@/types/module-types/investigation";
import { API } from "../API/API";

const investigationApi = API.injectEndpoints({
  endpoints: (builder) => ({
    readTests: builder.query<TypeTestsEnum[], undefined>({
      query: () => {
        return {
          url: `/tests`,
          method: "GET",
        };
      },
    }),
    readTestType: builder.query<TypeTestTypesEnum[], undefined>({
      query: () => {
        return {
          url: `/test-types`,
          method: "GET",
        };
      },
    }),
    readTestSubType: builder.query<TypeTestSubtypesEnum[], undefined>({
      query: () => {
        return {
          url: `/test-subtypes`,
          method: "GET",
        };
      },
    }),
    readCompositeTests: builder.query<TypeCompositeTestEnum[], undefined>({
      query: () => {
        return {
          url: `/composite-tests`,
          method: "GET",
        };
      },
    }),
    readTestItems: builder.query<TypeTestItemsEnum[], undefined>({
      query: () => {
        return {
          url: `/test-items`,
          method: "GET",
        };
      },
    }),
    readResultOptions: builder.query<TypeResultOptionsEnum[], undefined>({
      query: () => {
        return {
          url: `/result-options`,
          method: "GET",
        };
      },
    }),
    readMeasuringUnits: builder.query<TypeMeasuringUnitsEnum[], undefined>({
      query: () => {
        return {
          url: `/measuring-units`,
          method: "GET",
        };
      },
    }),
  }),
});

// export hooks
export const {
  useReadTestsQuery,
  useReadCompositeTestsQuery,
  useReadMeasuringUnitsQuery,
  useReadResultOptionsQuery,
  useReadTestItemsQuery,
} = investigationApi;

// export endpoints
export const { endpoints: interactionApiEndpoints } = investigationApi;
