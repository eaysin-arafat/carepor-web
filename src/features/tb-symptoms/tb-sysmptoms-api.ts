import { API } from "../API/API";

export interface TbSymptomsType {
  oid: number;
  description: string;
  createdIn: number;
  dateCreated: string;
  createdBy: string;
  modifiedIn: number;
  dateModified: string;
  modifiedBy: string;
  isDeleted: boolean;
  isSynced: boolean;
}

const tbSymptomsApi = API.injectEndpoints({
  endpoints: (builder) => ({
    readTbSymptoms: builder.query<TbSymptomsType[], null>({
      query: () => `/tb-symptoms`,
    }),
  }),
});

export const { useReadTbSymptomsQuery } = tbSymptomsApi;
export default tbSymptomsApi;
