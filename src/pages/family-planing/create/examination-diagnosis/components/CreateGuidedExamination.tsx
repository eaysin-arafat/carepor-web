import CancelAndAddButton from '@/components/core/buttons/CancelAndAddButton';
import Card, { CardBody } from '@/components/core/card/Card';
import Select from '@/components/core/form-elements/Select';
import Textarea from '@/components/core/form-elements/textarea';
import DefaultOpenModal from '@/components/core/modal/DefaultOpenModal';
import PastRecordContainers from '@/components/past-record-containers/PastRecordContainers';
import { useReadChiefComplaintByClientQuery } from '@/features/chief-complaint/chief-complaint-api';
import PastEncounters from '@/pages/chief-complaints/create/PastEncounters';
import { Loader } from 'react-feather';

const CreateGuidedExamination = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    'a1497272-3783-46f6-922a-08dbd06dc4d8'
  );

  return (
    <DefaultOpenModal
      title="Guided Examination "
      isShow={true}
      toggler={toggler}
    >
      <form>
        <Card className="mb-5">
          <CardBody className="dark:bg-black">
            <div className="mb-4 text-lg">Guided Examination</div>
            <div className="mb-2 font-bold">Quick Examination : </div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Sores">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{' '}
                <Select label="Abnormal Discharge">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{' '}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Warts">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{' '}
                <Select label="Other Abnormalities">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{' '}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Normal">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{' '}
                <Select label="Vaginal Muscle Tone">
                  <option value="1">Strong</option>
                  <option value="2">Weak</option>
                </Select>
              </div>{' '}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Cervix Colour">
                  <option value="1">Pink</option>
                  <option value="2">Bluish</option>
                </Select>{' '}
                <Select label="Cervical Consistency">
                  <option value="1">Soft</option>
                  <option value="2">Firm</option>
                  <option value="3">Other</option>
                </Select>
              </div>{' '}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Cervical Discharge">
                  <option value="1">Normal</option>
                  <option value="2">Abnormal</option>
                </Select>{' '}
                <Select label="Fibroid Palpable">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{' '}
                <Select label="Scars">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{' '}
              <div className="mb-2 font-bold">Abdominal examination : </div>
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Masses">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{' '}
                <Select label="Liver Palpable">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{' '}
                <Select label="Tenderness">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{' '}
              <div className="mb-2 font-bold">Uterus examination : </div>
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Select label="Uterus Position">
                  <option value="1">Anteverted</option>
                  <option value="2">Retroverted</option>
                </Select>{' '}
                <Select label="Size">
                  <option value="1">Normal</option>
                  <option value="2">Abnormal</option>
                </Select>{' '}
                <Select label="Tenderness">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </div>{' '}
              <div className="flex flex-col md:flex-row md:justify-between gap-3">
                <Textarea label="Others Findings" />
              </div>{' '}
            </div>
          </CardBody>
        </Card>{' '}
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

export default CreateGuidedExamination;
