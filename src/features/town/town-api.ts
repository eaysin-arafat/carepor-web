import { API } from "../API/API";

const townApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create town
     * @param body
     * @returns Town
     */
    createTown: builder.mutation({
      query: (body) => ({
        url: "/town",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read towns
     * @returns Town[]
     */
    readTowns: builder.query({
      query: () => ({
        url: "/towns",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read town by key
     * @param key
     * @returns Town
     */
    readTownByKey: builder.query({
      query: (key) => ({
        url: `/town/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update town
     * @param key
     * @param body
     * @returns Town
     */
    updateTown: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/town/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete town
     * @param key
     * @returns Town
     */
    deleteTown: builder.mutation({
      query: (key) => ({
        url: `/town/${key}`,
        method: "DELETE",
      }),
    }),

    /**
     * @description This endpoint is used to read town by district
     * @param districtId
     * @returns Town
     */
    readTownByDistrict: builder.query({
      query: (districtId) => ({
        url: `/town/town-by-district/${districtId}`,
        method: "GET",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateTownMutation,
  useReadTownsQuery,
  useReadTownByKeyQuery,
  useUpdateTownMutation,
  useDeleteTownMutation,
  useReadTownByDistrictQuery,
} = townApi;

// export endpoints
export const { endpoints: townApiEndpoints } = townApi;

// export api
export default townApi;
