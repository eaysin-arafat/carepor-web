import { API } from "../API/API";

const userAccountsApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create user account
     * @param body
     * @returns UserAccount
     */
    createUserAccount: builder.mutation({
      query: (body) => ({
        url: "/user-account",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read user accounts
     * @returns UserAccount[]
     */
    readUserAccounts: builder.query({
      query: () => ({
        url: "/user-accounts",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read user account by key
     * @param key
     * @returns UserAccount
     */
    readUserAccountByKey: builder.query({
      query: (key) => ({
        url: `/user-account/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read user account by firstname
     * @param firstName
     * @returns UserAccount
     */
    readUserAccountByFirstname: builder.query({
      query: (firstName) => ({
        url: `/user-account/firstname/${firstName}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read user account by surname
     * @param surName
     * @returns UserAccount
     */
    readUserAccountBySurname: builder.query({
      query: (surName) => ({
        url: `/user-account/surname/${surName}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read user account by cellphone
     * @param cellphone
     * @returns UserAccount
     */
    readUserAccountByCellphone: builder.query({
      query: (cellphone) => ({
        url: `/user-account/cellphone/${cellphone}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read user account by user account basic info
     * @returns UserAccount
     */
    readUserAccountByUserAccountBasicInfo: builder.query({
      query: () => ({
        url: "/user-account/userAccount-basicInfo",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update user account
     * @param key
     * @param body
     * @returns UserAccount
     */
    updateUserAccount: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/user-account/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete user account
     * @param key
     * @returns UserAccount
     */
    deleteUserAccount: builder.mutation({
      query: ({ key }) => ({
        url: `/user-account/${key}`,
        method: "DELETE",
      }),
    }),

    /**
     * @description This endpoint is used to user login
     * @param body
     * @returns UserAccount
     */
    userLogin: builder.mutation({
      query: (body) => ({
        url: "/user-account/login",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to get user access by user name
     * @param userName
     * @returns UserAccess
     */
    getUserAccessByUserName: builder.mutation({
      query: (userName) => ({
        url: `/user-account/User-access-by-username/${userName}`,
        // method: "GET",
        method: "POST",
      }),
    }),

    /**
     * @description This endpoint is used to verify password
     * @param body
     * @returns UserAccount
     */
    verifyPassword: builder.mutation({
      query: (body) => ({
        url: "/user-account/verify-password",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to update password
     * @param body
     * @returns UserAccount
     */
    updatePassword: builder.mutation({
      query: (body) => ({
        url: "/user-account/update-password",
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to check user name
     * @param userName
     * @returns UserAccount
     */
    checkUserName: builder.query({
      query: (userName) => ({
        url: `/user-account/user-check/${userName}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to check user nrc
     * @param body
     * @returns UserAccount
     */
    checkUserNRC: builder.query({
      query: (body) => ({
        url: "/user-account/user-check-by-nrc",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to check user mobile
     * @param body
     * @returns UserAccount
     */
    checkUserMobile: builder.query({
      query: (body) => ({
        url: "/user-account/user-check-by-cell",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to changed password
     * @param body
     * @returns UserAccount
     */
    changedPassword: builder.mutation({
      query: (body) => ({
        url: "/user-account/change-password",
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to recovery request
     * @param body
     * @returns UserAccount
     */
    recoveryRequest: builder.mutation({
      query: (body) => ({
        url: "/user-account/recovery-request",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to user account read by key
     * @param key
     * @returns UserAccount
     */
    userAccountReadByKey: builder.query({
      query: (key) => ({
        url: `/user-account/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to user account update
     * @param body
     * @returns UserAccount
     */
    userAccountUpdate: builder.mutation({
      query: (body) => ({
        url: "/user-account/",
        method: "PUT",
        body,
      }),
    }),
  }),
});

// export api hooks for usage in components
export const {
  useCreateUserAccountMutation,
  useReadUserAccountsQuery,
  useReadUserAccountByKeyQuery,
  useReadUserAccountByFirstnameQuery,
  useReadUserAccountBySurnameQuery,
  useReadUserAccountByCellphoneQuery,
  useReadUserAccountByUserAccountBasicInfoQuery,
  useUpdateUserAccountMutation,
  useDeleteUserAccountMutation,
  useUserLoginMutation,
  // useGetUserAccessByUserNameQuery,
  useGetUserAccessByUserNameMutation,
  useVerifyPasswordMutation,
  useUpdatePasswordMutation,
  useCheckUserNameQuery,
  useCheckUserNRCQuery,
  useCheckUserMobileQuery,
  useChangedPasswordMutation,
  useRecoveryRequestMutation,
  useUserAccountReadByKeyQuery,
  useUserAccountUpdateMutation,
} = userAccountsApi;

// export endpoints
export const { endpoints: userAccountsEndpoints } = userAccountsApi;

// export api reducer for usage in store configuration
export default userAccountsApi;
