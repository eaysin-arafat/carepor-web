import { API } from "../API/API";

const hivNotTestingReasonApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create hiv not testing reason
     * @param body
     * @returns HIVNotTestingReason
     */
    createHIVNotTestingReason: builder.mutation({
      query: (body) => ({
        url: "hiv-not-testing-reason",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read hiv not testing reasons
     * @returns HIVNotTestingReason[]
     */
    readHIVNotTestingReasons: builder.query({
      query: () => ({
        url: "hiv-not-testing-reasons",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read hiv not testing reason by key
     * @param key
     * @returns HIVNotTestingReason
     */
    readHIVNotTestingReasonByKey: builder.query({
      query: (key) => ({
        url: `hiv-not-testing-reason/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update hiv not testing reason
     * @param key
     * @param body
     * @returns HIVNotTestingReason
     */
    updateHIVNotTestingReason: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `hiv-not-testing-reason/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete hiv not testing reason
     * @param key
     * @returns HIVNotTestingReason
     */
    deleteHIVNotTestingReason: builder.mutation({
      query: (key) => ({
        url: `hiv-not-testing-reason/${key}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

// export hooks
export const {
  useCreateHIVNotTestingReasonMutation,
  useReadHIVNotTestingReasonsQuery,
  useReadHIVNotTestingReasonByKeyQuery,
  useUpdateHIVNotTestingReasonMutation,
  useDeleteHIVNotTestingReasonMutation,
} = hivNotTestingReasonApi;

// export endpoints
export const { endpoints: hivNotTestingReasonApiEndpoints } =
  hivNotTestingReasonApi;

// export api
export default hivNotTestingReasonApi;
