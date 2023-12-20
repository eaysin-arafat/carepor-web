import PastRecordData from "../shared/past-record/PastRecordData";
import PastRecordWrapper from "../shared/past-record/PastRecordWrpper";

const DiagnosisPastRecord = ({ data }) => {
  return (
    <PastRecordWrapper>
      <PastRecordData title="Chief complaints" data={data?.chiefComplaints} />
      <PastRecordData
        title="History of Chief complaints"
        data={data?.historyOfChiefComplaint}
      />
    </PastRecordWrapper>
  );
};

export default DiagnosisPastRecord;
