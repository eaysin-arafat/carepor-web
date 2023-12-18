import { API } from "../API/API";

const referralsApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create referral
     * @param body
     * @returns Referral
     */
    createReferral: builder.mutation({
      query: (body) => ({
        url: "/referral-module",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read referrals
     * @returns Referral[]
     */
    readReferrals: builder.query({
      query: () => ({
        url: "/referral-modules",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read referral by key
     * @param key
     * @returns Referral
     */

    readReferralByKey: builder.query({
      query: (key) => ({
        url: `/referral-module/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read referral by client
     * @param clientId
     * @returns Referral
     */

    readReferralByClient: builder.query({
      query: (clientId) => ({
        url: `/referral-module/by-client/${clientId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read referral by encounter
     * @param encounterId
     * @returns Referral
     */

    readReferralByEncounter: builder.query({
      query: (encounterId) => ({
        url: `/referral-module/by-encounter/${encounterId}`,
        method: "GET",
      }),
    }),

    /**
     * ==================================== Referral ====================================
     * @description This endpoint is used to update referral
     *
     */

    updateReferral: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/referral-module/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete referral
     * @param key
     * @returns Referral
     */

    deleteReferral: builder.mutation({
      query: (key) => ({
        url: `/referral-module/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateReferralMutation,
  useReadReferralsQuery,
  useReadReferralByKeyQuery,
  useReadReferralByClientQuery,
  useReadReferralByEncounterQuery,
  useUpdateReferralMutation,
  useDeleteReferralMutation,
} = referralsApi;

export const { endpoints: referralsApiEndpoints } = referralsApi;

export default referralsApi;
