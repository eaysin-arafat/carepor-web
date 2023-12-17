import { API } from "../API/API";

export interface VisitType {
  oid: number;
  description: string;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  modifiedIn: number;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

const visitTypeApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create visit type
     * @param body
     * @returns VisitType
     */
    createVisitType: builder.mutation({
      query: (body) => ({
        url: "/visit-type",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read visit types
     * @returns VisitType[]
     */
    readVisitTypes: builder.query<VisitType[], null>({
      query: () => ({
        url: "/visit-types",
        method: "GET",
      }),
      keepUnusedDataFor: 60 * 60 * 24, // 24 hours
      providesTags: ["VisitTypes"],
    }),

    /**
     * @description This endpoint is used to read visit type by key
     * @param key
     * @returns VisitType
     */
    readVisitTypeByKey: builder.query({
      query: (key) => ({
        url: `/visit-type/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update visit type
     * @param key
     * @param body
     * @returns VisitType
     */
    updateVisitType: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/visit-type/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete visit type
     * @param key
     * @returns VisitType
     */
    deleteVisitType: builder.mutation({
      query: (key) => ({
        url: `/visit-type/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateVisitTypeMutation,
  useReadVisitTypesQuery,
  useReadVisitTypeByKeyQuery,
  useUpdateVisitTypeMutation,
  useDeleteVisitTypeMutation,
} = visitTypeApi;

// export endpoints
export const { endpoints: visitTypeApiEndpoints } = visitTypeApi;

// export api
export default visitTypeApi;
