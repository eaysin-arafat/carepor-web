import { API } from "../API/API";

const clientApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create client
     * @param body
     * @returns Client
     */
    createClient: builder.mutation({
      query: (body) => ({
        url: "/client",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read clients
     * @returns Client[]
     */
    readClients: builder.query({
      query: () => ({
        url: "/clients",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read client by key
     * @param key
     * @returns Client
     */
    readClientByKey: builder.query({
      query: (key) => ({
        url: `/client/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read client details for TOP card by key
     * @param key
     * @returns ClientDetailsForTOPCard
     */
    readClientDetailsForTOPCardByKey: builder.query({
      query: (key) => ({
        url: `/client-details-for-topcard/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read client details for right card by key
     * @param key
     * @returns ClientDetailsForRightCard
     */
    readClientDetailsForRightCardByKey: builder.query({
      query: (key) => ({
        url: `/client-details-for-rightcard/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read client by NRC
     * @param NRC
     * @returns Client
     */
    readClientByNRC: builder.query({
      query: (NRC) => ({
        url: `/client/NRC/${NRC}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read client by NUPN
     * @param NUPN
     * @returns Client
     */
    readClientByNUPN: builder.query({
      query: (NUPN) => ({
        url: `/client/NUPN/${NUPN}`,
        method: "GET",
      }),
    }),

    /**
     * @description react client by nupn and gender
     * @param NUPN
     * @returns Client
     *
     */

    readClientByNupnAndGender: builder.query({
      query: (NUPN) => ({
        url: `client/NUPN-Gender/${NUPN}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read client by cellphone
     * @param cellphone
     * @returns Client
     */
    readClientByCellphone: builder.query({
      query: (cellphone) => ({
        url: `/client/Cellphone/${cellphone}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read client by client basic info
     * @param clientBasicInfo
     * @returns Client
     * */

    readClientByClientBasicInfo: builder.query({
      query: (clientBasicInfo) => ({
        url: `/client/clientbasicinfo/${clientBasicInfo}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read client by client no dob
     * @param clientNoDob
     * @returns Client
     * */

    readClientByClientNoDob: builder.query({
      query: (clientNoDob) => ({
        url: `/client/clientnodob/${clientNoDob}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update client
     * @param key
     * @param body
     * @returns Client
     * */

    updateClient: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/client/${key}`,
        method: "PUT",
        body,
      }),
    }),
    /**
     * @description This endpoint is used to update client mother
     * @param key
     * @param body
     * @returns Client
     * */

    updateClientMother: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/client/link-mother/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete client
     * @param key
     * @returns Client
     * */

    deleteClient: builder.mutation({
      query: (key) => ({
        url: `/client/${key}`,
        method: "DELETE",
      }),
    }),

    /**
     * @description This endpoint is used to read client by key
     * @param key
     * @returns Client
     * */

    clientReadByKey: builder.query({
      query: (key) => ({
        url: `/client/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read client details for TOP card by key
     * @param key
     * @returns ClientDetailsForTOPCard
     * */

    readClientDetailsForTOPCard: builder.query({
      query: (key) => ({
        url: `/client-details-for-topcard/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read client details for right card by key
     * @param key
     * @returns ClientDetailsForRightCard
     * */

    readClientDetailsForRightCard: builder.query({
      query: (key) => ({
        url: `/client-details-for-rightcard/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update client
     * @param key
     * @param body
     * @returns Client
     * */

    clientUpdate: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `/client/${key}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateClientMutation,
  useReadClientsQuery,
  useReadClientByKeyQuery,
  useReadClientDetailsForTOPCardByKeyQuery,
  useReadClientDetailsForRightCardByKeyQuery,
  useReadClientByNRCQuery,
  useReadClientByNUPNQuery,
  useReadClientByCellphoneQuery,
  useReadClientByClientBasicInfoQuery,
  useReadClientByClientNoDobQuery,
  useUpdateClientMutation,
  useUpdateClientMotherMutation,
  useDeleteClientMutation,
  useClientReadByKeyQuery,
  useReadClientDetailsForTOPCardQuery,
  useReadClientDetailsForRightCardQuery,
  useClientUpdateMutation,
} = clientApi;

// export endpoints
export const { endpoints: clientApiEndpoints } = clientApi;

// export api
export default clientApi;
