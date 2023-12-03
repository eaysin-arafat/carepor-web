import { API } from "../API/API";

// define department api
const departmentApi = API.injectEndpoints({
  endpoints: (builder) => ({
    CreateDepartment: builder.mutation({
      query: (body) => ({
        url: `department`,
        method: "POST",
        body,
      }),
    }),
    ReadDepartments: builder.query({
      query: (key) => `departments/key/${key}`,
    }),
    ReadDepartmentByKey: builder.query({
      query: (key) => `department/key/${key}`,
    }),
    UpdateDepartment: builder.mutation({
      query: (body) => ({
        url: `department`,
        method: "PUT",
        body,
      }),
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
