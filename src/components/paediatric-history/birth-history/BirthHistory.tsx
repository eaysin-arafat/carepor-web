import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import Checkbox from "@/components/core/form-elements/Checkbox";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import TimeInput from "@/components/core/form-elements/TimeInput";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { Loader } from "react-feather";

const BirthHistory = ({ toggler }) => {
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
    <DefaultModal title="Birth History" toggler={toggler} size="6xl">
      <form>
        <Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-3">
            <Input label={"Birth Weight (kg)"} required name="birthWeight" />
            <Input label={"Birth Length (cm)"} required name="birthHeight" />
            <Select label="Birth Outcome" name="birthOutcome" required></Select>
          </div>
          <div className="grid md:grid-cols-2 gap-5 ">
            <Select
              label={"Head Circumference"}
              name="headCircumference"
            ></Select>
            <Select
              label={"Chest Circumference"}
              name="chestCircumference"
            ></Select>
            <Select
              label="General Condition"
              required
              name="generalCondition"
            ></Select>
            <div className="md:mt-9">
              <Checkbox label="Is Breast Feeding Well" />
            </div>
            <Select
              label="Other Feeding Option"
              required
              name="otherFeedingOption"
            ></Select>
            <TimeInput
              onChange={() => {}}
              label={"Delivery Time"}
              required
              name="deliveryTime"
            />
            <Input label={"Vaccination Outside"} name="vaccinationOutside" />
            <Select
              label="Tetanus At Birth"
              required
              name="tetanusAtBirth"
            ></Select>
            <div className="col-span-full">
              <Textarea label={"Note"} name="note" />
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

export default BirthHistory;
