import { API } from "../API/API";

export interface ICDDiagnosis {
  oid: number;
  icdCode: string;
  description: string;
  parentId: number;
  icpC2Id: number;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

export interface ICDDiagnosisResponse {
  oid: number;
  value: number;
  label: string;
}

const icdDiagnosticApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createICDDiagnosis: builder.mutation({
      query: (body) => ({
        url: "/icd-diagnosis",
        method: "POST",
        body,
      }),
    }),
    readICDDiagnoses: builder.query({
      query: () => ({
        url: "icd-diagnoses",
        method: "GET",
      }),

      // transformResponse: (response) => {
      //     return response.map((icdDiagnosis) => ({
      //     oid: icdDiagnosis?.oid,
      //     value: icdDiagnosis?.oid,
      //     label: icdDiagnosis?.description,
      //     }));
      // },
    }),
    readICDDiagnosesSearch: builder.query({
      query: () => ({
        url: "icd-diagnoses-search",
        method: "GET",
      }),

      // transformResponse: (response: ICDDiagnosis[]) => {
      //     return response.map((icdDiagnosis) => ({
      //     oid: icdDiagnosis?.oid,
      //     value: icdDiagnosis?.oid,
      //     label: icdDiagnosis?.description,
      //     }));
      // },
    }),
    readICDDiagnosisByKey: builder.query({
      query: (key) => ({
        url: `icd-diagnosis/key/${key}`,
        method: "GET",
      }),
    }),
    readICDDiagnosisByICP2: builder.query<ICDDiagnosisResponse[], number>({
      query: (key) => ({
        url: `icd-diagnosis/icp/${key}`,
        method: "GET",
      }),

      transformResponse: (response: ICDDiagnosis[]) => {
        return response.map((icdDiagnosis) => ({
          oid: icdDiagnosis?.oid,
          value: icdDiagnosis?.oid,
          label: icdDiagnosis?.description,
        }));
      },
    }),
    updateICDDiagnosis: builder.mutation({
      query: ({ key, body }) => ({
        url: `icd-diagnosis/${key}`,
        method: "PUT",
        body,
      }),
    }),
    deleteICDDiagnosis: builder.mutation({
      query: (key) => ({
        url: `icd-diagnosis/${key}`,
        method: "DELETE",
      }),
    }),

    //PEPICDDiagnosis
    createPEPICDDiagnosis: builder.mutation({
      query: (body) => ({
        url: "pep-icd-diagnosis",
        method: "POST",
        body,
      }),
    }),
    readPEPICDDiagnoses: builder.query({
      query: () => ({
        url: "pep-icd-diagnoses",
        method: "GET",
      }),

      // transformResponse: (response) => {
      //     return response.map((icdDiagnosis) => ({
      //     oid: icdDiagnosis?.oid,
      //     value: icdDiagnosis?.oid,
      //     label: icdDiagnosis?.description,
      //     }));
    }),

    readPEPICDDiagnosesSearch: builder.query({
      query: () => ({
        url: "pep-icd-diagnoses-search",
        method: "GET",
      }),

      // transformResponse: (response: ICDDiagnosis[]) => {
      //     return response.map((icdDiagnosis) => ({
      //     oid: icdDiagnosis?.oid,
      //     value: icdDiagnosis?.oid,
      //     label: icdDiagnosis?.description,
      //     }));
      // },
    }),

    readPEPICDDiagnosisByKey: builder.query({
      query: (key) => ({
        url: `pep-icd-diagnosis/key/${key}`,
        method: "GET",
      }),
    }),

    readPEPICDDiagnosisByICP2: builder.query({
      query: (key) => ({
        url: `pep-icd-diagnosis/icp/${key}`,
        method: "GET",
      }),
    }),

    updatePEPICDDiagnosis: builder.mutation({
      query: ({ key, body }) => ({
        url: `pep-icd-diagnosis/${key}`,
        method: "PUT",
        body,
      }),
    }),

    deletePEPICDDiagnosis: builder.mutation({
      query: (key) => ({
        url: `pep-icd-diagnosis/${key}`,
        method: "DELETE",
      }),
    }),

    //PrEPICDDiagnosis

    createPrEPICDDiagnosis: builder.mutation({
      query: (body) => ({
        url: "prep-icd-diagnosis",
        method: "POST",
        body,
      }),
    }),

    readPrEPICDDiagnoses: builder.query({
      query: () => ({
        url: "prep-icd-diagnoses",
        method: "GET",
      }),

      // transformResponse: (response) => {
      //     return response.map((icdDiagnosis) => ({
      //     oid: icdDiagnosis?.oid,
      //     value: icdDiagnosis?.oid,
      //     label: icdDiagnosis?.description,
      //     }));
      // },
    }),

    readPrEPICDDiagnosesSearch: builder.query({
      query: () => ({
        url: "prep-icd-diagnoses-search",
        method: "GET",
      }),

      // transformResponse: (response: ICDDiagnosis[]) => {
      //     return response.map((icdDiagnosis) => ({
      //     oid: icdDiagnosis?.oid,
      //     value: icdDiagnosis?.oid,
      //     label: icdDiagnosis?.description,
      //     }));
      // },
    }),

    readPrEPICDDiagnosisByKey: builder.query({
      query: (key) => ({
        url: `prep-icd-diagnosis/key/${key}`,
        method: "GET",
      }),
    }),

    readPrEPICDDiagnosisByICP2: builder.query({
      query: (key) => ({
        url: `prep-icd-diagnosis/icp/${key}`,
        method: "GET",
      }),
    }),

    updatePrEPICDDiagnosis: builder.mutation({
      query: ({ key, body }) => ({
        url: `prep-icd-diagnosis/${key}`,
        method: "PUT",
        body,
      }),
    }),

    deletePrEPICDDiagnosis: builder.mutation({
      query: (key) => ({
        url: `prep-icd-diagnosis/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateICDDiagnosisMutation,
  useReadICDDiagnosesQuery,
  useReadICDDiagnosesSearchQuery,
  useReadICDDiagnosisByKeyQuery,
  useReadICDDiagnosisByICP2Query,
  useUpdateICDDiagnosisMutation,
  useDeleteICDDiagnosisMutation,

  //PEPICDDiagnosis
  useCreatePEPICDDiagnosisMutation,
  useReadPEPICDDiagnosesQuery,
  useReadPEPICDDiagnosesSearchQuery,
  useReadPEPICDDiagnosisByKeyQuery,
  useReadPEPICDDiagnosisByICP2Query,
  useUpdatePEPICDDiagnosisMutation,
  useDeletePEPICDDiagnosisMutation,

  //PrEPICDDiagnosis
  useCreatePrEPICDDiagnosisMutation,
  useReadPrEPICDDiagnosesQuery,
  useReadPrEPICDDiagnosesSearchQuery,
  useReadPrEPICDDiagnosisByKeyQuery,
  useReadPrEPICDDiagnosisByICP2Query,
  useUpdatePrEPICDDiagnosisMutation,
  useDeletePrEPICDDiagnosisMutation,
} = icdDiagnosticApi;

export const { endpoints: icdDiagnosticApiEndpoints } = icdDiagnosticApi;

export default icdDiagnosticApi;
