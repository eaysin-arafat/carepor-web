import CancelAndAddButton from '@/components/core/buttons/CancelAndAddButton';

import Textarea from '@/components/core/form-elements/textarea';
import DefaultOpenModal from '@/components/core/modal/DefaultOpenModal';
import PastRecordContainers from '@/components/past-record-containers/PastRecordContainers';
import { useReadChiefComplaintByClientQuery } from '@/features/chief-complaint/chief-complaint-api';
import PastEncounters from '@/pages/chief-complaints/create/PastEncounters';
import { Loader } from 'react-feather';

const EditPresentingComplaints = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    'a1497272-3783-46f6-922a-08dbd06dc4d8'
  );

  return (
    <DefaultOpenModal title="Present History" isShow={true} toggler={toggler}>
      <form>
        <div className="space-y-4">
          <Textarea label="Presenting Complaint" />
          <Textarea label="History Of Presenting Complaint" />
        </div>

        <hr className="my-6" />
        {/* PAST RECORD CONTAINERS */}
        <PastRecordContainers>
          {(isLoading || status === 'pending') && (
            <div className="flex w-full justify-center items-center">
              <Loader size={40} className="animate-spin" />
            </div>
          )}

          {data?.map((item, index) => (
            <PastEncounters key={index} data={item} />
          ))}
        </PastRecordContainers>
        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
};

export default EditPresentingComplaints;
