import { API } from "../API/API";

export interface AnatomicAxis {
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

const anatomicAxisApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createAnatomicAxis: builder.mutation({
      query: (body) => ({
        url: "/anatomic-axis",
        method: "POST",
        body,
      }),
    }),
    readAnatomicAxes: builder.query<PathologyAxisResponse[], null>({
      query: () => ({
        url: "/anatomic-axes",
        method: "GET",
      }),

      transformResponse: (response: AnatomicAxis[]) => {
        return response.map((anatomicAxis) => ({
          oid: anatomicAxis?.oid,
          value: anatomicAxis?.oid,
          label: anatomicAxis?.description,
        }));
      },
    }),

    readAnatomicAxisByKey: builder.query({
      query: (key) => ({
        url: `/anatomic-axis/key/${key}`,
        method: "GET",
      }),
    }),
    updateAnatomicAxis: builder.mutation({
      query: (body) => ({
        url: `/anatomic-axis/${body.key}`,
        method: "PUT",
        body,
      }),
    }),
    deleteAnatomicAxis: builder.mutation({
      query: (key) => ({
        url: `/anatomic-axis/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateAnatomicAxisMutation,
  useReadAnatomicAxesQuery,
  useReadAnatomicAxisByKeyQuery,
  useUpdateAnatomicAxisMutation,
  useDeleteAnatomicAxisMutation,
} = anatomicAxisApi;

export const { endpoints: anatomicAxisApiEndpoints } = anatomicAxisApi;

export default anatomicAxisApi;
