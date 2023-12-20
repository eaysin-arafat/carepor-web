import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { Loader } from "react-feather";

const GlasgowComaScale = ({ toggler }) => {
  const isLoading = false;

  const demoData = [
    {
      chiefComplaints: "Demo chiefComplaints",
      clientId: "a1497272-3783-46f6-922a-08dbd06dc4d8",
      historyOfChiefComplaint: "Demo -",
    },
    {
      chiefComplaints: "Demo chiefComplaints",
      clientId: "a1497272-3783-46f6-922a-08dbd06dc4d8",
      historyOfChiefComplaint: "Demo -",
    },
  ];
  return (
    <DefaultModal title="Glasgow Coma Scale" toggler={toggler} size="6xl">
      <form>
        <Section>
          <div className="grid md:grid-cols-2 gap-5">
            <Select label="Eye Score">
              <option value="1">No response (1 point)</option>
              <option value="2">
                To pain only (not applied to face) (2 points)
              </option>
              <option value="3">
                To verbal stimuli, command, speech (3 points)
              </option>
              <option value="4">
                Spontaneous - open with blinking at baseline (4 points)
              </option>
            </Select>
            <Select label="Verbal Score">
              <option value="1">No response (1 point)</option>
              <option value="2">Incomprehensible speech (2 points)</option>
              <option value="3">Inappropriate words (3 points)</option>
              <option value="4">
                Confused conversation, but able to answer questions (4 points)
              </option>
              <option value="5">Oriented (5 points)</option>
            </Select>
            <Select label="Motore Score">
              <option value="1">No response (1 point)</option>
              <option value="2">
                Extension response in response to pain (2 point)
              </option>
              <option value="3">
                Flexion in response to pain (decorticate posturing) (3 points)
              </option>
              <option value="4">
                Withdraws in response to pain (4 points)
              </option>
              <option value="5">
                Purposeful movement to painful stimulus (5 points)
              </option>
              <option value="6">Obeys commands for movement (6 points)</option>
            </Select>
            <Input label="Score" placeholder="Score" type="number" />
            <div className="col-span-full">
              <Textarea label="Result" placeholder="Result" />
            </div>
          </div>
        </Section>
        <hr className="my-6" />

        {/* PAST RECORD CONTAINERS */}
        <PastRecordContainers>
          {isLoading && (
            <div className="flex w-full justify-center items-center">
              <Loader size={40} className="animate-spin" />
            </div>
          )}

          {demoData?.map((item) => (
            <PastRecordWrapper isDeleteAble={false} isEditAble={true}>
              <PastRecordData
                title="Treatment Plan"
                data={item?.chiefComplaints}
              />
            </PastRecordWrapper>
          ))}
        </PastRecordContainers>

        {/* BUTTONS */}
        <div className="mt-5">
          <CancelAndAddButton toggler={toggler} />
        </div>
      </form>
    </DefaultModal>
  );
};

export default GlasgowComaScale;
