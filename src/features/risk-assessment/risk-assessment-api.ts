import { API } from "../API/API";

const riskAssessmentApi = API.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @description This endpoint is used to create risk assessment
     * @param body
     * @returns RiskAssessment
     */
    createRiskAssessment: builder.mutation({
      query: (body) => ({
        url: "risk-assessment",
        method: "POST",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to read risk assessments
     * @returns RiskAssessment[]
     */
    readRiskAssessments: builder.query({
      query: () => ({
        url: "risk-assessments",
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read risk assessment by key
     * @param key
     * @returns RiskAssessment
     */

    readRiskAssessmentByKey: builder.query({
      query: (key) => ({
        url: `risk-assessment/key/${key}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to read risk assessment by hts
     * @param HTSId
     * @returns RiskAssessment
     */
    readRiskAssessmentByHTS: builder.query({
      query: (HTSId) => ({
        url: `risk-assessment/risk-assessment-by-hts/${HTSId}`,
        method: "GET",
      }),
    }),

    /**
     * @description This endpoint is used to update risk assessment
     * @param key
     * @param body
     * @returns RiskAssessment
     */
    updateRiskAssessment: builder.mutation({
      query: ({ key, ...body }) => ({
        url: `risk-assessment/${key}`,
        method: "PUT",
        body,
      }),
    }),

    /**
     * @description This endpoint is used to delete risk assessment
     * @param key
     * @returns RiskAssessment
     */
    deleteRiskAssessment: builder.mutation({
      query: (key) => ({
        url: `risk-assessment/${key}`,
        method: "DELETE",
      }),
    }),
  }),
});

// export hooks
export const {
  useCreateRiskAssessmentMutation,
  useReadRiskAssessmentsQuery,
  useReadRiskAssessmentByKeyQuery,
  useReadRiskAssessmentByHTSQuery,
  useUpdateRiskAssessmentMutation,
  useDeleteRiskAssessmentMutation,
} = riskAssessmentApi;

// export endpoints
export const { endpoints: riskAssessmentApiEndpoints } = riskAssessmentApi;

// export api
export default riskAssessmentApi;
