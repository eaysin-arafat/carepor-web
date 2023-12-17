import { API } from "../API/API";

export interface LevelOneDiagnosis {
  oid: number;
  description: string;
  ntgLevelTwoDiagnoses: LevelTwoDiagnosis[];
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  modifiedIn: number;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

export interface LevelTwoDiagnosis {
  oid: number;
  description: string;
  ntgLevelOneId: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  modifiedIn: number;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

export interface LevelThreeDiagnosis {
  oid: number;
  description: string;
  icdId: number;
  clinicalFeatures: string;
  recommendedInvestigations: string;
  treatmentNotes: string;
  complications: string;
  ntgLevelTwoId: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  modifiedIn: number;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

export interface ICDDiagnosis {
  oid: number;
  code: string;
  description: string;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  modifiedIn: number;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

export interface TransformDiagnosis {
  value: number;
  label: string;
}

const diagnosisApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create diagnosis
     * @param body
     * @returns Diagnosis
     */
    createDiagnosis: builder.mutation({
      query: (body) => ({
        url: "/diagnosis",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Diagnoses"],
    }),

    /**
     * @description This endpoint is used to read diagnoses
     * @returns Diagnosis[]
     */
    readDiagnoses: builder.query({
      query: () => ({
        url: "/diagnoses",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read diagnoses by client
     * @param clientId
     * @returns Diagnosis[]
     */
    readDiagnosesByClient: builder.query({
      query: (clientId) => ({
        url: `/diagnoses-diagnoses-by-client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read diagnoses latest by client
     * @param clientId
     * @returns Diagnosis[]
     */
    readDiagnosesLatestByClient: builder.query({
      query: (clientId) => ({
        url: `/diagnoses-diagnoses-latest-by-client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read diagnoses last by client
     * @param clientId
     * @returns Diagnosis[]
     */
    readDiagnosesLastByClient: builder.query({
      query: (clientId) => ({
        url: `/diagnoses-diagnoses-last-by-client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read diagnoses by encounter
     * @param encounterId
     * @returns Diagnosis[]
     */
    readDiagnosesByEncounter: builder.query({
      query: (encounterId) => ({
        url: `/diagnoses-diagnoses-by-encounter/${encounterId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read diagnoses by last encounter
     * @param encounterId
     * @returns Diagnosis[]
     */
    readDiagnosesByLastEncounter: builder.query({
      query: (encounterId) => ({
        url: `/diagnoses-diagnoses-by-encounter/${encounterId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read diagnosis by key
     * @param key
     * @returns Diagnosis
     */

    readDiagnosisByKey: builder.query({
      query: (key) => ({
        url: `/diagnosis/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read diagnosis by client
     * @param clientId
     * @returns Diagnosis
     */

    readDiagnosisByClient: builder.query({
      query: (clientId) => ({
        url: `/diagnosis/latest-diagnosis-by-client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read last encounter diagnosis by client
     * @param clientId
     * @returns Diagnosis
     */

    readLastEncounterDiagnosisByClient: builder.query({
      query: (clientId) => ({
        url: `/diagnosis/last-encounter/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read diagnosis by surgeryId
     * @param key
     * @returns Diagnosis
     */

    readDiagnosisBySurgeryId: builder.query({
      query: (key) => ({
        url: `/diagnosis/surgery/key/${key}`,
        method: "GET",
      }),
    }),

    LoadNTGTreeDiagnosis: builder.query({
      query: () => ({
        url: `/diagnosis/loadNTGTree`,
        method: "GET",
      }),
    }),

    LoadNTGLevel1Diagnosis: builder.query<LevelOneDiagnosis[], null>({
      query: () => ({
        url: `/diagnosis/load-ntg-level-1`,
        method: "GET",
      }),
    }),

    LoadNTGLevel2Diagnosis: builder.query<LevelTwoDiagnosis[], null>({
      query: () => ({
        url: `/diagnosis/load-ntg-level-2`,
        method: "GET",
      }),
    }),

    LoadNTGLevel3Diagnosis: builder.query<LevelThreeDiagnosis[], null>({
      query: () => ({
        url: `/diagnosis/load-ntg-level-3`,
        method: "GET",
      }),
    }),

    LoadDiagnosisCodesTreeDiagnosis: builder.query({
      query: () => ({
        url: `/diagnosis/loadDiagnosisCodesTree`,
        method: "GET",
      }),
    }),

    loadICDDiagnosis: builder.query<TransformDiagnosis[], null>({
      query: () => ({
        url: `/icd-diagnoses`,
        method: "GET",
      }),

      transformResponse: (response: ICDDiagnosis[]) => {
        return response.map((item: ICDDiagnosis) => {
          return {
            value: item.oid,
            label: item.description,
          };
        });
      },
    }),

    /**
     * @description This endpoint is used to update diagnosis
     * @param key
     * @param body
     * @returns Diagnosis
     */

    updateDiagnosis: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/diagnosis/${key}`,
        method: "PUT",
        body,
      }),
    }),

    deleteDiagnosis: builder.mutation({
      query: (key) => ({
        url: `/diagnosis/${key}`,
        method: "DELETE",
      }),
    }),

    removeDiagnosis: builder.mutation({
      query: (key) => ({
        url: `/diagnosis/remove/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateDiagnosisMutation,
  useReadDiagnosesQuery,
  useReadDiagnosesByClientQuery,
  useReadDiagnosesLatestByClientQuery,
  useReadDiagnosesLastByClientQuery,
  useReadDiagnosesByEncounterQuery,
  useReadDiagnosesByLastEncounterQuery,
  useReadDiagnosisByKeyQuery,
  useReadDiagnosisByClientQuery,
  useReadLastEncounterDiagnosisByClientQuery,
  useReadDiagnosisBySurgeryIdQuery,
  useLoadNTGTreeDiagnosisQuery,
  useLoadNTGLevel1DiagnosisQuery,
  useLoadNTGLevel2DiagnosisQuery,
  useLoadNTGLevel3DiagnosisQuery,
  useLoadDiagnosisCodesTreeDiagnosisQuery,
  useUpdateDiagnosisMutation,
  useDeleteDiagnosisMutation,
  useRemoveDiagnosisMutation,
  useLoadICDDiagnosisQuery,
} = diagnosisApi;

export const { endpoints: diagnosisApiEndpoints } = diagnosisApi;

export default diagnosisApi;
