import { cn } from "@/utilities/cn";

const SelectableButton = ({ isActive = false }) => {
  return (
    <button
      className={cn(
        "py-1.5 px-4 font-poppins flex justify-center items-center rounded",
        {
          "border border-[#1890FF] text-[#1890FF]": !isActive,
          "bg-[#1890FF] text-white": isActive,
        }
      )}
    >
      Press Me
    </button>
  );
};

export default SelectableButton;
