import { API } from "../API/API";

const recoveryRequestApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create recovery request
     * @param body
     * @returns RecoveryRequest
     */
    createRecoveryRequest: builder.mutation({
      query: (body) => ({
        url: "/recovery-request",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read recovery requests
     * @returns RecoveryRequest[]
     */
    readRecoveryRequests: builder.query({
      query: () => ({
        url: "/recovery-requests",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read recovery request by key
     * @param key
     * @returns RecoveryRequest
     */
    readRecoveryRequestByKey: builder.query({
      query: (key) => ({
        url: `/recovery-request/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read recovery request by date
     * @param date
     * @returns RecoveryRequest
     */
    readRecoveryRequestByDate: builder.query({
      query: (date) => ({
        url: `/recovery-request/by-date/${date}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update recovery request
     * @param key
     * @param body
     * @returns RecoveryRequest
     */
    updateRecoveryRequest: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/recovery-request/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete recovery request
     * @param key
     * @returns RecoveryRequest
     */
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
