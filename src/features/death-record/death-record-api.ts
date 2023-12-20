import { API } from "../API/API";

const deathRecordApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createDeathRecord: builder.mutation({
      query: (body) => ({
        url: "death-record",
        method: "POST",
        body,
      }),
    }),
    readDeathRecords: builder.query({
      query: () => ({
        url: "death-records",
        method: "GET",
      }),
    }),
    readDeathRecordByKey: builder.query({
      query: (key) => ({
        url: `death-record/key/${key}`,
        method: "GET",
      }),
    }),
    readDeathRecordByClient: builder.query({
      query: (clientId) => ({
        url: `death-record/by-client/${clientId}`,
        method: "GET",
      }),
    }),
    updateDeathRecord: builder.mutation({
      query: ({ key, body }) => ({
        url: `death-record/${key}`,
        method: "PUT",
        body,
      }),
    }),
    deleteDeathRecord: builder.mutation({
      query: (key) => ({
        url: `death-record/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateDeathRecordMutation,
  useReadDeathRecordsQuery,
  useReadDeathRecordByKeyQuery,
  useReadDeathRecordByClientQuery,
  useUpdateDeathRecordMutation,
  useDeleteDeathRecordMutation,
} = deathRecordApi;

export const { endpoints: deathRecordApiEndpoints } = deathRecordApi;

export default deathRecordApi;
