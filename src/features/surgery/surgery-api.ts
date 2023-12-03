import { API } from "../API/API";

const surgeryApi = API.injectEndpoints({
  endpoints: (builder) => ({
    CreateSurgery: builder.mutation({
      query: (body) => ({
        url: "surgery",
        method: "POST",
        body,
      }),
    }),
    ReadSurgerys: builder.query({
      query: () => "surgerys",
    }),
    ReadSurgeryByKey: builder.query({
      query: (key) => `surgery/key/${key}`,
    }),
    ReadSurgeryByClientId: builder.query({
      query: (clientId) => `surgery/by-client/${clientId}`,
    }),
    UpdateSurgery: builder.mutation({
      query: (body) => ({
        url: `surgery`,
        method: "PUT",
        body,
      }),
    }),
    UpdateSurgeryPreOp: builder.mutation({
      query: (body) => ({
        url: `surgery/pre-op`,
        method: "PUT",
        body,
      }),
    }),
    UpdateSurgeryIntraOp: builder.mutation({
      query: (body) => ({
        url: `surgery/intra-op`,
        method: "PUT",
        body,
      }),
    }),
    UpdateSurgeryPostOp: builder.mutation({
      query: (body) => ({
        url: `surgery/post-op`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateSurgeryMutation,
  useReadSurgerysQuery,
  useReadSurgeryByKeyQuery,
  useReadSurgeryByClientIdQuery,
  useUpdateSurgeryMutation,
  useUpdateSurgeryPreOpMutation,
  useUpdateSurgeryIntraOpMutation,
  useUpdateSurgeryPostOpMutation,
} = surgeryApi;

// export surgery endpoints
export const { endpoints: surgeryApiEndpoints } = surgeryApi;

// export api
export default surgeryApi;
