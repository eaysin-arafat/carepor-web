import { API } from "../API/API";

export interface TreatmentPlan {
  interactionId: string;
  treatmentPlans: string;
  surgeryId: string;
  clientId: string;
  encounterId: string;
  encounterType: number;
  isDeleted: boolean;
  isSynced: boolean;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
}

const treatmentPlanApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createTreatmentPlan: builder.mutation({
      query: (body) => ({
        url: "treatment-plan",
        method: "POST",
        body,
      }),
      invalidatesTags: ["TreatmentPlans"],
    }),
    readTreatmentPlans: builder.query({
      query: () => ({
        url: "treatment-plans",
        method: "GET",
      }),
    }),

    readTreatmentPlanByKey: builder.query({
      query: (key) => ({
        url: `treatment-plan/key/${key}`,
        method: "GET",
      }),
    }),

    readTreatmentPlanByClient: builder.query<TreatmentPlan[], string>({
      query: (clientId) => ({
        url: `treatment-plan/${clientId}`,
        method: "GET",
      }),
      providesTags: ["TreatmentPlans"],
    }),

    readLastEncounterTreatmentPlanByClient: builder.query({
      query: (clientId) => ({
        url: `treatment-plan/last-encounter/${clientId}`,
        method: "GET",
      }),
    }),

    readLatestTreatmentPlanByClient: builder.query({
      query: (clientId) => ({
        url: `latest-treatment-plan/${clientId}`,
        method: "GET",
      }),
    }),

    readLatestTreatmentPlanByClientForFluid: builder.query({
      query: (clientId) => ({
        url: `latest-treatment-plan/for-fluid/${clientId}`,
        method: "GET",
      }),
    }),

    readTreatmentPlanBySurgeryId: builder.query({
      query: (surgeryId) => ({
        url: `treatment-plan/surgery/${surgeryId}`,
        method: "GET",
      }),
    }),

    readCompleteTreatmentPlanByEncounterId: builder.query({
      query: (encounterId) => ({
        url: `complete-treatment-plan/${encounterId}`,
        method: "GET",
      }),
    }),

    updateTreatmentPlan: builder.mutation({
      query: ({ key, body }) => ({
        url: `treatment-plan/${key}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["TreatmentPlans"],
    }),

    deleteTreatmentPlan: builder.mutation({
      query: (key) => ({
        url: `treatment-plan/${key}`,
        method: "DELETE",
      }),
    }),

    //PEP TreatmentPlan
    createPEPTreatmentPlan: builder.mutation({
      query: (body) => ({
        url: "pep-treatment-plan",
        method: "POST",
        body,
      }),
    }),

    readPEPTreatmentPlans: builder.query({
      query: () => ({
        url: "pep-treatment-plans",
        method: "GET",
      }),
    }),

    readPEPTreatmentPlanByKey: builder.query({
      query: (key) => ({
        url: `pep-treatment-plan/key/${key}`,
        method: "GET",
      }),
    }),

    readPEPTreatmentPlanByClient: builder.query({
      query: (clientId) => ({
        url: `pep-treatment-plan-by-client/${clientId}`,
        method: "GET",
      }),
    }),

    readPEPCompleteTreatmentPlanByEncounter: builder.query({
      query: (encounterId) => ({
        url: `pep-complete-treatment-plan/by-encounter/${encounterId}`,
        method: "GET",
      }),
    }),

    readPEPCompleteTreatmentPlanByEncounterId: builder.query({
      query: (encounterId) => ({
        url: `pep-complete-treatmentplan/${encounterId}`,
        method: "GET",
      }),
    }),

    readPrEPCompleteTreatmentPlanByEncounterId: builder.query({
      query: (encounterId) => ({
        url: `prep-complete-treatmentplan/${encounterId}`,
        method: "GET",
      }),
    }),

    updatePEPTreatmentPlan: builder.mutation({
      query: ({ key, body }) => ({
        url: `pep-treatment-plan/${key}`,
        method: "PUT",
        body,
      }),
    }),

    deletePEPTreatmentPlan: builder.mutation({
      query: (key) => ({
        url: `pep-treatment-plan/${key}`,
        method: "DELETE",
      }),
    }),

    //PrEP TreatmentPlan

    createPrEPTreatmentPlan: builder.mutation({
      query: (body) => ({
        url: "prep-treatment-plan",
        method: "POST",
        body,
      }),
    }),

    readPrEPTreatmentPlans: builder.query({
      query: () => ({
        url: "prep-treatment-plans",
        method: "GET",
      }),
    }),

    readPrEPTreatmentPlanByKey: builder.query({
      query: (key) => ({
        url: `prep-treatment-plan/key/${key}`,
        method: "GET",
      }),
    }),

    readPrEPTreatmentPlanByClient: builder.query({
      query: (clientId) => ({
        url: `prep-treatment-plan-by-client/${clientId}`,
        method: "GET",
      }),
    }),

    readPrEPCompleteTreatmentPlanByEncounter: builder.query({
      query: (encounterId) => ({
        url: `prep-complete-treatment-plan/by-encounter/${encounterId}`,
        method: "GET",
      }),
    }),

    updatePrEPTreatmentPlan: builder.mutation({
      query: ({ key, body }) => ({
        url: `prep-treatment-plan/${key}`,
        method: "PUT",
        body,
      }),
    }),

    deletePrEPTreatmentPlan: builder.mutation({
      query: (key) => ({
        url: `prep-treatment-plan/${key}`,
        method: "DELETE",
      }),
    }),

    //IPD TreatmentPlan

    createIPDTreatmentPlan: builder.mutation({
      query: (body) => ({
        url: "ipd-treatment-plan",
        method: "POST",
        body,
      }),
    }),

    updateIPDTreatmentPlan: builder.mutation({
      query: ({ key, body }) => ({
        url: `ipd-treatment-plan/${key}`,
        method: "PUT",
        body,
      }),
    }),

    deleteIPDTreatmentPlan: builder.mutation({
      query: (key) => ({
        url: `ipd-treatment-plan/${key}`,
        method: "DELETE",
      }),
    }),

    readCompleteIPDHistoryDtoByEncounterId: builder.query({
      query: (encounterId) => ({
        url: `ipd-complete-treatment-plan/${encounterId}`,
        method: "GET",
      }),
    }),

    //Nursing TreatmentPlan

    createNursingTreatmentPlan: builder.mutation({
      query: (body) => ({
        url: "nursing-treatment-plan",
        method: "POST",
        body,
      }),
    }),

    readNursingTreatmentPlans: builder.query({
      query: () => ({
        url: "nursing-treatment-plans",
        method: "GET",
      }),
    }),

    readNursingTreatmentPlanByKey: builder.query({
      query: (key) => ({
        url: `nursing-treatment-plan/key/${key}`,
        method: "GET",
      }),
    }),

    readNursingTreatmentPlanByClient: builder.query({
      query: (clientId) => ({
        url: `nursing-treatment-plan/${clientId}`,
        method: "GET",
      }),
    }),

    readLatestNursingTreatmentPlanByClient: builder.query({
      query: (clientId) => ({
        url: `latest-nursing-treatment-plan/${clientId}`,
        method: "GET",
      }),
    }),

    readCompleteNursingTreatmentPlanByEncounter: builder.query({
      query: (encounterId) => ({
        url: `complete-nursing-treatment-plan/${encounterId}`,
        method: "GET",
      }),
    }),

    updateNursingTreatmentPlan: builder.mutation({
      query: ({ key, body }) => ({
        url: `nursing-treatment-plan/${key}`,
        method: "PUT",
        body,
      }),
    }),

    deleteNursingTreatmentPlan: builder.mutation({
      query: (key) => ({
        url: `nursing-treatment-plan/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateTreatmentPlanMutation,
  useReadTreatmentPlansQuery,
  useReadTreatmentPlanByKeyQuery,
  useReadTreatmentPlanByClientQuery,
  useReadLastEncounterTreatmentPlanByClientQuery,
  useReadLatestTreatmentPlanByClientQuery,
  useReadLatestTreatmentPlanByClientForFluidQuery,
  useReadTreatmentPlanBySurgeryIdQuery,
  useReadCompleteTreatmentPlanByEncounterIdQuery,
  useUpdateTreatmentPlanMutation,
  useDeleteTreatmentPlanMutation,
  useCreatePEPTreatmentPlanMutation,
  useReadPEPTreatmentPlansQuery,
  useReadPEPTreatmentPlanByKeyQuery,
  useReadPEPTreatmentPlanByClientQuery,
  useReadPEPCompleteTreatmentPlanByEncounterQuery,
  useReadPEPCompleteTreatmentPlanByEncounterIdQuery,
  useReadPrEPCompleteTreatmentPlanByEncounterIdQuery,
  useUpdatePEPTreatmentPlanMutation,
  useDeletePEPTreatmentPlanMutation,
  useCreatePrEPTreatmentPlanMutation,
  useReadPrEPTreatmentPlansQuery,
  useReadPrEPTreatmentPlanByKeyQuery,
  useReadPrEPTreatmentPlanByClientQuery,
  useReadPrEPCompleteTreatmentPlanByEncounterQuery,
  useUpdatePrEPTreatmentPlanMutation,
  useDeletePrEPTreatmentPlanMutation,
  useCreateIPDTreatmentPlanMutation,
  useUpdateIPDTreatmentPlanMutation,
  useDeleteIPDTreatmentPlanMutation,
  useReadCompleteIPDHistoryDtoByEncounterIdQuery,
  useCreateNursingTreatmentPlanMutation,
  useReadNursingTreatmentPlansQuery,
  useReadNursingTreatmentPlanByKeyQuery,
  useReadNursingTreatmentPlanByClientQuery,
  useReadLatestNursingTreatmentPlanByClientQuery,
  useReadCompleteNursingTreatmentPlanByEncounterQuery,
  useUpdateNursingTreatmentPlanMutation,
  useDeleteNursingTreatmentPlanMutation,
} = treatmentPlanApi;

export const { endpoints: treatmentPlanApiEndpoints } = treatmentPlanApi;

export default treatmentPlanApi;
