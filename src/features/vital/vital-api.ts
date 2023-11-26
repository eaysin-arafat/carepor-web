import { API } from "../API/API";

const vitalApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create vital
     * @param body
     * @returns Vital
     */
    createVital: builder.mutation({
      query: (body) => ({
        url: "/vital",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read vitals
     * @returns Vital[]
     */
    readVitals: builder.query({
      query: (clientId) => ({
        url: `/vitals/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read vital by key
     * @param key
     * @returns Vital
     */
    readVitalByKey: builder.query({
      query: (key) => ({
        url: `/vital/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read vital by client
     * @param clientId
     * @returns Vital
     */
    readVitalByClient: builder.query({
      query: (clientId) => ({
        url: `/vital/vital-by-client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read latest vital by client
     * @param clientId
     * @returns Vital
     */
    readLatestVitalByClient: builder.query({
      query: (clientId) => ({
        url: `/vital/Latest-vital-by-client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read latest vital by client and encounter type
     * @param clientId
     * @returns Vital
     */
    readLatestVitalByClientAndEncounterType: builder.query({
      query: (clientId) => ({
        url: `/vital/Latest-vital-by-client-encountertype/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update vital
     * @param key
     * @param body
     * @returns Vital
     */
    updateVital: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/vital/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete vital
     * @param key
     * @returns Vital
     */
    deleteVital: builder.mutation({
      query: (key) => ({
        url: `/vital/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateVitalMutation,
  useReadVitalsQuery,
  useReadVitalByKeyQuery,
  useReadVitalByClientQuery,
  useReadLatestVitalByClientQuery,
  useReadLatestVitalByClientAndEncounterTypeQuery,
  useUpdateVitalMutation,
  useDeleteVitalMutation,
} = vitalApi;

// export endpoints
export const { endpoints: vitalApiEndpoints } = vitalApi;

// export api
export default vitalApi;
