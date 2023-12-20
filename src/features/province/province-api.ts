import { ProvinceType } from "@/types/coreTypes";
import { API } from "../API/API";

const provinceApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create province
     * @param body
     * @returns Province
     */
    createProvince: builder.mutation({
      query: (body) => ({
        url: "/province",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read provinces
     * @returns Province[]
     */
    readProvinces: builder.query<ProvinceType[], undefined>({
      query: () => ({
        url: "/provinces",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read provinces by user id
     * @param userId
     * @returns Province[]
     */
    readProvincesByUserID: builder.query({
      query: (userId) => ({
        url: `/provinces/userid/${userId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read province by key
     * @param key
     * @returns Province
     */
    readProvinceByKey: builder.query({
      query: (key) => ({
        url: `/province/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update province
     * @param key
     * @param body
     * @returns Province
     */
    updateProvince: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/province/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete province
     * @param key
     * @returns Province
     */
    deleteProvince: builder.mutation({
      query: (key) => ({
        url: `/province/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateProvinceMutation,
  useReadProvincesQuery,
  useReadProvincesByUserIDQuery,
  useReadProvinceByKeyQuery,
  useUpdateProvinceMutation,
  useDeleteProvinceMutation,
} = provinceApi;

// export endpoints
export const { endpoints: provinceEdnpoints } = provinceApi;

// export api
export default provinceApi;
