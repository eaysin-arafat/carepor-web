import Section from "@/components/core/card/Section";
import Textarea from "@/components/core/form-elements/textarea";
import SelectContainer from "@/components/core/selectable-container/SelectContainer";
import {
  ComplaintsAndHistoriesErrorType,
  ComplaintsAndHistoriesStateType,
  OptionItem,
} from "../constant";

interface ChiefComplaintsFormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg: ComplaintsAndHistoriesErrorType;
  complaintsAndHistoryData: ComplaintsAndHistoriesStateType;
  handleSerostatusDisClosureChange: (id: number) => void;
  serostatusDisclosure: OptionItem[];
}

const ChiefComplaintsForm = ({
  handleChange,
  errorMsg,
  complaintsAndHistoryData,
  handleSerostatusDisClosureChange,
  serostatusDisclosure,
}: ChiefComplaintsFormProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="space-y-4">
          <Textarea
            required
            label="History"
            name="chiefComplaints"
            errMsg={errorMsg?.chiefComplaints}
            value={complaintsAndHistoryData?.chiefComplaints}
            onChange={handleChange}
          />
          <Textarea
            required
            label="Examination"
            name="historyOfChiefComplaint"
            errMsg={errorMsg?.historyOfChiefComplaint}
            value={complaintsAndHistoryData?.historyOfChiefComplaint}
            onChange={handleChange}
          />
        </div>
        <Section title="Serostatus and Disclosure">
          <SelectContainer
            data={serostatusDisclosure}
            errMsg={errorMsg?.hivStatus}
            handleChange={handleSerostatusDisClosureChange}
          />
        </Section>
      </div>
    </div>
  );
};

export default ChiefComplaintsForm;
