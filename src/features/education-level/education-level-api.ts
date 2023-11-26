import { API } from "../API/API";

const educationLevelApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create education level
     * @param body
     * @returns EducationLevel
     */
    createEducationLevel: builder.mutation({
      query: (body) => ({
        url: "education-level",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read education levels
     * @returns EducationLevel[]
     */
    readEducationLevels: builder.query({
      query: () => ({
        url: "education-levels",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read education level by key
     * @param key
     * @returns EducationLevel
     */
    readEducationLevelByKey: builder.query({
      query: (key) => ({
        url: `education-level/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update education level
     * @param key
     * @param body
     * @returns EducationLevel
     */
    updateEducationLevel: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `education-level/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete education level
     * @param key
     * @returns EducationLevel
     */
    deleteEducationLevel: builder.mutation({
      query: (key) => ({
        url: `education-level/${key}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

// export hooks
export const {
  useCreateEducationLevelMutation,
  useReadEducationLevelsQuery,
  useReadEducationLevelByKeyQuery,
  useUpdateEducationLevelMutation,
  useDeleteEducationLevelMutation,
} = educationLevelApi;

// export endpoints
export const { endpoints: educationLevelApiEndpoints } = educationLevelApi;

// export api
export default educationLevelApi;
