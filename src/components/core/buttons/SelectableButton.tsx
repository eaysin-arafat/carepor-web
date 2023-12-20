import { cn } from "@/utilities/cn";

const SelectableButton = ({ isActive = false, text = "Text", handler }) => {
  return (
    <button
      className={cn(
        "py-2 px-6 font-poppins flex justify-center items-center rounded text-sm whitespace-nowrap flex-grow",
        {
          "border-2 border-[#F2F3F5] text-[#6B7280]": !isActive,
          "bg-[#1890FF] text-white": isActive,
        }
      )}
      onClick={handler}
      type="button"
    >
      {text}
    </button>
  );
};

export default SelectableButton;
