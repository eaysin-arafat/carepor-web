import {
  TypeVaccineDosesEnum,
  TypeVaccineTypesEnum,
  TypeVaccinesEnum,
} from "@/types/module-types/covax";
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
const vaccineApi = API.injectEndpoints({
  endpoints: (builder) => ({
    ReadVaccineTypes: builder.query<TypeVaccineTypesEnum[], undefined>({
      query: () => ({
        url: "/vaccine-types",
        method: "GET",
      }),
    }),

    ReadVaccineDoses: builder.query<TypeVaccineDosesEnum[], undefined>({
      query: () => ({
        url: "/vaccines-doses",
        method: "GET",
      }),
    }),

    ReadVaccineDosesBYVaccineId: builder.query<TypeVaccineDosesEnum[], number>({
      query: (vaccineId) => ({
        url: `/vaccine-dose/by-vaccinename/${vaccineId}`,
        method: "GET",
      }),
    }),

    ReadVaccines: builder.query<TypeVaccinesEnum[], undefined>({
      query: () => ({
        url: "/vaccines",
        method: "GET",
      }),
    }),
    ReadVaccinesByVaccineTypeId: builder.query<TypeVaccinesEnum[], number>({
      query: (vaccineTypeId) => ({
        url: `/vaccine/by-vaccine-type/${vaccineTypeId}`,
        method: "GET",
      }),
    }),
  }),
});

// export hooks
export const {
  useReadVaccineDosesBYVaccineIdQuery,
  useReadVaccineDosesQuery,
  useReadVaccineTypesQuery,
  useReadVaccinesByVaccineTypeIdQuery,
  useReadVaccinesQuery,
} = vaccineApi;

// export department endpoints
export const { endpoints: vaccineApiEndpoints } = vaccineApi;

// export hooks
export default vaccineApi;
