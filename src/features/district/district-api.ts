import { API } from "../API/API";

const districtApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create district
     * @param body
     * @returns District
     */
    createDistrict: builder.mutation({
      query: (body) => ({
        url: "/district",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read districts
     * @returns District[]
     */
    readDistricts: builder.query({
      query: () => ({
        url: "/districts",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read district by key
     * @param key
     * @returns District
     */
    readDistrictByKey: builder.query({
      query: (key) => ({
        url: `/district/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update district
     * @param key
     * @param body
     * @returns District
     */
    updateDistrict: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/district/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete district
     * @param key
     * @returns District
     */
    deleteDistrict: builder.mutation({
      query: (key) => ({
        url: `/district/${key}`,
        method: "DELETE",
      }),
    }),

    /**
     * @description This endpoint is used to read district by province
     * @param provinceId
     * @returns District
     */
    readDistrictByProvince: builder.query({
      query: (provinceId) => ({
        url: `/district/district-by-province/${provinceId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read district by facility
     * @param facilityId
     * @returns District
     */
    readDistrictByFacility: builder.query({
      query: (facilityId) => ({
        url: `/district/district-by-facility/${facilityId}`,
        method: "GET",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateDistrictMutation,
  useReadDistrictsQuery,
  useReadDistrictByKeyQuery,
  useUpdateDistrictMutation,
  useDeleteDistrictMutation,
  useReadDistrictByProvinceQuery,
  useReadDistrictByFacilityQuery,
} = districtApi;

// export endpoints
export const { endpoints: districtEndpoints } = districtApi;

// export api
export default districtApi;
