import { API } from "../API/API";
import { BedType } from "../bed/bed-api";

export type Encounter = {
  oid: string;
  ipdAdmissionDate: string;
  admissionNote: string;
  ipdDischargeDate: string;
  dischargeNote: string;
  bedId: number;
  bed: BedType;
  clientId: string;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  dateModified: string;
  isDeleted: boolean;
  isSynced: boolean;
};

const medicalEncounterApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create encounter
     * @param body
     * @returns Encounter
     */
    createEncounter: builder.mutation({
      query: (body) => ({
        url: "encounter",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Encounters", "Admissions"],
    }),

    /**
     * @description This endpoint is used to read encounters
     * @returns Encounter[]
     */
    readEncounters: builder.query({
      query: () => ({
        url: "encounters",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read encounter by key
     * @param key
     * @returns Encounter
     */
    readEncounterByKey: builder.query({
      query: (key) => ({
        url: `encounter/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read encounter by client
     * @param key
     * @returns Encounter
     */
    readEncounterByClient: builder.query({
      query: (key) => ({
        url: `encounter/client/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read encounter list by client
     * @param key
     * @returns Encounter
     */
    readEncounterListByClient: builder.query({
      query: (key) => ({
        url: `encounters/client/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read admission list by client
     * @param key
     * @returns Encounter
     */
    readAdmissionListByClient: builder.query<Encounter[], string>({
      query: (clientId) => ({
        url: `encounters/addmissions-by-client/${clientId}`,
        method: "GET",
      }),
      providesTags: ["Admissions"],
    }),

    /**
     * @description This endpoint is used to update encounter
     * @param key
     * @param body
     * @returns Encounter
     */
    updateEncounter: builder.mutation({
      query: ({ key, body }) => ({
        url: `encounter/${key}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Admissions"],
    }),

    /**
     * @description This endpoint is used to update admission
     * @param key
     * @param body
     * @returns Encounter
     */
    updateAdmission: builder.mutation({
      query: ({ key, body }) => ({
        url: `encounter/admission/${key}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Admissions"],
    }),

    /**
     * @description This endpoint is used to delete encounter
     * @param key
     * @returns Encounter
     */
    deleteEncounter: builder.mutation({
      query: (key) => ({
        url: `encounter/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateEncounterMutation,
  useReadEncountersQuery,
  useReadEncounterByKeyQuery,
  useReadEncounterByClientQuery,
  useReadEncounterListByClientQuery,
  useUpdateEncounterMutation,
  useUpdateAdmissionMutation,
  useDeleteEncounterMutation,
  useReadAdmissionListByClientQuery,
} = medicalEncounterApi;

// export endpoints
export const { endpoints: medicalEncounterApiEndpoints } = medicalEncounterApi;

// export api
export default medicalEncounterApi;
