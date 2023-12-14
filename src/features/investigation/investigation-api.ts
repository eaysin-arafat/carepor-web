import {
  TypeInvestigationByClient,
  TypeInvestigationDashboard,
  TypeInvestigationDashboardArgs,
} from "@/types/module-types/investigation";
import { API } from "../API/API";

const investigationApi = API.injectEndpoints({
  endpoints: (builder) => ({
    readInvestigationByClient: builder.query<
      TypeInvestigationByClient[],
      string
    >({
      query: (clientId) => {
        return {
          url: `/investigation-by-client/key/${clientId}`,
          method: "GET",
        };
      },
      providesTags: ["InvestigationByClientId"],
    }),
    createInvestigation: builder.mutation({
      query: (body) => ({
        url: "/investigation",
        method: "POST",
        body,
      }),
      invalidatesTags: ["InvestigationByClientId"],
    }),

    createCompositeInvestigation: builder.mutation({
      query: (body) => ({
        url: "/investigation/compositetest",
        method: "POST",
        body,
      }),
      invalidatesTags: ["InvestigationByClientId"],
    }),
    updateInvestigation: builder.mutation({
      query: ({ id, body }) => ({
        url: `/investigation/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["InvestigationByClientId"],
    }),
    readInvestigationByEncounter: builder.query({
      query: (encounterId) => {
        return {
          url: `/investigation-by-encounter/key/${encounterId}`,
          method: "GET",
        };
      },
      providesTags: ["InvestigationByEncounter"],
    }),
    readInvestigation: builder.query({
      query: (id) => {
        return {
          url: `/investigation/key/${id}`,
          method: "GET",
        };
      },
      providesTags: ["InvestigationById"],
    }),
    createInvestigationResult: builder.mutation({
      query: (body) => ({
        url: "/result",
        method: "POST",
        body,
      }),
      invalidatesTags: [
        "InvestigationDashboard",
        "InvestigationByClientId",
        "InvestigationById",
      ],
    }),
    createInvestigationSampleCollection: builder.mutation({
      query: ({ id, body }) => ({
        url: `/investigation/sample-collection/${id}`, //`investigation/sample-collection
        method: "PUT",
        body,
      }),
      invalidatesTags: ["InvestigationDashboard"], // "InvestigationByClientId"
    }),
    readInvestigationsForDashboard: builder.query<
      TypeInvestigationDashboard,
      TypeInvestigationDashboardArgs
    >({
      query: ({
        facilityId,
        pageNo = 1,
        itemPerPage = 10,
        PatientName = "",
        investigationDateSearch = "",
      }) => ({
        url: `/investigation/investigation-dashboard/${facilityId}?page=${pageNo}&pageSize=${itemPerPage}&PatientName=${PatientName.replace(
          / /g,
          "%20"
        )}&investigationDateSearch=${dateStringformatter(
          investigationDateSearch
        )}`,
        method: "GET",
      }),
      providesTags: ["InvestigationDashboard"],
    }),
  }),
});

const dateStringformatter = (dataString: string): string => {
  if (!dataString) return "";
  let date = new Date(dataString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}%2F${month}%2F${year}`;
};

// export hooks
export const {
  useCreateCompositeInvestigationMutation,
  useCreateInvestigationMutation,
  useCreateInvestigationResultMutation,
  useCreateInvestigationSampleCollectionMutation,
  useReadInvestigationByClientQuery,
  useReadInvestigationByEncounterQuery,
  useReadInvestigationQuery,
  useReadInvestigationsForDashboardQuery,
} = investigationApi;

// export endpoints
export const { endpoints: interactionApiEndpoints } = investigationApi;

// export api
export default investigationApi;
