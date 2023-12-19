import { API } from "../API/API";
import { ServicePoint } from "../service-points/service-points-api";

export interface Referral {
  interactionId: string;
  reasonForReferral: string;
  referralType: number;
  otherFacility: string;
  servicePointId: number;
  servicePoint: ServicePoint;
  referredFacilityId: number;
  receivingFacilityId: number;
  // receivingFacility: FacilityType;
  clientId: string;
  // identifiedReferralReasons: [];
  referredFacility: string;
  encounterId: string;
  encounterType: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
  encounterDate: string;
}

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
      invalidatesTags: ["Referrals"],
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

    readReferralByClient: builder.query<Referral[], string>({
      query: (clientId) => ({
        url: `/referral-module/by-client/${clientId}`,
        method: "GET",
      }),
      providesTags: ["Referrals"],
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
      invalidatesTags: ["Referrals"],
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
