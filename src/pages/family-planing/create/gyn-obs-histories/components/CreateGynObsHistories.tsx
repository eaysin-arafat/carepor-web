import CancelAndAddButton from '@/components/core/buttons/CancelAndAddButton';
import Card, { CardBody } from '@/components/core/card/Card';
import DateInput from '@/components/core/form-elements/DatePicker';
import Input from '@/components/core/form-elements/Input';
import Select from '@/components/core/form-elements/Select';
import Textarea from '@/components/core/form-elements/textarea';
import DefaultOpenModal from '@/components/core/modal/DefaultOpenModal';
import PastRecordContainers from '@/components/past-record-containers/PastRecordContainers';
import { useReadChiefComplaintByClientQuery } from '@/features/chief-complaint/chief-complaint-api';
import PastEncounters from '@/pages/chief-complaints/create/PastEncounters';
import { Loader } from 'react-feather';

const CreateGynObsHistories = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    'a1497272-3783-46f6-922a-08dbd06dc4d8'
  );

  return (
    <DefaultOpenModal
      title="Gyn And Obs Histories "
      isShow={true}
      toggler={toggler}
    >
      <form>
        <div className="flex flex-col gap-6">
          <div>
            <Card className="mb-5">
              <CardBody className="dark:bg-black">
                <div className="mb-2 font-medium">Menstrual History :</div>
                <Textarea label="" placeholder="Enter Menstrual History" />
                <p className="text-sm mt-2">
                  <strong>Note : </strong> Please document Menarche, Menopause,
                  Cycle regularity, Cycle duration, Menstrual heaviness.
                </p>
              </CardBody>
            </Card>{' '}
            <Card className="mb-5">
              <CardBody className="dark:bg-black">
                <div className="mb-2 font-medium">Obstetrics History :</div>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between gap-3">
                    <DateInput label="LNMP" onChange={() => {}} />
                    <Select label="Are you Pregnent?">
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                      <option value="3">Unknown</option>
                    </Select>
                  </div>{' '}
                  <div className="flex flex-col md:flex-row md:justify-between gap-3">
                    <Input label="Gestational Age (Weeks)" />{' '}
                    <Input label="EDD" />{' '}
                  </div>{' '}
                  <Textarea label="Obstetrics History" />
                </div>
                <p className="text-sm mt-2">
                  <strong>Note : </strong>Please document Parity, Gravida,
                  Number of children alive and deseased, Breastfeeding status.
                  If has Breastfeeding child then HIV status of the child.
                </p>
                <div className="space-y-4">
                  <div className="mb-2 font-medium mt-5">
                    Past Reproductive history Summary :
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between gap-3">
                    <Select label="Have you had sex before?">
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </Select>{' '}
                    <Select label="Has client ever been pregnent before?">
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </Select>
                    <Input label="Total No. of pregnancies" />{' '}
                  </div>{' '}
                  <div className="flex flex-col md:flex-row md:justify-between gap-3">
                    <Input label="No. of births" />{' '}
                    <Input label="No. of live children" />{' '}
                    <Select label="History of ceaserian section">
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </Select>
                  </div>{' '}
                  <div className="flex flex-col md:flex-row md:justify-between gap-3">
                    <Select label="Has client given birth in the last 6/12 months">
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </Select>
                    <DateInput label="Date of Delivery" onChange={() => {}} />
                  </div>{' '}
                  <div className="flex flex-col md:flex-row md:justify-between gap-3">
                    <Select label="Post partum">
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </Select>
                    <DateInput
                      label="Time since last delivery"
                      onChange={() => {}}
                    />
                  </div>{' '}
                  <div className="flex flex-col md:flex-row md:justify-between gap-3">
                    <Select label="Currently breastfeeding">
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </Select>{' '}
                    <Select label="Type of breastfeeding">
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                    </Select>
                  </div>{' '}
                </div>
              </CardBody>
            </Card>
            <Card className="mb-5">
              <CardBody className="dark:bg-black">
                <div className="mb-2 font-medium">
                  History of Miscarriage/Abortion :
                </div>
                <Select
                  className="mb-3"
                  label="Have you ever had a miscarriage or abortion?"
                >
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
                <Select
                  className="mb-3"
                  label="Did it happen within past 4 weeks"
                >
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
                <Select className="mb-3" label="Current post abortion sepsis">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </CardBody>
            </Card>
            <Card className="mb-5">
              <CardBody className="dark:bg-black">
                <div className="mb-2 font-medium">
                  Cervical Cancer History :
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between gap-3">
                    <Select label="Have You Screened for CaCx?">
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                      <option value="3">Unknown</option>
                    </Select>
                    <Input label="When last screened?" disabled />{' '}
                  </div>{' '}
                  <div className="flex flex-col md:flex-row md:justify-between gap-3">
                    <Select label="Result" disabled>
                      <option value=""></option>
                    </Select>{' '}
                    <Select label="Method used" disabled>
                      <option value=""></option>
                    </Select>
                  </div>{' '}
                </div>
              </CardBody>
            </Card>
            <Card className="mb-5">
              <CardBody className="dark:bg-black">
                <div className="mb-2 font-medium">Family Planning :</div>
                <Select
                  className="mb-3"
                  label="Is the client on any family planning?"
                >
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{' '}
                <Select
                  className="mb-3"
                  label="Is client need family planning?"
                >
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>{' '}
                <Select className="mb-3" label="Patient counselled?">
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </Select>
              </CardBody>
            </Card>{' '}
            <Card className="mb-5">
              <CardBody className="dark:bg-black">
                <div className="mb-2 font-medium">Contraceptive History :</div>
              </CardBody>
            </Card>
          </div>
        </div>
        {/* BUTTONS */}
        <div className="mt-5">
          <CancelAndAddButton toggler={toggler} />
        </div>
      </form>
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
    </DefaultOpenModal>
  );
};

export default CreateGynObsHistories;
