import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import ReviewOfSystemCardItem from "@/components/review-of-systems/CardItem";
import { PlusCircle } from "react-feather";

const CreateReviewOfSystems = ({ toggler }) => {
  return (
    <DefaultOpenModal isShow={true} toggler={toggler}>
      <form>
        <div>
          <div className="">
            <div className="flex gap-2">
              <Select label="Review of Systems" className="py-1 rounded" />
              <Input label="Review of Systems" className="py-1 rounded" />
              <div className="flex items-end">
                <SubmitButton
                  title="Add System"
                  icon={<PlusCircle size={14} />}
                  className="py-1.5 text-base w-[fit-content] whitespace-nowrap  gap-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-4">
              <ReviewOfSystemCardItem />
              <ReviewOfSystemCardItem />
              <ReviewOfSystemCardItem />
              <ReviewOfSystemCardItem />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-6" />

        {/* PAST ENCOUNTERS */}
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

export default CreateReviewOfSystems;
