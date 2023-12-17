import { API } from "../API/API";

const facilityApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create facility
     * @param body
     * @returns Facility
     */
    createFacility: builder.mutation({
      query: (body) => ({
        url: "/facility",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read facilities
     * @returns Facility[]
     */
    readFacilities: builder.query<TypeFacility[], undefined>({
      query: () => ({
        url: "/facilities",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read select facility data
     * @returns Facility[]
     */
    readSelectFacilityData: builder.query({
      query: () => ({
        url: "/select-facility-data",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read facilities with pagging
     * @returns Facility[]
     */
    readFacilitiesWithPagging: builder.query({
      query: () => ({
        url: "/facilities-with-pagging",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read facility by key
     * @param key
     * @returns Facility
     */
    readFacilityByKey: builder.query({
      query: (key) => ({
        url: `/facility/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read active facilities
     * @returns Facility[]
     */
    readActiveFacility: builder.query({
      query: () => ({
        url: "/active-facilities",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read facility by facility name
     * @param facilityName
     * @returns Facility
     */
    readFacilityByFacilityName: builder.query({
      query: (facilityName) => ({
        url: `/facility/facilityname/${facilityName}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update facility
     * @param key
     * @param body
     * @returns Facility
     */
    updateFacility: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/facility/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete facility
     * @param key
     * @returns Facility
     */
    deleteFacility: builder.mutation({
      query: (key) => ({
        url: `/facility/${key}`,
        method: "DELETE",
      }),
    }),

    /**
     * @description This endpoint is used to read facility by district
     * @param districtId
     * @returns Facility
     */
    facilityByDistrict: builder.query({
      query: (districtId) => ({
        url: `/facility/facility-by-district/${districtId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read facility by facility type
     * @param type
     * @returns Facility
     */

    facilityByFacilityType: builder.query({
      query: (type) => ({
        url: `/facility/facility-by-facility-type/${type}`,
        method: "GET",
      }),
    }),
  }),

  overrideExisting: false,
});

// export hooks
export const {
  useCreateFacilityMutation,
  useReadFacilitiesQuery,
  useReadSelectFacilityDataQuery,
  useReadFacilitiesWithPaggingQuery,
  useReadFacilityByKeyQuery,
  useReadActiveFacilityQuery,
  useReadFacilityByFacilityNameQuery,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
  useFacilityByDistrictQuery,
  useFacilityByFacilityTypeQuery,
} = facilityApi;

// export endpoints
export const { endpoints: facilityEndpoints } = facilityApi;

// export api
export default facilityApi;

export type TypeFacility = {
  oid: number;
  description: string;
  facilityMasterCode: string;
  hmisCode: string;
  longitude: string;
  latitude: string;
  location: number;
  facilityType: number;
  ownership: number;
  isPrivateFacility: boolean;
  isLive: boolean;
  isDFZ: boolean;
  districtId: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  modifiedIn: number;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
};
