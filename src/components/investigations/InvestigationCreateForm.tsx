import { cn } from "@/utilities/cn";
import { useState } from "react";
import AddSingleInvestigation from "./AddSingleInvestigation";
import AddCompositeInvestigation from "./AddCompositeInvestigation";

const InvestigationCreateForm = () => {
  const [toggle, setToggle] = useState("single");

  const handleToggle = (
    tab: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setToggle(tab);
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <button
          onClick={(e) => handleToggle("single", e)}
          className={cn(
            "w-full bg-whiteBgColor text-textColor text-base border rounded-e-none border-r border-borderColor rounded-s-md py-2",
            { "bg-buttonBg text-white": toggle === "single" }
          )}
        >
          Single Test
        </button>
        <button
          onClick={(e) => handleToggle("composite", e)}
          className={cn(
            "w-full bg-whiteBgColor text-textColor text-base border rounded-s-none border-borderColor rounded-e-md py-2",
            { "bg-buttonBg text-white": toggle === "composite" }
          )}
        >
          Composite Test
        </button>
      </div>
      {toggle === "single" && <AddSingleInvestigation />}
      {toggle === "composite" && <AddCompositeInvestigation />}
    </div>
  );
};

export default InvestigationCreateForm;
