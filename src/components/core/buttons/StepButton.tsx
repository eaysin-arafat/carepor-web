import { cn } from "@/utilities/cn";
import { Check } from "react-feather";

const StepButton = ({
  isComplete = false,
  isActive = false,
  text = "text",
}) => {
  return (
    <button
      className={cn("flex items-center justify-center gap-1 text-sm py-3.5 border-b-[3px] border-transparent", {
        "border-b-[3px] border-primaryColor": isActive,
      })}
    >
      {isComplete && (
        <span className="inline-block bg-primaryColor rounded-full p-[2px]">
          <Check size={10} color="white" />
        </span>
      )}
      <span
        className={cn("inline-block capitalize", {
          "text-primaryColor": isActive,
          "text-secondaryColor": !isActive,
        })}
      >
        {text}
      </span>
    </button>
  );
};

export default StepButton;
