import { API } from "../API/API";

const userAccountsApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createUserAccount: builder.mutation({
      query: (body) => ({
        url: "/user-account",
        method: "POST",
        body,
      }),
    }),
    readUserAccounts: builder.query({
      query: () => ({
        url: "/user-accounts",
        method: "GET",
      }),
    }),
    readUserAccountByKey: builder.query({
      query: (key) => ({
        url: `/user-account/key/${key}`,
        method: "GET",
      }),
    }),
    readUserAccountByFirstname: builder.query({
      query: (firstName) => ({
        url: `/user-account/firstname/${firstName}`,
        method: "GET",
      }),
    }),
    readUserAccountBySurname: builder.query({
      query: (surName) => ({
        url: `/user-account/surname/${surName}`,
        method: "GET",
      }),
    }),
    readUserAccountByCellphone: builder.query({
      query: (cellphone) => ({
        url: `/user-account/cellphone/${cellphone}`,
        method: "GET",
      }),
    }),
    readUserAccountByUserAccountBasicInfo: builder.query({
      query: () => ({
        url: "/user-account/userAccount-basicInfo",
        method: "GET",
      }),
    }),
    updateUserAccount: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/user-account/${key}`,
        method: "PUT",
        body,
      }),
    }),
    deleteUserAccount: builder.mutation({
      query: ({ key }) => ({
        url: `/user-account/${key}`,
        method: "DELETE",
      }),
    }),
    userLogin: builder.mutation({
      query: (body) => ({
        url: "/user-account/login",
        method: "POST",
        body,
      }),
    }),
    getUserAccessByUserName: builder.query({
      query: (userName) => ({
        url: `/user-account/User-access-by-username/${userName}`,
        method: "GET",
      }),
    }),
    verifyPassword: builder.mutation({
      query: (body) => ({
        url: "/user-account/verify-password",
        method: "POST",
        body,
      }),
    }),
    updatePassword: builder.mutation({
      query: (body) => ({
        url: "/user-account/update-password",
        method: "PUT",
        body,
      }),
    }),
    checkUserName: builder.query({
      query: (userName) => ({
        url: `/user-account/user-check/${userName}`,
        method: "GET",
      }),
    }),
    checkUserNRC: builder.query({
      query: (body) => ({
        url: "/user-account/user-check-by-nrc",
        method: "POST",
        body,
      }),
    }),
    checkUserMobile: builder.query({
      query: (body) => ({
        url: "/user-account/user-check-by-cell",
        method: "POST",
        body,
      }),
    }),
    changedPassword: builder.mutation({
      query: (body) => ({
        url: "/user-account/change-password",
        method: "PUT",
        body,
      }),
    }),
    recoveryRequest: builder.mutation({
      query: (body) => ({
        url: "/user-account/recovery-request",
        method: "POST",
        body,
      }),
    }),
    userAccountReadByKey: builder.query({
      query: (key) => ({
        url: `/user-account/key/${key}`,
        method: "GET",
      }),
    }),
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
  useGetUserAccessByUserNameQuery,
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
