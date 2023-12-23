import {
  EnumCovidComorbidCondition,
  EnumExposureRisks,
} from "@/enum/enumerators";
import { TypeCovidPageRecord } from "@/types/module-types/covid";
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

type TypePaginateQuery<T> = {
  key: T;
  page?: number;
  pageSize?: number;
};

// define department api
const covaxApi = API.injectEndpoints({
  endpoints: (builder) => ({
    // Create Covid Record
    CreateCovid: builder.mutation({
      query: (body) => ({
        url: "/covid",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Covid"],
    }),
    //  Update Covid record by interactionId
    UpdateCovid: builder.mutation({
      query: ({ body, key }) => ({
        url: "/covid/" + key,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Covid"],
    }),
    // Read/GET Covid by client Id
    // prettier-ignore
    ReadCovidByClientId: builder.query<TypeCovidPageRecord, TypePaginateQuery<string>>({
      query: ({ key, page = 1, pageSize = 5 }) => ({
        url: `${"/covid/by-client/"}${key}?page=${page}&pageSize=${pageSize}`,
        method: "GET",
      }),
      providesTags: ["Covid"],
      transformResponse: (response:TypeCovidPageRecord) => {
        const data = Array.isArray(response?.data)
          ? response?.data?.slice()?.map((item) => {
            const mergeCovidSymptomScreenings = item.covidSymptomScreenings?.map(d => (
              {oid:d?.covidSymptom?.oid , description: d?.covidSymptom?.description}
              ))
            const mergeCovidComorbidities = item.covidComorbidities?.map((data) => ({ 
                  oid:data?.covidComorbidityConditions,  
                  description: EnumCovidComorbidCondition[data?.covidComorbidityConditions]
                }))
            const mergeExposureRisks = item.exposureRisks?.map((data) => ({ 
              oid:data?.exposureRisks,  
              description: EnumExposureRisks[data?.exposureRisks]
            }))

              return { 
                ...item, 
                mergeCovidSymptomScreenings, 
                mergeCovidComorbidities,
                mergeExposureRisks,
                // removed
                covidSymptomScreenings:[],
                covidComorbidities:[],
                exposureRisks:[],
                client:null,
              };
            })
          : [];
        return {
          ...response,
          data,
          
        };
      },
    }),
    // Covid symptoms
    ReadCovidSymptoms: builder.query({
      query: () => ({
        url: "/covid-symptoms/",
        method: "GET",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateCovidMutation,
  useUpdateCovidMutation,
  useReadCovidByClientIdQuery,
  useReadCovidSymptomsQuery,
} = covaxApi;

// export department endpoints
export const { endpoints: covidApiEndpoints } = covaxApi;

// export hooks
export default covaxApi;
