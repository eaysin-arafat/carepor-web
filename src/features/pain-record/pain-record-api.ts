import { API } from "../API/API";

export interface PainRecord {
  interactionId: string;
  painScales: boolean;
  painScaleId: number;
  clientId: string;
  encounterId: string;
  encounterType: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  modifiedIn: number;
  dateModified: string;
  modifiedBy: string;
  isDeleted: number;
  isSynced: number;
  encounterDate: string;
}

const painRecordApi = API.injectEndpoints({
  endpoints: (builder) => ({
    createPainRecord: builder.mutation({
      query: (body) => ({
        url: "/pain-record",
        method: "POST",
        body,
      }),
      invalidatesTags: ["PainRecords"],
    }),

    readPainRecords: builder.query({
      query: () => ({
        url: "/pain-records",
        method: "GET",
      }),
    }),

    readPainRecordByKey: builder.query({
      query: (key) => ({
        url: `/pain-record/key/${key}`,
        method: "GET",
      }),
    }),

    readPainRecordByClient: builder.query<PainRecord[], string>({
      query: (clientId) => ({
        url: `/pain-record/by-client/${clientId}`,
        method: "GET",
      }),
      providesTags: ["PainRecords"],
    }),

    readPainRecordByEncounter: builder.query({
      query: (encounterId) => ({
        url: `/pain-record/by-encounter/${encounterId}`,
        method: "GET",
      }),
    }),

    updatePainRecord: builder.mutation({
      query: ({ key, body }) => ({
        url: `/pain-record/${key}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["PainRecords"],
    }),

    deletePainRecord: builder.mutation({
      query: (key) => ({
        url: `/pain-record/${key}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PainRecords"],
    }),

    removePainRecord: builder.mutation({
      query: (key) => ({
        url: `/pain-record/remove/${key}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PainRecords"],
    }),
  }),
});

export const {
  useCreatePainRecordMutation,
  useReadPainRecordsQuery,
  useReadPainRecordByKeyQuery,
  useReadPainRecordByClientQuery,
  useReadPainRecordByEncounterQuery,
  useUpdatePainRecordMutation,
  useDeletePainRecordMutation,
  useRemovePainRecordMutation,
} = painRecordApi;

export const { endpoints: painRecordsApiEndpoints } = painRecordApi;

export default painRecordApi;
