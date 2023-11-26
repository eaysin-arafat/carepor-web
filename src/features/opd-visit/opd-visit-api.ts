import { API } from "../API/API";

const opdVisitApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create opd visit
     * @param body
     * @returns OPDVisit
     */
    createOPDVisit: builder.mutation({
      query: (body) => ({
        url: "/opd-visit",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to create opd visit history
     * @param body
     * @returns OPDVisitHistory
     */
    createOPDVisitHistory: builder.mutation({
      query: (body) => ({
        url: "/opd-visit-history",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read opd visits
     * @returns OPDVisit[]
     */
    readOPDVisits: builder.query({
      query: () => ({
        url: "/opd-visits",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read opd visits by date
     * @param date
     * @returns OPDVisit[]
     */
    readOPDVisitsByDate: builder.query({
      query: (date) => ({
        url: `/opd-visits-by-date/${date}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read opd visit by key
     * @param key
     * @returns OPDVisit
     */
    readOPDVisitByKey: builder.query({
      query: (key) => ({
        url: `/opd-visit/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read medical history
     * @param clientId
     * @returns MedicalHistory
     */
    readMedicalHistory: builder.query({
      query: (clientId) => ({
        url: `/medical-history-medical-encounter/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read opd visit by client id and visit date
     * @param clientId
     * @param visitDate
     * @returns OPDVisit
     */
    readOPDVisitByclientIdAndVisitDate: builder.query({
      query: (clientId, visitDate) => ({
        url: `/opd-visit/clientId-visitdate`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update opd visit
     * @param key
     * @param body
     * @returns OPDVisit
     */
    updateOPDVisit: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/opd-visit/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete opd visit
     * @param key
     * @returns OPDVisit
     */
    deleteOPDVisit: builder.mutation({
      query: (key) => ({
        url: `/opd-visit/key/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateOPDVisitMutation,
  useCreateOPDVisitHistoryMutation,
  useReadOPDVisitsQuery,
  useReadOPDVisitsByDateQuery,
  useReadOPDVisitByKeyQuery,
  useReadMedicalHistoryQuery,
  useReadOPDVisitByclientIdAndVisitDateQuery,
  useUpdateOPDVisitMutation,
  useDeleteOPDVisitMutation,
} = opdVisitApi;

// export endpoints
export const { endpoints: opdVisitApiEndpoints } = opdVisitApi;
