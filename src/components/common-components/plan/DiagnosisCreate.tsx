import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Textarea from "@/components/core/form-elements/textarea";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { useReadChiefComplaintByClientQuery } from "@/features/chief-complaint/chief-complaint-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import { Loader } from "react-feather";
import { useDispatch } from "react-redux";
import DiagnosisPastRecord from "./DiagnosisPastRecord";

const Diagnosis = () => {
  const dispatch = useDispatch();
  const { data, isLoading, status } = useReadChiefComplaintByClientQuery(
    "a1497272-3783-46f6-922a-08dbd06dc4d8"
  );

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return (
    <div>
      <form>
        <div className="flex flex-col gap-6">
          <div>
            <div className="space-y-4">
              <Textarea
                label="Presenting Complaint"
                placeholder="Enter Present Complaints"
              />
              <Textarea
                label="History of Presenting Complaint"
                placeholder="Enter Present Complaints"
              />
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
            <DiagnosisPastRecord key={index} data={item} />
          ))}
        </PastRecordContainers>

        {/* BUTTONS */}
        <div className="mt-5">
          <CancelAndAddButton toggler={closeModal} />
        </div>
      </form>
    </div>
  );
};

export default Diagnosis;
