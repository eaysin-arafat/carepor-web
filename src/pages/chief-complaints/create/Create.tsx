import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { Loader } from "react-feather";
import PastEncounters from "./PastEncounters";
import useCreate from "./useCreate";

interface Props {
  toggler: () => void;
  encounterType: number;
}

const CreateChiefComplaints = ({ toggler, encounterType }: Props) => {
  const {
    chiefComplaintsData,
    errorMsg,
    filteredChiefComplaints,
    handleChiefComplaintsChange,
    handleSubmit,
    isCreating,
    isLoading,
    status,
    createStatus,
    handleEdit,
  } = useCreate({ encounterType });

  return (
    <DefaultOpenModal isShow={true} toggler={toggler} title="Assessment">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div>
            <div className="space-y-4">
              <Textarea
                required
                label="History"
                placeholder="History"
                name="historySummary"
                value={chiefComplaintsData.historySummary}
                onChange={handleChiefComplaintsChange}
                errMsg={errorMsg.historySummary}
              />
              <Textarea
                required
                label="Examination"
                placeholder="Examination"
                name="examinationSummary"
                value={chiefComplaintsData.examinationSummary}
                onChange={handleChiefComplaintsChange}
                errMsg={errorMsg.examinationSummary}
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

          {filteredChiefComplaints?.map((item, index) => (
            <PastEncounters
              key={index}
              data={item}
              handleEdit={() => handleEdit(item)}
            />
          ))}
        </PastRecordContainers>

        {/* BUTTONS */}
        <div className="mt-4">
          <CancelAndAddButton
            toggler={toggler}
            disableBoth={isCreating || createStatus === "pending"}
          />
        </div>
      </form>
    </DefaultOpenModal>
  );
};

export default CreateChiefComplaints;
