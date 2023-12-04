import { API } from "../API/API";

const bedApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createBed: builder.mutation({
      query: (body) => ({
        url: "bed",
        method: "POST",
        body,
      }),
    }),
    readBeds: builder.query({
      query: () => "beds",
    }),
    readBedsByFacilityId: builder.query({
      query: (facilityId) => `beds/facility/${facilityId}`,
    }),
    readBedByKey: builder.query({
      query: (key) => `bed/key/${key}`,
    }),
    updateBed: builder.mutation({
      query: (body) => ({
        url: `bed`,
        method: "PUT",
        body,
      }),
    }),
    readBedByWard: builder.query({
      query: (wardId) => `bed/bed-by-ward/${wardId}`,
    }),
    readBedByWardForDropdown: builder.query({
      query: (wardId) => `bed/bed-by-ward-for-dropdown/${wardId}`,
    }),
    deleteBed: builder.mutation({
      query: (key) => ({
        url: `bed/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateBedMutation,
  useReadBedsQuery,
  useReadBedsByFacilityIdQuery,
  useReadBedByKeyQuery,
  useUpdateBedMutation,
  useReadBedByWardQuery,
  useReadBedByWardForDropdownQuery,
  useDeleteBedMutation,
} = bedApi;

// export bed endpoints
export const { endpoints: bedApiEndpoints } = bedApi;

// export api
export default bedApi;
