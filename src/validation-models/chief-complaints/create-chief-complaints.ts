import { ComplaintsAndHistoriesErrorType } from "@/pages/chief-complaints-opd/constant";

interface CreateChiefComplaints {
  chiefComplaints: string;
  historyOfChiefComplaint: string;
  hivStatus: number;
}

export const createChiefComplaintsValidator = (data: CreateChiefComplaints) => {
  const error: ComplaintsAndHistoriesErrorType = {};

  if (!data.chiefComplaints) error.chiefComplaints = "Required";
  if (!data.historyOfChiefComplaint) error.historyOfChiefComplaint = "Required";
  if (!data.hivStatus) error.hivStatus = "Required";

  return {
    isValid: Object.keys(error).length === 0,
    error,
  };
};
