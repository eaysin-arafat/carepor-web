import { TypeCovax, TypeImmunizationVaccine } from "@/types/module-types/covax";
import { API } from "../API/API";
export interface Department {
  oid: number;
  description: string;
  facilityId: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

// define department api
const covaxApi = API.injectEndpoints({
  endpoints: (builder) => ({
    // Create Covax/ PreAssessment
    CreateCovax: builder.mutation({
      query: (body) => ({
        url: `/covax`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["CovaxPreAssessment"],
    }),
    // Update Covax/PreAssessment
    UpdateCovax: builder.mutation({
      query: ({ key, body }) => ({
        url: "/covax/" + key,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["CovaxPreAssessment"],
    }),
    // Read PreAssessment By ClientId
    ReadCovaxByClientId: builder.query<TypeCovax[], string>({
      query: (clientId) => ({
        url: `/covax/by-client/${clientId}`,
        method: "GET",
      }),
      providesTags: ["CovaxPreAssessment"],
    }),
    // Reade Vaccine/Immunization by clientId
    ReadVaccineByClient: builder.query<TypeImmunizationVaccine[], string>({
      query: (clientId) => ({
        url: `${"/immunization-record/by-client/"}${clientId}`,
        method: "GET",
      }),
      providesTags: ["VaccineRecord"],
    }),
    // Create Vaccine/Immunization record
    CreateVaccine: builder.mutation({
      query: (body) => ({
        url: "/vaccine-record",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["VaccineRecord"],
    }),
    // Update Vaccine/Immunization record
    UpdateVaccine: builder.mutation({
      query: ({ body, key }) => ({
        url: "/vaccine-record/" + key,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["VaccineRecord"],
    }),
    // Create Adverse Event record
    CreateAdverseEffect: builder.mutation({
      query: (body) => ({
        url: "/adverse-event",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["VaccineRecord"],
    }),
    // Update Adverse Event record
    UpdateAdverseEffect: builder.mutation({
      query: ({ body, key }) => ({
        url: "/adverse-event/" + key,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["VaccineRecord"],
    }),
    // Read Adverse Event Immunization
    // ReadAdverseEffect: builder.query({
    //   query: ({ immunizationId }) => ({
    //     url: "/adverse-event/by-immunization/" + immunizationId,
    //     method: "Get",
    //   }),
    //   providesTags: ["AdverseByImmunization"],
    // }),
  }),
});

// export hooks
export const {
  useCreateCovaxMutation,
  useUpdateCovaxMutation,
  useReadCovaxByClientIdQuery,
  useReadVaccineByClientQuery,
  useCreateVaccineMutation,
  useUpdateVaccineMutation,
  useCreateAdverseEffectMutation,
  useUpdateAdverseEffectMutation,
  // useReadAdverseEffectQuery,
} = covaxApi;

// export department endpoints
export const { endpoints: covaxApiEndpoints } = covaxApi;

// export hooks
export default covaxApi;
