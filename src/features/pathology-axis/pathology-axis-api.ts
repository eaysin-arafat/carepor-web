import { API } from "../API/API";

export interface PathologyAxis {
  oid: number;
  description: string;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

export interface PathologyAxisResponse {
  oid: number;
  value: number;
  label: string;
}

const pathologyAxesApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createPathologyAxis: builder.mutation({
      query: (body) => ({
        url: "pathology-axis",
        method: "POST",
        body,
      }),
    }),
    readPathologyAxes: builder.query<PathologyAxisResponse[], null>({
      query: () => ({
        url: "pathology-axes",
        method: "GET",
      }),

      transformResponse: (response: PathologyAxis[]) => {
        return response.map((pathologyAxis) => ({
          oid: pathologyAxis?.oid,
          value: pathologyAxis?.oid,
          label: pathologyAxis?.description,
        }));
      },
    }),

    readPathologyAxisByKey: builder.query({
      query: (key) => ({
        url: `pathology-axis/key/${key}`,
        method: "GET",
      }),
    }),
    updatePathologyAxis: builder.mutation({
      query: ({ key, body }) => ({
        url: `/pathology-axis/${key}`,
        method: "PUT",
        body,
      }),
    }),
    deletePathologyAxis: builder.mutation({
      query: (key) => ({
        url: `/pathology-axis/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreatePathologyAxisMutation,
  useReadPathologyAxesQuery,
  useReadPathologyAxisByKeyQuery,
  useUpdatePathologyAxisMutation,
  useDeletePathologyAxisMutation,
} = pathologyAxesApi;

export const { endpoints: pathologyAxesApiEndpoints } = pathologyAxesApi;

export default pathologyAxesApi;
