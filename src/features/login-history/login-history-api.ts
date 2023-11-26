import { API } from "../API/API";

const loginHistoryApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createLoginHistory: builder.mutation({
      query: (body) => ({
        url: "/login-history",
        method: "POST",
        body,
      }),
    }),
    readLoginHistories: builder.query({
      query: () => ({
        url: "/login-histories",
        method: "GET",
      }),
    }),
    readLoginHistoryByKey: builder.query({
      query: (key) => ({
        url: `/login-history/key/${key}`,
        method: "GET",
      }),
    }),
    updateLoginHistory: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/login-history/${key}`,
        method: "PUT",
        body,
      }),
    }),
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
