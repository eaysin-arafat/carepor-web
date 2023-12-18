import CancelAndAddButton from '@/components/core/buttons/CancelAndAddButton';
import { CardBody } from '@/components/core/card/Card';
import Select from '@/components/core/form-elements/Select';
import Textarea from '@/components/core/form-elements/textarea';
import DefaultOpenModal from '@/components/core/modal/DefaultOpenModal';
import PastRecordContainers from '@/components/past-record-containers/PastRecordContainers';
import { useReadChiefComplaintByClientQuery } from '@/features/chief-complaint/chief-complaint-api';
import PastEncounters from '@/pages/chief-complaints/create/PastEncounters';
import { Card } from 'flowbite-react';
import { Loader } from 'react-feather';

const CreateSystemExamination = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    'a1497272-3783-46f6-922a-08dbd06dc4d8'
  );

  return (
    <DefaultOpenModal
      title="System Examination Create"
      isShow={true}
      toggler={toggler}
    >
      <form>
        <div className="space-y-4">
          <Card className="mb-5">
            <CardBody className="dark:bg-black">
              <div className="mb-2 font-medium">System Examination :</div>
              <Select label="System">
                <option value="1">Respiratory System</option>
                <option value="2">Gastro-Intestinal System</option>
                <option value="3">Cardiovascular System</option>
                <option value="4">Nervous System</option>
                <option value="5">Genito-Urinary System</option>
                <option value="6">Musculoskeletal System</option>
                <option value="7">Integumentary system</option>
              </Select>
            </CardBody>
          </Card>{' '}
          <Card className="mb-5">
            <CardBody className="dark:bg-black">
              <div className="mb-2 font-medium">Note </div>
              <Textarea label="" placeholder="Comment" />
            </CardBody>
          </Card>{' '}
          <Card className="mb-5">
            <CardBody className="dark:bg-black">
              <button className="bg-blue-500 p-3 rounded-lg">Add</button>
            </CardBody>
          </Card>{' '}
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

export default CreateSystemExamination;
