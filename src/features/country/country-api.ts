import { API } from "../API/API";

const countryApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create country
     * @param body
     * @returns Country
     */
    createCountry: builder.mutation({
      query: (body) => ({
        url: "/country",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read countries
     * @returns Country[]
     */
    readCountries: builder.query({
      query: () => ({
        url: "/countries",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read country by key
     * @param key
     * @returns Country
     */
    readCountryByKey: builder.query({
      query: (key) => ({
        url: `/country/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update country
     * @param key
     * @param body
     * @returns Country
     */
    updateCountry: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/country/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete country
     * @param key
     * @returns Country
     */
    deleteCountry: builder.mutation({
      query: (key) => ({
        url: `/country/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateCountryMutation,
  useReadCountriesQuery,
  useReadCountryByKeyQuery,
  useUpdateCountryMutation,
  useDeleteCountryMutation,
} = countryApi;
export const { endpoints: countryEndpoints } = countryApi;
export default countryApi;
