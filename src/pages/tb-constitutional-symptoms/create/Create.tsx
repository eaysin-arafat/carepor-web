import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import SelectableButton from "@/components/core/buttons/SelectableButton";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import SelectContainer from "@/components/core/selectable-container/SelectContainer";
import PastRecordContainers from "@/components/past-record-containers/PastRecordContainers";
import { cn } from "@/utilities/cn";
import React from "react";

const data = {
  1: "Cough",
  2: "Chest Pain",
  3: "Fever",
  4: "Night Sweats",
  5: "Weight Loss",
  6: "Fatigue",
  7: "Hemoptysis",
};

const CreateTbConstitutionalSymptom = ({ toggler = () => {} }) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleSelect = (item: string) => {
    if (selectedItems?.includes(item)) {
      setSelectedItems((prev) => prev.filter((i) => i !== item));
      // handleChange(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems((prev) => [...prev, item]);
      // handleChange([...selectedItems, item]);
    }
  };
  return (
    <DefaultOpenModal isShow={true} title="TB Symptoms" toggler={toggler}>
      <form>
        <div className="flex flex-col gap-6">
          <div>
            <div>
              <div className={cn(`grid gap-3 mt-2 grid-cols-7`)}>
                {Object.keys(data).map((item, index) => (
                  <SelectableButton
                    key={index}
                    isActive={selectedItems?.includes(item)}
                    text={data[item]}
                    handler={() => handleSelect(item)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <SelectContainer selected={[]} />
          </div>
        </div>
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

export default CreateTbConstitutionalSymptom;
