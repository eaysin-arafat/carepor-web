import { cn } from "@/utilities/cn";
import SelectableButton from "../buttons/SelectableButton";

interface SelectContainerProps {
  children?: React.ReactNode;
  isOne?: boolean;
}

const data = [
  "Select",
  "Positive",
  "Negative",
  "Indeterminant",
  "Detectable",
  "Not detected",
];

const data2 = [
  "Cough",
  "Chest Pain",
  "Fever",
  "Night Sweats",
  "Weight Loss",
  "Fatigue",
  "Hemoptysis",
];

const SelectContainer = ({ children, isOne = true }: SelectContainerProps) => {
  return (
    <div>
      {children}
      <h1>Select & Add Symptoms</h1>
      {/* <div className="flex gap-3 flex-wrap mt-2 "> */}
      <div
        className={cn(`grid gap-3 mt-2`, {
          "grid-cols-6": isOne,
          "grid-cols-7": !isOne,
        })}
      >
        {isOne &&
          data.map((item, index) => (
            <SelectableButton key={index} isActive={index === 0} text={item} />
          ))}
        {!isOne &&
          data2.map((item, index) => (
            <SelectableButton key={index} isActive={index === 0} text={item} />
          ))}
        {/* </div> */}
        {/* {data.map((item, index) => (
          <SelectableButton key={index} isActive={index === 0} text={item} />
        ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default SelectContainer;
