import PastRecordData from "../shared/past-record/PastRecordData";
import PastRecordWrapper from "../shared/past-record/PastRecordWrpper";

const TreatmentPastRecord = ({ data, handleEdit }) => {
  return (
    <PastRecordWrapper
      isDeleteAble={false}
      isEditAble={true}
      handleEdit={handleEdit}
    >
      <PastRecordData title="Treatment Plan" data={data?.treatmentPlans} />
    </PastRecordWrapper>
  );
};

export default TreatmentPastRecord;
