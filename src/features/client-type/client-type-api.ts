import { API } from "../API/API";

const clientTypeApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create client type
     * @param body
     * @returns ClientType
     */
    createClientType: builder.mutation({
      query: (body) => ({
        url: "/client-type",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read client types
     * @returns ClientType[]
     */
    readClientTypes: builder.query({
      query: () => ({
        url: "/client-types",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read client type by key
     * @param key
     * @returns ClientType
     */
    readClientTypeByKey: builder.query({
      query: (key) => ({
        url: `/client-type/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update client type
     * @param key
     * @param body
     * @returns ClientType
     */
    updateClientType: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/client-type/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete client type
     * @param key
     * @returns ClientType
     */
    deleteClientType: builder.mutation({
      query: (key) => ({
        url: `/client-type/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateClientTypeMutation,
  useReadClientTypesQuery,
  useReadClientTypeByKeyQuery,
  useUpdateClientTypeMutation,
  useDeleteClientTypeMutation,
} = clientTypeApi;

// export endpoints
export const { endpoints: clientTypeApiEndpoints } = clientTypeApi;

// export api
export default clientTypeApi;
