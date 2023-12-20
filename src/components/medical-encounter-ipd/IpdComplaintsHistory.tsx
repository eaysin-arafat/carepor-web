import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import PastEncounters from "@/pages/chief-complaints/create/PastEncounters";
import { Loader } from "react-feather";
import CancelAndAddButton from "../core/buttons/CancelAndAddButton";
import Textarea from "../core/form-elements/textarea";
import DefaultModal from "../core/modal/DefaultModal";
import PastRecordContainers from "../past-record-containers/PastRecordContainers";

const IpdComplaintsHistory = ({ toggler }) => {
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );
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
              <PastEncounters key={index} data={item} handleEdit={() => {}} />
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

export default IpdComplaintsHistory;
