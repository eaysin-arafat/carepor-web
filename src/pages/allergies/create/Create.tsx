import AllergiesCardItem from "@/components/allergies/AllergiesCardItem";
import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Select from "@/components/core/form-elements/Select";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { PlusCircle } from "react-feather";

const CreateAllergy = ({ toggler }) => {
  return (
    <DefaultOpenModal isShow={true} toggler={toggler}>
      <form>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <Select label="Allergies" className="py-1 rounded" />
            <Select label="Severity" className="py-1 rounded" />
            {/* <Select label="Family Medical History" className="py-1 rounded" /> */}
            <div className="col-span-2">
              <Select label="Drug Type" className="py-1 rounded" />
              {/* <Textarea
                label="Family Medical History"
                className="py-1 rounded"
              /> */}
            </div>
          </div>
          <div className="my-5">
            <SubmitButton
              title="Add Allergy"
              icon={<PlusCircle size={14} />}
              className="py-1 text-base w-[fit-content] whitespace-nowrap gap-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <AllergiesCardItem />
            <AllergiesCardItem />
            <AllergiesCardItem />
            <AllergiesCardItem />
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

export default CreateAllergy;
