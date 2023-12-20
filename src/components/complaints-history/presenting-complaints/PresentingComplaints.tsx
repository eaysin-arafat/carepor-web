import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { Loader } from "react-feather";

type ItemsProps = {
  chiefComplaints: string;
  clientId: string;
  historyOfChiefComplaint: string;
};
const PresentingComplaints = ({ toggler }) => {
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
    <div>
      <DefaultModal
        title="Medical Encounter IPD (Complaints & Histories)"
        toggler={toggler}
        size="6xl"
      >
        <form>
          <div className="flex flex-col gap-6">
            <div>
              <div className="space-y-4">
                <Textarea label="History" required />
                <Textarea label="Examination" required />
              </div>
              <Section title="Serostatus and Disclosure">
                <Select label="HIV Status" required></Select>
              </Section>
            </div>
          </div>
          <hr className="my-6" />

          {/* PAST RECORD CONTAINERS */}
          <PastRecordContainers>
            {isLoading && (
              <div className="flex w-full justify-center items-center">
                <Loader size={40} className="animate-spin" />
              </div>
            )}

            {demoData?.map((item: ItemsProps) => (
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
    </div>
  );
};

export default PresentingComplaints;
