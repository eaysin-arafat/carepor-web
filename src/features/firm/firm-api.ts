import { API } from "../API/API";
import { Department } from "../department/department-api";

export type FirmType = {
  oid: number;
  description: string;
  departmentId: number;
  department: Department;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
};

export const firmApi = API.injectEndpoints({
  endpoints: (builder) => ({
    CreateFirm: builder.mutation({
      query: (body) => ({
        url: "firm",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Firms"],
    }),
    ReadFirms: builder.query({
      query: () => "firms",
    }),
    ReadFirmsByFacilityId: builder.query({
      query: (facilityId) => `firms/facility/${facilityId}`,
    }),
    ReadFirmsByDepartmentId: builder.query<FirmType[], string>({
      query: (departmentId) => `firms/department/${departmentId}`,
      providesTags: ["Firms"],
    }),
    ReadFirmByKey: builder.query({
      query: (key) => `firm/key/${key}`,
    }),
    UpdateFirm: builder.mutation({
      query: (body) => ({
        url: `firm/${body?.oid}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Firms"],
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
