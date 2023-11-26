import { API } from "../API/API";

const hivTestingReasonApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create hiv testing reason
     * @param body
     * @returns HIVTestingReason
     */
    createHIVTestingReason: builder.mutation({
      query: (body) => ({
        url: "hiv-testing-reason",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read hiv testing reasons
     * @returns HIVTestingReason[]
     */
    readHIVTestingReasons: builder.query({
      query: () => ({
        url: "hiv-testing-reasons",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read hiv testing reason by key
     * @param key
     * @returns HIVTestingReason
     */
    readHIVTestingReasonByKey: builder.query({
      query: (key) => ({
        url: `hiv-testing-reason/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update hiv testing reason
     * @param key
     * @param body
     * @returns HIVTestingReason
     */
    updateHIVTestingReason: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `hiv-testing-reason/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete hiv testing reason
     * @param key
     * @returns HIVTestingReason
     */
    deleteHIVTestingReason: builder.mutation({
      query: (key) => ({
        url: `hiv-testing-reason/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateHIVTestingReasonMutation,
  useReadHIVTestingReasonsQuery,
  useReadHIVTestingReasonByKeyQuery,
  useUpdateHIVTestingReasonMutation,
  useDeleteHIVTestingReasonMutation,
} = hivTestingReasonApi;

// export endpoints
export const { endpoints: hivTestingReasonApiEndpoints } = hivTestingReasonApi;
