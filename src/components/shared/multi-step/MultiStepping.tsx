import { cn } from "@/utilities/cn";
import React from "react";
import { Check, ChevronRight } from "react-feather";

type Props = {
  stepCount: number;
  stepTitle: string[];
};

const MultiStepping = ({ stepCount, stepTitle }: Props) => {
  return (
    <div className="text-center  shadow-light dark:shadow_dark text-[#03045E] font-semibold font-poppins">
      <div className="flex justify-evenly items-center">
        {stepTitle.map((step, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div>
                <ChevronRight size={18} />
              </div>
            )}
            <StepButton
              isComplete={index < stepCount - 1}
              isActive={index === stepCount - 1}
              text={step}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
export default MultiStepping;

const StepButton = ({
  isComplete = false,
  isActive = false,
  text = "text",
}) => {
  return (
    <button
      className={cn(
        "flex items-start border-b-[3px] border-transparent justify-center gap-1 py-5",
        {
          " border-b-[#1890FF]": isActive,
        }
      )}
    >
      {isComplete && (
        <Check
          size={15}
          className="inline-block bg-[#1890FF]  rounded-full p-[2px] sm:mt-1"
          color="white"
        />
      )}
      <p
        className={cn("inline-block capitalize text-[16px]", {
          "text-[#1890FF] font-[500]": isActive,
          "text-grayColor font-[500]": !isActive,
          "text-textColor font-[500]": isComplete,
        })}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </button>
  );
};
