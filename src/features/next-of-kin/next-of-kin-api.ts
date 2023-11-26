import { API } from "../API/API";

const nextOfKinApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create next of kin
     * @param body
     * @returns NextOfKin
     */
    createNextOfKin: builder.mutation({
      query: (body) => ({
        url: "/next-of-kin",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read next of kins
     * @returns NextOfKin[]
     */
    readNextOfKins: builder.query({
      query: () => ({
        url: "/next-of-kins",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read next of kin by key
     * @param key
     * @returns NextOfKin
     */
    readNextOfKinByKey: builder.query({
      query: (key) => ({
        url: `/next-of-kin/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update next of kin
     * @param key
     * @param body
     * @returns NextOfKin
     */
    updateNextOfKin: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/next-of-kin/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete next of kin
     * @param key
     * @returns NextOfKin
     */
    deleteNextOfKin: builder.mutation({
      query: (key) => ({
        url: `/next-of-kin/${key}`,
        method: "DELETE",
      }),
    }),

    /**
     * @description This endpoint is used to read next of kin by client
     * @param clientId
     * @returns NextOfKin
     */
    readNextOfKinByClient: builder.query({
      query: (clientId) => ({
        url: `/next-of-kin/byclient/${clientId}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

// export hooks
export const {
  useCreateNextOfKinMutation,
  useReadNextOfKinsQuery,
  useReadNextOfKinByKeyQuery,
  useUpdateNextOfKinMutation,
  useDeleteNextOfKinMutation,
  useReadNextOfKinByClientQuery,
} = nextOfKinApi;

// export endpoints
export const { endpoints: nextOfKinApiEndpoints } = nextOfKinApi;

// export api
export default nextOfKinApi;
