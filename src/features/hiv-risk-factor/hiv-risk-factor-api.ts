import { API } from "../API/API";

const hivRiskFactorApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create hiv risk factor
     * @param body
     * @returns HIVRiskFactor
     */
    createHIVRiskFactor: builder.mutation({
      query: (body) => ({
        url: "hiv-risk-factor",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read hiv risk factors
     * @returns HIVRiskFactor[]
     */
    readHIVRiskFactors: builder.query({
      query: () => ({
        url: "hiv-risk-factors",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read hiv risk factor by key
     * @param key
     * @returns HIVRiskFactor
     */
    readHIVRiskFactorByKey: builder.query({
      query: (key) => ({
        url: `hiv-risk-factor/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update hiv risk factor
     * @param key
     * @param body
     * @returns HIVRiskFactor
     */
    updateHIVRiskFactor: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `hiv-risk-factor/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete hiv risk factor
     * @param key
     * @returns HIVRiskFactor
     */
    deleteHIVRiskFactor: builder.mutation({
      query: (key) => ({
        url: `hiv-risk-factor/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateHIVRiskFactorMutation,
  useReadHIVRiskFactorsQuery,
  useReadHIVRiskFactorByKeyQuery,
  useUpdateHIVRiskFactorMutation,
  useDeleteHIVRiskFactorMutation,
} = hivRiskFactorApi;

// export endpoints
export const { endpoints: hivRiskFactorApiEndpoints } = hivRiskFactorApi;

// export api
export default hivRiskFactorApi;
