import { cn } from "@/utilities/cn";
import SelectableButton from "../buttons/SelectableButton";

interface OptionItem {
  id: number;
  label: string;
  isSelected: boolean;
}
interface SelectContainerProps {
  data: OptionItem[];
  errMsg?: string;
  handleChange: (id: number) => void;
}

const SelectContainer = ({
  data,
  errMsg,
  handleChange = () => {},
}: SelectContainerProps) => {
  // store select items

  return (
    <div
      className={cn(
        `grid gap-3 mt-2 grid-cols-${data?.length > 12 ? 12 : data?.length}`
      )}
    >
      {data.map((item, index) => (
        <SelectableButton
          key={index}
          isActive={item?.isSelected}
          text={item?.label}
          handler={() => handleChange(item?.id)}
        />
      ))}
      {errMsg && <p className="text-sm text-red-600">Required</p>}
    </div>
  );
};

export default SelectContainer;
