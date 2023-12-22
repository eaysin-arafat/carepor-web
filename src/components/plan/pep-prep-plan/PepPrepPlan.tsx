import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Section from "@/components/core/card/Section";
import Checkbox from "@/components/core/form-elements/Checkbox";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultModal from "@/components/core/modal/DefaultModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import PastRecordData from "@/components/shared/past-record/PastRecordData";
import PastRecordWrapper from "@/components/shared/past-record/PastRecordWrpper";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import { Loader } from "react-feather";

const PepPrepPlan = ({ toggler, title }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );
  return (
    <div>
      <DefaultModal title={title} toggler={toggler} size="7xl">
        <form>
          <Section title="PEP Eligible if">
            <div className="space-y-5">
              <Checkbox label="Normal urinalysis" />
              <Checkbox label="No acute HIV infection symptons" />
              <Checkbox label="Able and willing to adhere to daily PrEP" />
              <Checkbox label="Creatinine clearance >50 or risk screening negative" />
              <Checkbox label="Last potential HIV exposure more than 6 weeks ago" />
              <Select label="Pep Plan">
                <option value="">Select</option>
                <option value="1">Start</option>
                <option value="2">Don't Start</option>
                <option value="3">Stop</option>
              </Select>
              <Select label="Reason for Stopping"></Select>
              <Textarea label="If not start what's the reason?" />
            </div>
          </Section>

          <hr className="my-6" />

          {/* PAST RECORD CONTAINERS */}
          <PastRecordContainers>
            {(isLoading || status === "pending") && (
              <div className="flex w-full justify-center items-center">
                <Loader size={40} className="animate-spin" />
              </div>
            )}
            {data?.map((item, index) => (
              <PastRecordWrapper
                isDeleteAble={false}
                isEditAble={true}
                // handleEdit={handleEdit}
              >
                <PastRecordData title="Normal urinalysis" data={"data"} />
                <PastRecordData title="No acute HIV symptons" data={"data"} />
                <PastRecordData title="Aadhere to daily PrEP" data={"data"} />
                <PastRecordData title="Creatinine clearance" data={"data"} />
                <PastRecordData
                  title="Last HIV exposure more than 6 weeks ago"
                  data={"data"}
                />
                <PastRecordData title="PEP Plan" data={"data"} />
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

export default PepPrepPlan;
