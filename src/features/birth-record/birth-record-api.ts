import { TypeBirthRecord } from "@/types/module-types/birth-records";
import { API } from "../API/API";

const birthRecordApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description Get Birth record for client
     * @param clientId
     * @returns
     */
    readBirthRecordByClientId: builder.query<TypeBirthRecord[], string>({
      query: (clientId) => ({
        url: `/birth-record/by-client/${clientId}`,
        method: "GET",
      }),
      providesTags: ["ClientBirthRecord"],
    }),
    /**
     * @description Create birth record
     * @param body
     * @returns
     */
    createBirthRecord: builder.mutation({
      query: (body) => ({
        url: "/birth-record",
        method: "POST",
        body,
      }),
      invalidatesTags: ["ClientBirthRecord"],
    }),
    /**
     * @description Create birth record
     * @param body
     * @returns
     */
    updateBirthRecord: builder.mutation({
      query: ({ key, body }) => ({
        url: "/birth-record/" + key,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["ClientBirthRecord"],
    }),
  }),
});

// export hooks
export const {
  useCreateBirthRecordMutation,
  useUpdateBirthRecordMutation,
  useReadBirthRecordByClientIdQuery,
} = birthRecordApi;

// export endpoints
export const { endpoints: birthRecordApiEndpoints } = birthRecordApi;

// export api
export default birthRecordApi;
