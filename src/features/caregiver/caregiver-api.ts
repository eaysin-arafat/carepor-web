import { API } from "../API/API";

const caregiverApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create caregiver
     * @param body
     * @returns Caregiver
     */
    createCaregiver: builder.mutation({
      query: (body) => ({
        url: "/caregiver",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read caregivers
     * @returns Caregiver[]
     */
    readCaregivers: builder.query({
      query: () => ({
        url: "/caregivers",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read caregiver by key
     * @param key
     * @returns Caregiver
     */
    readCaregiverByKey: builder.query({
      query: (key) => ({
        url: `/caregiver/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update caregiver
     * @param key
     * @param body
     * @returns Caregiver
     */
    updateCaregiver: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/caregiver/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete caregiver
     * @param key
     * @returns Caregiver
     */
    deleteCaregiver: builder.mutation({
      query: (key) => ({
        url: `/caregiver/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateCaregiverMutation,
  useReadCaregiversQuery,
  useReadCaregiverByKeyQuery,
  useUpdateCaregiverMutation,
  useDeleteCaregiverMutation,
} = caregiverApi;

// export endpoints
export const { endpoints: caregiverApiEndpoints } = caregiverApi;

// export api
export default caregiverApi;
