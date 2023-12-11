import { API } from "../API/API";

const moduleAccessAPI = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create module access
     * @param body
     * @returns ModuleAccess
     */
    createModuleAccess: builder.mutation({
      query: (body) => ({
        url: `/module-access`,
        method: "POST",
        body,
      }),
      //@ts-ignore
      invalidatesTags: (result, error, body) => [
        { type: "FacilityAccess" },
        { type: "FacilityAccessPermission", requestId: body.facilityAccessId },
      ],
      // invalidatesTags: ["FacilityAccess"],
    }),

    /**
     * @description This endpoint is used to read module access by facility access id
     * @param facilityAccessId
     * @returns ModuleAccess
     */
    readModuleAccessByFacility: builder.query({
      query: (facilityAccessId: string) => ({
        url: `/module-access/module-access-by-facility-access/${facilityAccessId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateModuleAccessMutation,
  useReadModuleAccessByFacilityQuery,
} = moduleAccessAPI;
export const { endpoints: moduleAccessEndpoints } = moduleAccessAPI;
export default moduleAccessAPI;
