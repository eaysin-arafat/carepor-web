import { useEffect, useState } from "react";

type ClientFormStepHookReturnType = {
  stepTitle: string[];
  stateCount: number;
  disabledBackButton: boolean;
  handleStepBack: () => void;
  handleStepNext: () => void;
};
// client form multi step hook
const useClientFormStep = (editStep?: number): ClientFormStepHookReturnType => {
  const [stateCount, setStateCount] = useState<number>(1);

  const stepTitle = [
    "Personal <br /> Information",
    "Parents or  <br /> Guardian Details",
    "Marital Status &  <br /> Spouse Details",
    "Contact <br /> Information",
    "Place of Birth & <br /> Religious Denomination",
    "Education &  <br /> Employment",
  ];

  const disabledBackButton = stateCount === 1;

  const handleStepBack = () => {
    setStateCount((prev: number) => Math.max(prev - 1, 1));
  };
  const handleStepNext = () => {
    setStateCount((next: number) => Math.min(next + 1, stepTitle.length));
  };

  useEffect(() => {
    if (editStep) {
      setStateCount(editStep);
    }
  }, [editStep]);

  return {
    stepTitle,
    stateCount,
    disabledBackButton,
    handleStepBack,
    handleStepNext,
  };
};

export default useClientFormStep;
