import { API } from "../API/API";

const facilityAccessApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createFacilityAccess: builder.mutation({
      query: (body) => ({
        url: "/facility-access",
        method: "POST",
        body,
      }),
    }),
    readFacilityAccess: builder.query({
      query: () => ({
        url: "/facility-accesses",
        method: "GET",
      }),
    }),
    readFacilityAccessForAdmin: builder.query({
      query: () => ({
        url: "/facility-accesses-admin",
        method: "GET",
      }),
    }),
    readFacilityAccessByKey: builder.query({
      query: (key) => ({
        url: `/facility-access/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @deprecated use readFacilityAccessWithModulePermissionsByKey instead
     * @see readFacilityAccessWithModulePermissionsByKey
     * @returns {Promise<import("./facility-access-api").FacilityAccessWithModulePermissions>}
     */

    // * This is the old way of doing it
    readFacilityAccessWithModulePermissionsByKey: builder.query({
      query: (key: string) => ({
        url: `/facility-access-with-module-access/key/${key}`,
        method: "GET",
      }),
    }),
    updateFacilityAccessByUserAccountID: builder.mutation({
      query: ({ userAccountId, ...body }) => ({
        url: `/facility-access/${userAccountId}`,
        method: "PUT",
        body,
      }),
    }),
    revokeLoginByUserAccountID: builder.mutation({
      query: ({ userAccountId }) => ({
        url: `/facility-access-revoke-login/${userAccountId}`,
        method: "PUT",
      }),
    }),
    approveFacilityAccess: builder.mutation({
      query: ({ key }) => ({
        url: `/approve-facility-access/${key}`,
        method: "PUT",
      }),
    }),
    loginRecoveryFacilityAccess: builder.mutation({
      query: ({ key }) => ({
        url: `/login-recovery-facility-access/${key}`,
        method: "PUT",
      }),
    }),
    rejectFacilityAccess: builder.mutation({
      query: ({ key }) => ({
        url: `/reject-facility-access/${key}`,
        method: "PUT",
      }),
    }),
    readFacilityAccessByFacilityID: builder.query({
      query: (facilityId) => ({
        url: `/facility-access/facility-access-by-facility/${facilityId}`,
      }),
    }),
    makeAdmin: builder.mutation({
      query: ({ userAccountId }) => ({
        url: `/facility-access/make-admin/${userAccountId}`,
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useCreateFacilityAccessMutation,
  useReadFacilityAccessQuery,
  useReadFacilityAccessForAdminQuery,
  useReadFacilityAccessByKeyQuery,
  useReadFacilityAccessWithModulePermissionsByKeyQuery,
  useUpdateFacilityAccessByUserAccountIDMutation,
  useRevokeLoginByUserAccountIDMutation,
  useApproveFacilityAccessMutation,
  useLoginRecoveryFacilityAccessMutation,
  useRejectFacilityAccessMutation,
  useReadFacilityAccessByFacilityIDQuery,
  useMakeAdminMutation,
} = facilityAccessApi;
export const { endpoints: facilityAccessApiEndpoints } = facilityAccessApi;
export default facilityAccessApi;
