import { API } from "../API/API";

const wardApi = API.injectEndpoints({
  endpoints: (builder) => ({
    CreateWard: builder.mutation({
      query: (body) => ({
        url: "ward",
        method: "POST",
        body,
      }),
    }),
    ReadWards: builder.query({
      query: () => "wards",
    }),
    ReadWardsByFacilityId: builder.query({
      query: (facilityId) => `wards/facility/${facilityId}`,
    }),
    ReadWardByKey: builder.query({
      query: (key) => `ward/key/${key}`,
    }),
    ReadWardByFirm: builder.query({
      query: (firmId) => `ward/ward-by-firm/${firmId}`,
    }),
    UpdateWard: builder.mutation({
      query: (body) => ({
        url: `ward`,
        method: "PUT",
        body,
      }),
    }),
    DeleteWard: builder.mutation({
      query: (key) => ({
        url: `ward/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateWardMutation,
  useReadWardsQuery,
  useReadWardsByFacilityIdQuery,
  useReadWardByKeyQuery,
  useReadWardByFirmQuery,
  useUpdateWardMutation,
  useDeleteWardMutation,
} = wardApi;

// export ward endpoints
export const { endpoints: wardApiEndpoints } = wardApi;

// export hooks
export default wardApi;
