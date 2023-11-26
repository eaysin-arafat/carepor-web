import { API } from "../API/API";

const chiefComplaintApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create chief complaint
     * @param body
     * @returns ChiefComplaint
     */
    createChiefComplaint: builder.mutation({
      query: (body) => ({
        url: "/chief-complaint",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read chief complaints
     * @returns ChiefComplaint[]
     */
    readChiefComplaints: builder.query({
      query: () => ({
        url: "/chief-complaints",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read chief complaint by key
     * @param key
     * @returns ChiefComplaint
     */
    readChiefComplaintByKey: builder.query({
      query: (key) => ({
        url: `/chief-complaint/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update chief complaint
     * @param key
     * @param body
     * @returns ChiefComplaint
     */
    updateChiefComplaint: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/chief-complaint/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read chief complaint by client
     * @param clientId
     * @returns ChiefComplaint
     */
    readChiefComplaintByClient: builder.query({
      query: (clientId) => ({
        url: `/chief-complaint/by-Client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to delete chief complaint
     * @param key
     * @returns ChiefComplaint
     */
    deleteChiefComplaint: builder.mutation({
      query: (key) => ({
        url: `/chief-complaint/${key}`,
        method: "DELETE",
      }),
    }),

    /**
     * @description This endpoint is used to create pep chief complaint
     * @param body
     * @returns PEPChiefComplaint
     */
    createPEPChiefComplaint: builder.mutation({
      query: (body) => ({
        url: "/pep-chief-complaint",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read pep chief complaints
     * @returns PEPChiefComplaint[]
     */

    readPEPChiefComplaints: builder.query({
      query: () => ({
        url: "/pep-chief-complaints",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read pep chief complaint by key
     * @param key
     * @returns PEPChiefComplaint
     */

    readPEPChiefComplaintByKey: builder.query({
      query: (key) => ({
        url: `/pep-chief-complaint/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update pep chief complaint
     * @param key
     * @param body
     * @returns PEPChiefComplaint
     */

    updatePEPChiefComplaint: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/pep-chief-complaint/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read pep chief complaint by client
     * @param clientId
     * @returns PEPChiefComplaint
     */

    readPEPChiefComplaintByClient: builder.query({
      query: (clientId) => ({
        url: `/pep-chief-complaint/by-Client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to delete pep chief complaint
     * @param key
     * @returns PEPChiefComplaint
     */

    deletePEPChiefComplaint: builder.mutation({
      query: (key) => ({
        url: `/pep-chief-complaint/${key}`,
        method: "DELETE",
      }),
    }),

    /**
     * @description This endpoint is used to create prep chief complaint
     * @param body
     * @returns PrEPChiefComplaint
     */

    createPrEPChiefComplaint: builder.mutation({
      query: (body) => ({
        url: "/prep-chief-complaint",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read prep chief complaints
     * @returns PrEPChiefComplaint[]
     */

    readPrEPChiefComplaints: builder.query({
      query: () => ({
        url: "/prep-chief-complaints",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read prep chief complaint by key
     * @param key
     * @returns PrEPChiefComplaint
     */

    readPrEPChiefComplaintByKey: builder.query({
      query: (key) => ({
        url: `/prep-chief-complaint/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update prep chief complaint
     * @param key
     * @param body
     * @returns PrEPChiefComplaint
     */

    updatePrEPChiefComplaint: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/prep-chief-complaint/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read prep chief complaint by client
     * @param clientId
     * @returns PrEPChiefComplaint
     */

    readPrEPChiefComplaintByClient: builder.query({
      query: (clientId) => ({
        url: `/prep-chief-complaint/by-Client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to delete prep chief complaint
     * @param key
     * @returns PrEPChiefComplaint
     */

    deletePrEPChiefComplaint: builder.mutation({
      query: (key) => ({
        url: `/prep-chief-complaint/${key}`,
        method: "DELETE",
      }),
    }),

    /**
     * @description This endpoint is used to create ipd chief complaint
     * @param body
     * @returns IPDChiefComplaint
     */

    createIPDChiefComplaint: builder.mutation({
      query: (body) => ({
        url: "/ipd-chief-complaint",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to update ipd chief complaint
     * @param key
     * @param body
     * @returns IPDChiefComplaint
     */

    updateIPDChiefComplaint: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/ipd-chief-complaint/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read ipd chief complaint by encounter
     * @param encounterId
     * @returns IPDChiefComplaint
     */

    readIPDChiefComplaintByEncounter: builder.query({
      query: (encounterId) => ({
        url: `/chief-complaint-by-encounter/${encounterId}`,
        method: "GET",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateChiefComplaintMutation,
  useReadChiefComplaintsQuery,
  useReadChiefComplaintByKeyQuery,
  useUpdateChiefComplaintMutation,
  useReadChiefComplaintByClientQuery,
  useDeleteChiefComplaintMutation,
  useCreatePEPChiefComplaintMutation,
  useReadPEPChiefComplaintsQuery,
  useReadPEPChiefComplaintByKeyQuery,
  useUpdatePEPChiefComplaintMutation,
  useReadPEPChiefComplaintByClientQuery,
  useDeletePEPChiefComplaintMutation,
  useCreatePrEPChiefComplaintMutation,
  useReadPrEPChiefComplaintsQuery,
  useReadPrEPChiefComplaintByKeyQuery,
  useUpdatePrEPChiefComplaintMutation,
  useReadPrEPChiefComplaintByClientQuery,
  useDeletePrEPChiefComplaintMutation,
  useCreateIPDChiefComplaintMutation,
  useUpdateIPDChiefComplaintMutation,
  useReadIPDChiefComplaintByEncounterQuery,
} = chiefComplaintApi;

// export endpoints
export const { endpoints: chiefComplaintApiEndpoints } = chiefComplaintApi;

// export api
export default chiefComplaintApi;
