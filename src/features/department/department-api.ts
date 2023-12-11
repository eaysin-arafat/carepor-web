import { API } from "../API/API";
export interface Department {
  oid: number;
  description: string;
  facilityId: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

// define department api
const departmentApi = API.injectEndpoints({
  endpoints: (builder) => ({
    CreateDepartment: builder.mutation({
      query: (body) => ({
        url: `department`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Departments"],
    }),
    ReadDepartments: builder.query<Department[], number>({
      query: (key) => `departments/key/${key}`,
      providesTags: ["Departments"],
    }),
    ReadDepartmentByKey: builder.query({
      query: (key) => `department/key/${key}`,
    }),
    UpdateDepartment: builder.mutation({
      query: (body) => ({
        url: `department/${body?.oid}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Departments"],
    }),
    DeleteDepartment: builder.mutation({
      query: (key) => ({
        url: `department/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateDepartmentMutation,
  useReadDepartmentsQuery,
  useReadDepartmentByKeyQuery,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;

// export department endpoints
export const { endpoints: departmentApiEndpoints } = departmentApi;

// export hooks
export default departmentApi;
