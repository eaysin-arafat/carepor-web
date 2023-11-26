import { API } from "../API/API";

const occupationApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create occupation
     * @param body
     * @returns Occupation
     */
    createOccupation: builder.mutation({
      query: (body) => ({
        url: "/occupation",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read occupations
     * @returns Occupation[]
     */
    readOccupations: builder.query({
      query: () => ({
        url: "/occupations",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read occupation by key
     * @param key
     * @returns Occupation
     */
    readOccupationByKey: builder.query({
      query: (key) => ({
        url: `/occupation/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update occupation
     * @param key
     * @param body
     * @returns Occupation
     */
    updateOccupation: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/occupation/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete occupation
     * @param key
     * @returns Occupation
     */
    deleteOccupation: builder.mutation({
      query: (key) => ({
        url: `/occupation/${key}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

// export hooks
export const {
  useCreateOccupationMutation,
  useReadOccupationsQuery,
  useReadOccupationByKeyQuery,
  useUpdateOccupationMutation,
  useDeleteOccupationMutation,
} = occupationApi;

// export endpoints
export const { endpoints: occupationApiEndpoints } = occupationApi;

// export api
export default occupationApi;
