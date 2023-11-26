import { API } from "../API/API";

const htsReferredToApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create hts referred to
     * @param body
     * @returns HTSReferredTo
     */
    createHTSReferredTo: builder.mutation({
      query: (body) => ({
        url: "/hts-referred-to",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read hts referred to
     * @returns HTSReferredTo[]
     */
    readHTSReferredTo: builder.query({
      query: () => ({
        url: "/hts-referred-to",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read hts referred to by key
     * @param key
     * @returns HTSReferredTo
     */
    readHTSReferredToByKey: builder.query({
      query: (key) => ({
        url: `/hts-referred-to/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read hts referred to by hts
     * @param HTSId
     * @returns HTSReferredTo
     */
    readHTSReferredToByHTS: builder.query({
      query: (HTSId) => ({
        url: `/hts-referred-to/hts-referred-to-by-hts/${HTSId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update hts referred to
     * @param key
     * @param body
     * @returns HTSReferredTo
     */
    updateHTSReferredTo: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/hts-referred-to/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete hts referred to
     * @param key
     * @returns HTSReferredTo
     */
    deleteHTSReferredTo: builder.mutation({
      query: (key) => ({
        url: `/hts-referred-to/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateHTSReferredToMutation,
  useReadHTSReferredToQuery,
  useReadHTSReferredToByKeyQuery,
  useReadHTSReferredToByHTSQuery,
  useUpdateHTSReferredToMutation,
  useDeleteHTSReferredToMutation,
} = htsReferredToApi;

// export endpoints
export const { endpoints: htsReferredApiEndpoints } = htsReferredToApi;

// export api
export default htsReferredToApi;
