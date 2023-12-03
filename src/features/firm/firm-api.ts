import { API } from "../API/API";

export const firmApi = API.injectEndpoints({
  endpoints: (builder) => ({
    CreateFirm: builder.mutation({
      query: (body) => ({
        url: "firm",
        method: "POST",
        body,
      }),
    }),
    ReadFirms: builder.query({
      query: () => "firms",
    }),
    ReadFirmsByFacilityId: builder.query({
      query: (facilityId) => `firms/facility/${facilityId}`,
    }),
    ReadFirmsByDepartmentId: builder.query({
      query: (departmentId) => `firms/department/${departmentId}`,
    }),
    ReadFirmByKey: builder.query({
      query: (key) => `firm/key/${key}`,
    }),
    UpdateFirm: builder.mutation({
      query: (body) => ({
        url: `firm`,
        method: "PUT",
        body,
      }),
    }),
    FirmByDepartment: builder.query({
      query: (departmentId) => `firm/firm-by-department/${departmentId}`,
    }),
    DeleteFirm: builder.mutation({
      query: (key) => ({
        url: `firm/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateFirmMutation,
  useReadFirmsQuery,
  useReadFirmsByFacilityIdQuery,
  useReadFirmsByDepartmentIdQuery,
  useReadFirmByKeyQuery,
  useUpdateFirmMutation,
  useFirmByDepartmentQuery,
  useDeleteFirmMutation,
} = firmApi;

// export firm endpoints
export const { endpoints: firmApiEndpoints } = firmApi;

// export hooks
export default firmApi;
