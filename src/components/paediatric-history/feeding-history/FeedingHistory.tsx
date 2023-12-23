import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { Loader } from "react-feather";

const FeedingHistory = ({ toggler }) => {
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
    <DefaultModal title="Feeding" toggler={toggler} size="6xl">
      <form>
        <Section>
          <div className="grid md:grid-cols-2 gap-5">
            <Select label="Infant Feeding Code"></Select>
            <Select label="Other Feeding Code"></Select>
            <div className="col-span-full">
              <Textarea label="Additional Comments" />
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

export default FeedingHistory;
