import { API } from "../API/API";

export interface ICPC2Description {
  oid: number;
  description: string;
  anatomicAxisId: number;
  pathologyAxisId: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

export interface ICPC2DescriptionResponse {
  oid: number;
  value: number;
  label: string;
}

const icpc2DescriptionApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createICPC2Description: builder.mutation({
      query: (body) => ({
        url: "ICPC2-description",
        method: "POST",
        body,
      }),
    }),
    readICPC2Descriptions: builder.query<ICPC2DescriptionResponse[], null>({
      query: () => ({
        url: "ICPC2-descriptions",
        method: "GET",
      }),

      transformResponse: (response: ICPC2Description[]) => {
        return response.map((icpc2Description) => ({
          oid: icpc2Description?.oid,
          value: icpc2Description?.oid,
          label: icpc2Description?.description,
        }));
      },
    }),
    readICPC2DescriptionByKey: builder.query({
      query: (key) => ({
        url: `ICPC2-description/key/${key}`,
        method: "GET",
      }),
    }),
    readICPC2DescriptionByAnatomicAxis: builder.query({
      query: (anatomicAxisId) => ({
        url: `ICPC2-description/by-anatomicaxis/${anatomicAxisId}`,
        method: "GET",
      }),
    }),
    readICPC2DescriptionByPathologyAxis: builder.query({
      query: ({ pathologyAxisId, anatomicAxisId }) => ({
        url: `ICPC2-description/by-pathology-axis/${pathologyAxisId}/${anatomicAxisId}`,
        method: "GET",
      }),
    }),
    updateICPC2Description: builder.mutation({
      query: ({ key, body }) => ({
        url: `ICPC2-description/${key}`,
        method: "PUT",
        body,
      }),
    }),
    deleteICPC2Description: builder.mutation({
      query: (key) => ({
        url: `ICPC2-description/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateICPC2DescriptionMutation,
  useReadICPC2DescriptionsQuery,
  useReadICPC2DescriptionByKeyQuery,
  useReadICPC2DescriptionByAnatomicAxisQuery,
  useReadICPC2DescriptionByPathologyAxisQuery,
  useUpdateICPC2DescriptionMutation,
  useDeleteICPC2DescriptionMutation,
} = icpc2DescriptionApi;

export const { endpoints: icpc2DescriptionApiEndpoints } = icpc2DescriptionApi;

export default icpc2DescriptionApi;
