import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Checkbox from "@/components/core/form-elements/Checkbox";
import Textarea from "@/components/core/form-elements/textarea";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import { Loader } from "react-feather";
import TreatmentPastRecord from "./DiagnosisPastRecord";

const TreatmentPlan = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );
  return (
    <div>
      <form>
        <div className="flex flex-col gap-6">
          <div>
            <div className="space-y-4">
              <Textarea
                label="Treatment Plan"
                placeholder="Enter Present Complaints"
                className="h-40"
              />
              <Checkbox label="Copy Proposed Treatment Plan" />
            </div>
          </div>
        </div>
        <hr className="my-6" />

        {/* PAST RECORD CONTAINERS */}
        <PastRecordContainers>
          {(isLoading || status === "pending") && (
            <div className="flex w-full justify-center items-center">
              <Loader size={40} className="animate-spin" />
            </div>
          )}
          {data?.map((item, index) => (
            <TreatmentPastRecord
              key={index}
              data={item}
              handleEdit={() => {}}
            />
          ))}
        </PastRecordContainers>

        {/* BUTTONS */}
        <div className="mt-5">
          <CancelAndAddButton toggler={toggler} />
        </div>
      </form>
    </div>
  );
};

export default TreatmentPlan;
