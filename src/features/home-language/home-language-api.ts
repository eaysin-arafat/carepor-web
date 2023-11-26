import { API } from "../API/API";

const homeLanguageApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create home language
     * @param body
     * @returns HomeLanguage
     */
    createHomeLanguage: builder.mutation({
      query: (body) => ({
        url: "/home-language",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read home languages
     * @returns HomeLanguage[]
     */
    readHomeLanguages: builder.query({
      query: () => ({
        url: "/home-languages",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read home language by key
     * @param key
     * @returns HomeLanguage
     */
    readHomeLanguageByKey: builder.query({
      query: (key) => ({
        url: `/home-language/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update home language
     * @param key
     * @param body
     * @returns HomeLanguage
     */
    updateHomeLanguage: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/home-language/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete home language
     * @param key
     * @returns HomeLanguage
     */
    deleteHomeLanguage: builder.mutation({
      query: (key) => ({
        url: `/home-language/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateHomeLanguageMutation,
  useReadHomeLanguagesQuery,
  useReadHomeLanguageByKeyQuery,
  useUpdateHomeLanguageMutation,
  useDeleteHomeLanguageMutation,
} = homeLanguageApi;

// export endpoints
export const { endpoints: homeLanguageEndpoints } = homeLanguageApi;

// export api
export default homeLanguageApi;
