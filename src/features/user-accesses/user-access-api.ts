import { API } from "../API/API";

const userAccessApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createUserAccess: builder.mutation({
      query: (body) => ({
        url: "/user-access",
        method: "POST",
        body,
      }),
    }),
    readUserAccesses: builder.query({
      query: () => ({
        url: "/user-accesses",
        method: "GET",
      }),
    }),
    readUserAccessByKey: builder.query({
      query: (key) => ({
        url: `/user-access/key/${key}`,
        method: "GET",
      }),
    }),
    updateUserAccess: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/user-access/${key}`,
        method: "PUT",
        body,
      }),
    }),
    deleteUserAccess: builder.mutation({
      query: ({ key }) => ({
        url: `/user-access/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export api hooks for usage in components
export const {
  useCreateUserAccessMutation,
  useReadUserAccessesQuery,
  useReadUserAccessByKeyQuery,
  useUpdateUserAccessMutation,
  useDeleteUserAccessMutation,
} = userAccessApi;

// export endpoints
export const { endpoints: userAccessEndpoints } = userAccessApi;

// export api reducer for usage in store configuration
export default userAccessApi;
