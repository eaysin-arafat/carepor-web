import { API } from "../API/API";

export interface ConstitutionalOptionType {
  oid: number;
  description: string;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

const constitutionalSymptomApi = API.injectEndpoints({
  endpoints: (builder) => ({
    readConstitutionalOptions: builder.query<ConstitutionalOptionType[], null>({
      query: () => `/constitutional-symptoms`,
    }),
    readConstitutionalSymptomsByOption: builder.query({
      query: (optionId) =>
        `constitutional-symptom-types-by-symptom/${optionId}`,
    }),
  }),
});

export const {
  useReadConstitutionalOptionsQuery,
  useReadConstitutionalSymptomsByOptionQuery,
} = constitutionalSymptomApi;

export default constitutionalSymptomApi;
