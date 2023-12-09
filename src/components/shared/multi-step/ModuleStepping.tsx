import StepButton from "@/components/core/buttons/StepButton";
import { ChevronRight } from "react-feather";

const ModuleStepping = () => {
  return (
    <div className="text-center box_shadow_2 text-[#03045E] font-semibold font-poppins">
      <div className="flex justify-evenly items-center">
        <StepButton isComplete text="Complaint" />
        <div>
          <ChevronRight size={18} />
        </div>
        <StepButton isActive text="Paediatric" />
        <div>
          <ChevronRight size={18} />
        </div>
        <StepButton text="Examination & Diagnosis" />
        <div>
          <ChevronRight size={18} />
        </div>
        <StepButton text="Treatment Plan" />
        <div>
          <ChevronRight size={18} />
        </div>
        <StepButton text="Treatment Plan" />
      </div>
    </div>
  );
};

export default ModuleStepping;
