import { API } from "../API/API";

const identifiedTbSymptomApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createIdentifiedTbSymptom: builder.mutation({
      query: (body) => ({
        url: `/identified-tb-symptom`,
        method: "POST",
        body,
      }),
    }),
    readIdentifiedTbSymptoms: builder.query({
      query: () => `/identified-tb-symptoms`,
    }),
    readIdentifiedTbSymptomByKey: builder.query({
      query: (key) => `/identified-tb-symptom/key/${key}`,
    }),
    readIdentifiedTbSymptomByEncounterId: builder.query({
      query: (encounterId) =>
        `/identified-tb-symptom-by-encounterId/${encounterId}`,
    }),
    updateIdentifiedTbSymptom: builder.mutation({
      query: ({ key, body }) => ({
        url: `/identified-tb-symptom/${key}`,
        method: "PUT",
        body,
      }),
    }),
    deleteIdentifiedTbSymptom: builder.mutation({
      query: (key) => ({
        url: `/identified-tb-symptom/${key}`,
        method: "DELETE",
      }),
    }),
    removeIdentifiedTbSymptom: builder.mutation({
      query: (key) => ({
        url: `/identified-tb-symptom/remove/${key}`,
        method: "DELETE",
      }),
    }),
    readIdentifiedTbSymptomByClientId: builder.query({
      query: (clientId) => `/identified-tb-symptom-by-client/${clientId}`,
      providesTags: ["IdentifiedTbSymptoms"],
    }),
    createPepIdentifiedTbSymptom: builder.mutation({
      query: (body) => ({
        url: `/pep-identified-tb-symptom`,
        method: "POST",
        body,
      }),
    }),
    readPepIdentifiedTbSymptoms: builder.query({
      query: () => `/pep-identified-tb-symptoms`,
    }),
    readPepIdentifiedTbSymptomByKey: builder.query({
      query: (key) => `/pep-identified-tb-symptom/key/${key}`,
    }),
    readPepIdentifiedTbSymptomByEncounterId: builder.query({
      query: (encounterId) =>
        `/pep-identified-tb-symptom-by-encounter/${encounterId}`,
    }),
    updatePepIdentifiedTbSymptom: builder.mutation({
      query: ({ key, body }) => ({
        url: `/pep-identified-tb-symptom/${key}`,
        method: "PUT",
        body,
      }),
    }),
    deletePepIdentifiedTbSymptom: builder.mutation({
      query: (key) => ({
        url: `/pep-identified-tb-symptom/${key}`,
        method: "DELETE",
      }),
    }),
    removePepIdentifiedTbSymptom: builder.mutation({
      query: (key) => ({
        url: `/pep-identified-tb-symptom/remove/${key}`,
        method: "DELETE",
      }),
    }),
    readPepIdentifiedTbSymptomByClientId: builder.query({
      query: (clientId) => `/pep-identified-tb-symptom-by-client/${clientId}`,
    }),
  }),
});

export const {
  useCreateIdentifiedTbSymptomMutation,
  useReadIdentifiedTbSymptomsQuery,
  useReadIdentifiedTbSymptomByKeyQuery,
  useReadIdentifiedTbSymptomByEncounterIdQuery,
  useUpdateIdentifiedTbSymptomMutation,
  useDeleteIdentifiedTbSymptomMutation,
  useRemoveIdentifiedTbSymptomMutation,
  useReadIdentifiedTbSymptomByClientIdQuery,
  useCreatePepIdentifiedTbSymptomMutation,
  useReadPepIdentifiedTbSymptomsQuery,
  useReadPepIdentifiedTbSymptomByKeyQuery,
  useReadPepIdentifiedTbSymptomByEncounterIdQuery,
  useUpdatePepIdentifiedTbSymptomMutation,
  useDeletePepIdentifiedTbSymptomMutation,
  useRemovePepIdentifiedTbSymptomMutation,
  useReadPepIdentifiedTbSymptomByClientIdQuery,
} = identifiedTbSymptomApi;

export const { endpoints: identifiedTbSymptomApiEndpoints } =
  identifiedTbSymptomApi;

export default identifiedTbSymptomApi;
