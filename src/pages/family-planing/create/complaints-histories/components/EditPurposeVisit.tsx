import CancelAndAddButton from '@/components/core/buttons/CancelAndAddButton';
import Input from '@/components/core/form-elements/Input';
import Select from '@/components/core/form-elements/Select';
import DefaultOpenModal from '@/components/core/modal/DefaultOpenModal';
import PastRecordContainers from '@/components/past-record-containers/PastRecordContainers';
import { useReadChiefComplaintByClientQuery } from '@/features/chief-complaint/chief-complaint-api';
import PastEncounters from '@/pages/chief-complaints/create/PastEncounters';
import { Loader } from 'react-feather';

const EditPurposeVisit = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    'a1497272-3783-46f6-922a-08dbd06dc4d8'
  );

  return (
    <DefaultOpenModal title="Purpose of Visit" isShow={true} toggler={toggler}>
      <form>
        <div className="space-y-4">
          <Select label="Reason For Visit">
            <option value="New">New</option>
            <option value="1">Follow up</option>
            <option value="2">Restarted</option>
            <option value="3">Emergency Contraception</option>
            <option value="4">Stopping Family Planning</option>
          </Select>{' '}
          <Select label="Pregnancy Intension">
            <option value="1">Wants to become pregnant</option>
            <option value="2">Does not intend to get pregnant</option>
            <option value="3">
              Unsure or undecided about pregnancy intention
            </option>
          </Select>{' '}
          <Select label="Reason For Follow Up" disabled></Select>
          <Input label="Other Reason For Follow Up" disabled />
          <Select label="Reason For Stopping" disabled></Select>
          <Input label="Other Reason For Stopping" disabled />
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

export default EditPurposeVisit;
