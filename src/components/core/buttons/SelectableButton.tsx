import { cn } from "@/utilities/cn";

const SelectableButton = ({ isActive = false, text = "Text" }) => {
  return (
    <button
      className={cn(
        "py-1 px-6 font-poppins flex justify-center items-center rounded text-sm whitespace-nowrap flex-grow",
        {
          "border border-[#1890FF] text-[#1890FF]": !isActive,
          "bg-[#1890FF] text-white": isActive,
        }
      )}
    >
      {text}
    </button>
  );
};

export default SelectableButton;
