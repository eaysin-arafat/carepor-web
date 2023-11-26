import { API } from "../API/API";

const recoveryRequestApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createRecoveryRequest: builder.mutation({
      query: (body) => ({
        url: "/recovery-request",
        method: "POST",
        body,
      }),
    }),
    readRecoveryRequests: builder.query({
      query: () => ({
        url: "/recovery-requests",
        method: "GET",
      }),
    }),
    readRecoveryRequestByKey: builder.query({
      query: (key) => ({
        url: `/recovery-request/key/${key}`,
        method: "GET",
      }),
    }),
    readRecoveryRequestByDate: builder.query({
      query: (date) => ({
        url: `/recovery-request/by-date/${date}`,
        method: "GET",
      }),
    }),
    updateRecoveryRequest: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/recovery-request/${key}`,
        method: "PUT",
        body,
      }),
    }),
    deleteRecoveryRequest: builder.mutation({
      query: ({ key }) => ({
        url: `/recovery-request/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export api hooks for usage in components
export const {
  useCreateRecoveryRequestMutation,
  useReadRecoveryRequestsQuery,
  useReadRecoveryRequestByKeyQuery,
  useReadRecoveryRequestByDateQuery,
  useUpdateRecoveryRequestMutation,
  useDeleteRecoveryRequestMutation,
} = recoveryRequestApi;

// export endpoints
export const { endpoints: recoveryRequestEndpoints } = recoveryRequestApi;

// export api reducer for usage in store configuration
export default recoveryRequestApi;
