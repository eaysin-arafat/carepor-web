import { API } from "../API/API";
import { Ward } from "../ward/ward-api";

export type BedType = {
  oid: number;
  description: string;
  wardId: number;
  ward: Ward;
  departmentId: number;
  firmId: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
};

const bedApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createBed: builder.mutation({
      query: (body) => ({
        url: "bed",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Beds"],
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
        url: `bed/${body?.oid}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Beds"],
    }),
    readBedByWard: builder.query<BedType[], string>({
      query: (wardId) => `bed/bed-by-ward/${wardId}`,
      providesTags: ["Beds"],
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
