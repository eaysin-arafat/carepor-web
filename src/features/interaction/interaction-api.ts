import { API } from "../API/API";

const interactionApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create interaction
     * @param body
     * @returns Interaction
     */
    createInteraction: builder.mutation({
      query: (body) => ({
        url: "/interaction",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read interactions
     * @returns Interaction[]
     */
    readInteractions: builder.query({
      query: () => ({
        url: "/interactions",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read interaction by key
     * @param key
     * @returns Interaction
     */
    readInteractionByKey: builder.query({
      query: (key) => ({
        url: `/interaction/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update interaction
     * @param key
     * @param body
     * @returns Interaction
     */
    updateInteraction: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/interaction/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete interaction
     * @param key
     * @returns Interaction
     */
    deleteInteraction: builder.mutation({
      query: (key) => ({
        url: `/interaction/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateInteractionMutation,
  useReadInteractionsQuery,
  useReadInteractionByKeyQuery,
  useUpdateInteractionMutation,
  useDeleteInteractionMutation,
} = interactionApi;

// export endpoints
export const { endpoints: interactionApiEndpoints } = interactionApi;

// export api
export default interactionApi;
