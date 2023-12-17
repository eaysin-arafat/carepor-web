import {
  TypeInvestigationByClient,
  TypeInvestigationDashboard,
  TypeInvestigationDashboardArgs,
} from "@/types/module-types/investigation";
import { API } from "../API/API";

const investigationApi = API.injectEndpoints({
  endpoints: (builder) => ({
    readInvestigationByClient: builder.query({
      query: (clientId) => {
        return {
          url: `/investigation-by-client/key/${clientId}`,
          method: "GET",
        };
      },
      transformResponse: (res: TypeInvestigationByClient[]) =>
        transformInvestigationByClient(res),
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
      transformResponse: (res: TypeInvestigationByClient[]) =>
        transformInvestigationByEncounter(res),
      providesTags: ["InvestigationByEncounter"],
    }),

    readInvestigation: builder.query<TypeMergeInvestigations, string>({
      query: (id) => {
        return {
          url: `/investigation/key/${id}`,
          method: "GET",
        };
      },
      transformResponse: (res) => {
        //@ts-ignore
        const testData = getTestData(res?.test);
        //@ts-ignore
        // delete res?.test;
        return {
          //@ts-ignore
          ...res,
          ...testData,
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
        "InvestigationByEncounter",
        "InvestigationByClientId",
        "InvestigationById", //
      ],
    }),
    updateInvestigationResult: builder.mutation({
      query: ({ key, body }) => ({
        url: "/result/" + key,
        method: "PUT",
        body,
      }),
      invalidatesTags: [
        "InvestigationDashboard",
        "InvestigationByEncounter",
        "InvestigationByClientId",
        "InvestigationById", //
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
      transformResponse: (res) => transformInvestigationsForDashboard(res),
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
  useUpdateInvestigationMutation,
  useUpdateInvestigationResultMutation,
} = investigationApi;

// export endpoints
export const { endpoints: interactionApiEndpoints } = investigationApi;

// export api
export default investigationApi;

// Data transformations
const transformInvestigationByEncounter = (res) => {
  const investigations = res.map((data) => {
    const testData = getTestData(data?.test);
    let findResult =
      data?.results?.find(
        (item) => item.investigationId == data?.interactionId
      ) || null;

    // delete data.client;
    delete data.test;
    delete data.results;
    return {
      ...data,
      ...testData,
      result: findResult,
      client: {
        firstName: data?.client?.firstName,
        surname: data?.client?.surname,
      },
    };
  });

  return investigations;
};
const transformInvestigationsForDashboard = (res) => {
  const resInvestigations = Array.isArray(res.investigations)
    ? res?.investigations
    : [];
  const investigations = resInvestigations.map((data) => {
    const testData = getTestData(data?.test);
    let findResult =
      data?.results?.find(
        (res) => res.investigationId == data?.interactionId
      ) || null;
    // const testName: string | number = data?.test?.title;
    // const clientName: string  = data?.client

    // delete data.client;
    delete data.test;
    // delete data.results;
    return {
      ...data,
      // testName,
      // testNameDetails: testName,
      ...testData,
      result: findResult,
      client: {
        firstName: data?.client?.firstName,
        surname: data?.client?.surname,
      },
    };
  });

  return {
    ...res,
    encounterId: res?.encounterID,
    investigations: investigations,
  };
};
const transformInvestigationByClient = (
  response
): TypeMergeInvestigationsClient[] => {
  const merge = response?.map((item) => {
    const composite =
      (Array.isArray(item?.investigationWithOutComposite) &&
        item?.investigationWithOutComposite) ||
      [];
    const withComposite =
      (Array.isArray(item?.investigationWithComposite) &&
        item?.investigationWithComposite) ||
      [];
    const dataMinimize = [...composite, ...withComposite].map((data) => {
      const testData = getTestData(data?.test);
      let findResult =
        data?.results?.find(
          (res) => res.investigationId == data?.interactionID
        ) || null;

      delete data.client;
      delete data.test;
      delete data.results;
      return {
        ...testData,
        result: findResult,
        ...data,
      };
    });

    return {
      mergeInvestigations: dataMinimize,
      encounterID: item.encounterID,
      encounterId: item.encounterID,
      clientID: item?.clientID,
      dateCreated: item?.dateCreated,
      encounterDate: item?.encounterDate,
      createdIn: item?.createdIn,
      createdBy: item?.createdBy,
      rtkTransformed: true,
    };
  });
  console.log(merge);

  return merge;
};
//
// useEffect(() => {
//   setTestType(data?.test?.testSubtype?.testTypeId);
// }, [data?.test?.testSubtype?.testTypeId]);
// useEffect(() => {
//   setSubTestType(data?.test?.subtypeId);
// }, [data?.test?.subtypeId]);
// useEffect(() => {
//   setTestObj({
//     value: data?.testID,
//     label: data?.test?.title,
//   });
// }, [data?.testID, data?.test?.title]);

export type TypeResult = {
  interactionId: string;
  resultDate: string;
  resultDescriptive: string;
  commentOnResult: string;
  isResultNormal: number;
  measuringUnit: {
    description: string;
  };
  minumumRange: number | string;
  maxumumRange: number | string;
  resultNumeric: number;
  investigationId: string;
  encounterId: string;
  encounterType: number;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: false;
  isSynced: false;
  results: any;
  resultOptionId: string;
  measuringUnitId: string;
};

export type TypeMergeInvestigations = {
  compositeName?: string;
  orderNumber: number | string;
  interactionID?: string;
  interactionId: string;
  testResult: string;
  orderDate: string;
  encounterID: string;
  quantity: number;
  sampleQuantity: number;
  piority: number;
  additionalComment: string;
  isResultReceived: true;
  clinicianID: string;
  clinicianId: string;
  testID: number;
  clientID: string;
  result?: TypeResult | null;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  isDeleted: boolean;
  isSynced: boolean;
  imagingTestDetails?: string;
  unitTest: string;
  test: object;
  //customization
  client: {
    firstName: string;
    surname: string;
  };
  testName: string;
  testId: any;
  testSubtype: string | number;
  testSubtypeId: number;
  testType: string | number;
  testTypeId: any;
  testNameDetails: string;
};

export type TypeMergeInvestigationsClient = {
  mergeInvestigations: TypeMergeInvestigations[];
  encounterID: string;
  clientID: string;
  dateCreated: string;
  encounterDate: string;
  createdIn: number;
  createdBy: string;
  rtkTransformed?: boolean;
};

//
const getTestData = (test) => {
  const testName: string = test?.title || "";
  const testSubtype: string | number = test?.testSubtype?.description;
  const testSubtypeId: number | undefined = test?.subtypeId;
  const testTypeId = test?.testSubtype?.testTypeId;
  const testType: string | number = test?.testSubtype?.testType?.description;
  const add = testSubtype && testType ? ` (${testSubtype} ${testType})` : "";
  let testNameDetails = `${testName + add}`;

  return {
    testName,
    testId: test?.oid,
    testSubtype,
    testSubtypeId,
    testType,
    testTypeId,
    testNameDetails,
  };
};
