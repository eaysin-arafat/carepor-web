import { TypeFacilityAccess } from "@/types/facility";
import { API } from "../API/API";

const facilityAccessApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create facility access
     * @param body
     * @returns FacilityAccess
     */
    createFacilityAccess: builder.mutation({
      query: (body) => ({
        url: "/facility-access",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read facility access by user account id
     * @param userAccountId
     * @returns FacilityAccess
     */
    readFacilityAccess: builder.query({
      query: () => ({
        url: "/facility-accesses",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read facility access by user account id
     * @param userAccountId
     * @returns FacilityAccess
     */
    readFacilityAccessForAdmin: builder.query({
      query: () => ({
        url: "/facility-accesses-admin",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read facility access by key
     * @param key
     * @returns FacilityAccess
     */
    readFacilityAccessByKey: builder.query({
      query: (key) => ({
        url: `/facility-access/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read facility access with module access permissions by key
     * @param key
     * @returns FacilityAccessWithModuleAccessPermissions
     */
    readFacilityAccessWithModulePermissionsByKey: builder.query({
      query: (key: string) => ({
        url: `/facility-access-with-module-access/key/${key}`,
        method: "GET",
      }),
      //@ts-ignore
      providesTags: (result, error, key) => [
        { type: "FacilityAccessId", facilityAccessId: key },
      ],
    }),

    /**
     * @description This endpoint is used to update facility access by user account id
     * @param userAccountId
     * @param body
     * @returns FacilityAccess
     */
    updateFacilityAccessByUserAccountID: builder.mutation({
      query: ({ userAccountId, ...body }) => ({
        url: `/facility-access/${userAccountId}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to revoke login by user account id
     * @param userAccountId
     * @returns FacilityAccess
     */
    revokeLoginByUserAccountID: builder.mutation({
      query: ({ key, body }) => ({
        url: `/facility-access-revoke-login/${key}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["FacilityAccess"],
    }),

    /**
     * @description This endpoint is used to approve facility access
     * @param key
     * @returns FacilityAccess
     */
    approveFacilityAccess: builder.mutation({
      query: ({ key, body }) => ({
        url: `/approve-facility-access/${key}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["FacilityAccess"],
    }),

    /**
     * @description This endpoint is used to login recovery facility access
     * @param key
     * @returns FacilityAccess
     */

    loginRecoveryFacilityAccess: builder.mutation({
      query: ({ body }) => ({
        url: `/login-recovery-facility-access`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["FacilityAccess"],
    }),

    /**
     * @description This endpoint is used to reject facility access
     * @param key
     * @returns FacilityAccess
     */
    rejectFacilityAccess: builder.mutation({
      query: ({ key, body }) => ({
        url: `/reject-facility-access/${key}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["FacilityAccess"],
    }),

    /**
     * @description This endpoint is used to read facility access by facility id
     * @param facilityId
     * @returns FacilityAccess
     */
    readFacilityAccessByFacilityID: builder.query<TypeFacilityAccess[], number>(
      {
        query: (facilityId) => ({
          url: `/facility-access/facility-access-by-facility/${facilityId}`,
        }),
        providesTags: ["FacilityAccess"],
      }
    ),

    /**
     * @description This endpoint is used to make facility access admin
     * @param userAccountId
     * @returns FacilityAccess
     */
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
