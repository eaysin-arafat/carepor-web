import { API } from "../API/API";

export interface ServicePoint {
  oid: number;
  description: string;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  modifiedIn: number;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

const servicePointsApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create service point
     * @param body
     * @returns ServicePoint
     */
    createServicePoint: builder.mutation({
      query: (body) => ({
        url: "/service-point",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read service points
     * @returns ServicePoint[]
     */
    readServicePoints: builder.query<ServicePoint[], null>({
      query: () => ({
        url: "/service-points",
        method: "GET",
      }),
      keepUnusedDataFor: 60 * 60 * 24, // 24 hours
      providesTags: ["ServicePoints"],
    }),

    /**
     * @description This endpoint is used to read service point by key
     * @param key
     * @returns ServicePoint
     */
    readServicePointByKey: builder.query({
      query: (key) => ({
        url: `/service-point/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update service point
     * @param key
     * @param body
     * @returns ServicePoint
     */
    updateServicePoint: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/service-point/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete service point
     * @param key
     * @returns ServicePoint
     */
    deleteServicePoint: builder.mutation({
      query: (key) => ({
        url: `/service-point/${key}`,
        method: "DELETE",
      }),
    }),

    /**
     * @description This endpoint is used to read service point by facility
     * @param facilityId
     * @returns ServicePoint
     */
    readServicePointByFacility: builder.query({
      query: (facilityId) => ({
        url: `/service-point/facilityId/${facilityId}`,
        method: "GET",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateServicePointMutation,
  useReadServicePointsQuery,
  useReadServicePointByKeyQuery,
  useUpdateServicePointMutation,
  useDeleteServicePointMutation,
  useReadServicePointByFacilityQuery,
} = servicePointsApi;

// export endpoints
export const { endpoints: servicePointsApiEndpoints } = servicePointsApi;

// export api
export default servicePointsApi;
