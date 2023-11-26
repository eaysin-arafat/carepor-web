import { API } from "../API/API";

const userAccessApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create user access
     * @param body
     * @returns UserAccess
     */
    createUserAccess: builder.mutation({
      query: (body) => ({
        url: "/user-access",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read user accesses
     * @returns UserAccess[]
     */
    readUserAccesses: builder.query({
      query: () => ({
        url: "/user-accesses",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read user access by key
     * @param key
     * @returns UserAccess
     */
    readUserAccessByKey: builder.query({
      query: (key) => ({
        url: `/user-access/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update user access
     * @param key
     * @param body
     * @returns UserAccess
     */
    updateUserAccess: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/user-access/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete user access
     * @param key
     * @returns UserAccess
     */
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
