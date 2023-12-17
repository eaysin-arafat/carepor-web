import { API } from "../API/API";

export interface HIVNotTestingReason {
  oid: number;
  description: string;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  modifiedIn: string;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

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
    readHIVNotTestingReasons: builder.query<HIVNotTestingReason[], null>({
      query: () => ({
        url: "hiv-not-testing-reasons",
        method: "GET",
      }),
      keepUnusedDataFor: 60 * 60 * 24, // 24 hours
      providesTags: ["HIVNotTestingReasons"],
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
