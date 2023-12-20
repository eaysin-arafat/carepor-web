export interface CreateComplaintsAndHistoriesProps {
  toggler: () => void;
  encounterType: number;
}

export interface EditComplaintsAndHistoriesProps {
  toggler: () => void;
  encounterType: number;
}

export interface ComplaintsAndHistoriesErrorType {
  chiefComplaints?: string;
  historyOfChiefComplaint?: string;
  hivStatus?: string;
}

export interface OptionItem {
  id: number;
  label: string;
  isSelected: boolean;
}

export interface ComplaintsAndHistoriesStateType {
  chiefComplaints: string;
  historyOfChiefComplaint: string;
}

export const complaintsAndHistoryInitialState = {
  chiefComplaints: "",
  historyOfChiefComplaint: "",
};

// serostatus and disclosure data
export const serostatusAndDisclosureData: OptionItem[] = [
  { id: 1, label: "Positive", isSelected: false },
  { id: 2, label: "Negative", isSelected: false },
  { id: 3, label: "Indeterminate", isSelected: false },
  { id: 4, label: "Detectable", isSelected: false },
  { id: 5, label: "Not detected", isSelected: false },
];
