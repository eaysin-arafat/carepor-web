import { API } from "../API/API";

const identifiedConstitutionalSymptomApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createIdentifiedConstitutionalSymptom: builder.mutation({
      query: (body) => ({
        url: `/identified-constitutional-symptom`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["tbConstitutionalSymptoms"],
    }),
    readIdentifiedConstitutionalSymptoms: builder.query({
      query: () => `/identified-constitutional-symptoms`,
    }),
    readIdentifiedConstitutionalSymptomByKey: builder.query({
      query: (key) => `/identified-constitutional-symptom/key/${key}`,
    }),
    readIdentifiedConstitutionalSymptomsByClient: builder.query({
      query: (clientId) =>
        `/identified-constitutional-symptoms-by-client/${clientId}`,
      providesTags: ["IdentifiedConstitutionalSymptoms"],
    }),
    readIIdentifiedTbConstitutionalSymptomsByClient: builder.query({
      query: (clientId) =>
        `/identified-tb-constitutional-symptoms-by-client/${clientId}`,
      providesTags: ["tbConstitutionalSymptoms"],
    }),
    readIdentifiedConstitutionalSymptomsByEncounterId: builder.query({
      query: (encounterId) =>
        `/identified-constitutional-symptoms-encounter/${encounterId}`,
    }),
    updateIdentifiedConstitutionalSymptom: builder.mutation({
      query: ({ key, body }) => ({
        url: `/identified-constitutional-symptom/${key}`,
        method: "PUT",
        body,
      }),
    }),
    deleteIdentifiedConstitutionalSymptom: builder.mutation({
      query: (key) => ({
        url: `/identified-constitutional-symptom/${key}`,
        method: "DELETE",
      }),
    }),
    removeIdentifiedConstitutionalSymptom: builder.mutation({
      query: (key) => ({
        url: `/identified-constitutional-symptom/remove/${key}`,
        method: "DELETE",
      }),
    }),
    //PEP
    createPEPIdentifiedConstitutionalSymptom: builder.mutation({
      query: (body) => ({
        url: `/pep-identified-constitutional-symptom`,
        method: "POST",
        body,
      }),
    }),
    readPEPIdentifiedConstitutionalSymptoms: builder.query({
      query: () => `/pep-identified-constitutional-symptoms`,
    }),
    readPEPIdentifiedConstitutionalSymptomByKey: builder.query({
      query: (key) => `/pep-identified-constitutional-symptom/key/${key}`,
    }),
    readPEPIdentifiedConstitutionalSymptomsByClient: builder.query({
      query: (clientId) =>
        `/pep-identified-constitutional-symptoms-by-client/${clientId}`,
      providesTags: ["PEPIdentifiedConstitutionalSymptoms"],
    }),
    readPEPIdentifiedConstitutionalSymptomsByEncounterId: builder.query({
      query: (encounterId) =>
        `/pep-identified-constitutional-symptoms-encounter/${encounterId}`,
    }),
    updatePEPIdentifiedConstitutionalSymptom: builder.mutation({
      query: ({ key, body }) => ({
        url: `/pep-identified-constitutional-symptom/${key}`,
        method: "PUT",
        body,
      }),
    }),
    deletePEPIdentifiedConstitutionalSymptom: builder.mutation({
      query: (key) => ({
        url: `/pep-identified-constitutional-symptom/${key}`,
        method: "DELETE",
      }),
    }),
    removePEPIdentifiedConstitutionalSymptom: builder.mutation({
      query: (key) => ({
        url: `/pep-identified-constitutional-symptom/remove/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useReadIIdentifiedTbConstitutionalSymptomsByClientQuery,
  useCreateIdentifiedConstitutionalSymptomMutation,
  useReadIdentifiedConstitutionalSymptomsQuery,
  useReadIdentifiedConstitutionalSymptomByKeyQuery,
  useReadIdentifiedConstitutionalSymptomsByClientQuery,
  useReadIdentifiedConstitutionalSymptomsByEncounterIdQuery,
  useUpdateIdentifiedConstitutionalSymptomMutation,
  useDeleteIdentifiedConstitutionalSymptomMutation,
  useRemoveIdentifiedConstitutionalSymptomMutation,
  //PEP
  useCreatePEPIdentifiedConstitutionalSymptomMutation,
  useReadPEPIdentifiedConstitutionalSymptomsQuery,
  useReadPEPIdentifiedConstitutionalSymptomByKeyQuery,
  useReadPEPIdentifiedConstitutionalSymptomsByClientQuery,
  useReadPEPIdentifiedConstitutionalSymptomsByEncounterIdQuery,
  useUpdatePEPIdentifiedConstitutionalSymptomMutation,
  useDeletePEPIdentifiedConstitutionalSymptomMutation,
  useRemovePEPIdentifiedConstitutionalSymptomMutation,
} = identifiedConstitutionalSymptomApi;

export const { endpoints: identifiedConstitutionalSymptomApiEndpoints } =
  identifiedConstitutionalSymptomApi;

export default identifiedConstitutionalSymptomApi;
