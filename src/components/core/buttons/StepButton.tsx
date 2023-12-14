import { cn } from "@/utilities/cn";
import { Check } from "react-feather";

const StepButton = ({
  isComplete = false,
  isActive = false,
  text = "text",
}) => {
  return (
    <button
      className={cn("flex items-center justify-center gap-1 text-sm py-3.5", {
        "border-b-[3px] border-b-[#1890FF]": isActive,
      })}
    >
      {isComplete && (
        <span className="inline-block bg-[#1890FF] rounded-full p-[2px]">
          <Check size={10} color="white" />
        </span>
      )}
      <span
        className={cn("inline-block capitalize", {
          "text-[#1890FF]": isActive,
          "text-secondaryColor": !isActive,
        })}
      >
        {text}
      </span>
    </button>
  );
};

export default StepButton;
