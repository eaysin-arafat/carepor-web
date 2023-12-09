import { cn } from "@/utilities/cn";
import React from "react";
import SelectableButton from "../buttons/SelectableButton";

interface SelectContainerProps {
  children?: React.ReactNode;
  isOne?: boolean;
  selected: string[];
  handleChange?: (item: string[]) => void;
}

const data = [
  "Positive",
  "Negative",
  "Indeterminant",
  "Detectable",
  "Not detected",
];

const SelectContainer = ({
  children,
  selected,
  handleChange = () => {},
}: SelectContainerProps) => {
  console.log(selected);
  console.log(handleChange);

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

  console.log(selectedItems);

  return (
    <div>
      {children}
      <h1 className="text-[#1E0E62] font-poppins text-xl font-medium">
        Serostatus & Disclosure
      </h1>
      <div className={cn(`grid gap-3 mt-2 grid-cols-5`)}>
        {data.map((item, index) => (
          <SelectableButton
            key={index}
            isActive={selectedItems?.includes(item)}
            text={item}
            handler={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectContainer;
