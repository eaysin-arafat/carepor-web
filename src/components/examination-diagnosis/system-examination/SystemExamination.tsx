import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { Loader } from "react-feather";

const SystemExamination = ({ toggler }) => {
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
    <DefaultModal title="System Examination" toggler={toggler} size="6xl">
      <form>
        <Section>
          <div className=" space-y-5">
            <Select label="System">
              <option value="1">Good</option>
              <option value="2">Stable</option>
              <option value="3">Critical</option>
            </Select>
            <Textarea label="Note" />
            <div className="">
              <button className="main_btn w-fit">Add System</button>
            </div>
            <div className="">
              <PastRecordWrapper isDeleteAble={true} isEditAble={true}>
                <PastRecordData title="Treatment Plan" data={"Data"} />
              </PastRecordWrapper>
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

export default SystemExamination;
