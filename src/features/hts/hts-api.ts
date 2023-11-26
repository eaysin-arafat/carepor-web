import { API } from "../API/API";

const htsApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create hts
     * @param body
     * @returns HTS
     */
    createHTS: builder.mutation({
      query: (body) => ({
        url: "/hts",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read hts
     * @param clientId
     * @returns HTS[]
     */
    readHTS: builder.query({
      query: (clientId) => ({
        url: `/hts/readhts/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read hts by key
     * @param key
     * @returns HTS
     */
    readHTSByKey: builder.query({
      query: (key) => ({
        url: `/hts/hts/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read hts by client
     * @param clientId
     * @returns HTS
     */
    readHTSByClient: builder.query({
      query: (clientId) => ({
        url: `/hts/hts/hts-by-client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read latest hts by client
     * @param clientId
     * @returns HTS
     */
    readLatestHTSByClient: builder.query({
      query: (clientId) => ({
        url: `/hts/hts/Latest-hts-by-client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update hts
     * @param key
     * @param body
     * @returns HTS
     */
    updateHTS: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/hts/hts/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete hts
     * @param key
     * @returns HTS
     */
    deleteHTS: builder.mutation({
      query: (key) => ({
        url: `/hts/hts/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateHTSMutation,
  useReadHTSQuery,
  useReadHTSByKeyQuery,
  useReadHTSByClientQuery,
  useReadLatestHTSByClientQuery,
  useUpdateHTSMutation,
  useDeleteHTSMutation,
} = htsApi;

// export endpoints
export const { endpoints: htsApiEndpoints } = htsApi;

// export api
export default htsApi;
