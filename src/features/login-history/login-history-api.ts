import { API } from "../API/API";

const loginHistoryApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create login history
     * @param body
     * @returns LoginHistory
     */
    createLoginHistory: builder.mutation({
      query: (body) => ({
        url: "/login-history",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read login histories
     * @returns LoginHistory[]
     */
    readLoginHistories: builder.query({
      query: () => ({
        url: "/login-histories",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read login history by key
     * @param key
     * @returns LoginHistory
     */
    readLoginHistoryByKey: builder.query({
      query: (key) => ({
        url: `/login-history/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update login history
     * @param key
     * @param body
     * @returns LoginHistory
     */
    updateLoginHistory: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/login-history/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete login history
     * @param key
     * @returns LoginHistory
     */
    deleteLoginHistory: builder.mutation({
      query: ({ key }) => ({
        url: `/login-history/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateLoginHistoryMutation,
  useReadLoginHistoriesQuery,
  useReadLoginHistoryByKeyQuery,
  useUpdateLoginHistoryMutation,
  useDeleteLoginHistoryMutation,
} = loginHistoryApi;

export const { endpoints: loginHistoryEndpoints } = loginHistoryApi;
export default loginHistoryApi;
