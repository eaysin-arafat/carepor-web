import { API } from "../API/API";
import { FirmType } from "../firm/firm-api";

export type Ward = {
  oid: number;
  description: string;
  firmId: number;
  firm: FirmType;
  departmentId: 0;
  dateCreated: string;
  isDeleted: boolean;
  isSynced: boolean;
};

const wardApi = API.injectEndpoints({
  endpoints: (builder) => ({
    CreateWard: builder.mutation({
      query: (body) => ({
        url: "ward",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Wards"],
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
    ReadWardByFirm: builder.query<Ward[], string>({
      query: (firmId) => `ward/ward-by-firm/${firmId}`,
      providesTags: ["Wards"],
    }),
    UpdateWard: builder.mutation({
      query: (body) => ({
        url: `ward/${body?.oid}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Wards"],
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
