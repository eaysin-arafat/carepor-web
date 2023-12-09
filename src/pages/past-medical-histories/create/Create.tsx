import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";

const CreatePastMedicalHistory = ({ toggler }) => {
  return (
    <DefaultOpenModal isShow={true} toggler={toggler}>
      <form>
        <div className="flex flex-col gap-6">
          <Textarea
            label="Past Medical History"
            placeholder="Enter Past Medical History"
          />
          <Textarea
            label="Past Medical History"
            placeholder="Enter Past Medical History"
          />
          <Textarea
            label="Past Medical History"
            placeholder="Enter Past Medical History"
          />
        </div>

        {/* DIVIDER */}
        <hr className="my-5" />

        {/* PAST ENCOUNTER */}
        <PastRecordContainers>
          <div className="flex w-full justify-center items-center">
            <p className="text-[#1890FF] font-semibold font-poppins">
              No Past Encounters
            </p>
          </div>
        </PastRecordContainers>

        {/* BUTTONS */}
        <CancelAndAddButton toggler={toggler} />
      </form>
    </DefaultOpenModal>
  );
};

export default CreatePastMedicalHistory;
