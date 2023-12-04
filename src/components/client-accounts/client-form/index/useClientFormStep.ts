import { RootState } from "@/app/store";
import {
  clientFormStepBack,
  clientFormStepNext,
} from "@/features/client/client-form-slice";
import { useDispatch, useSelector } from "react-redux";

type ClientFormStepHookReturnType = {
  stepTitle: string[];
  stateCount: number;
  disabledBackButton: boolean;
  handleStepBack: () => void;
  handleStepNext: () => void;
};
// client form multi step hook
const useClientFormStep = (): ClientFormStepHookReturnType => {
  const dispatch = useDispatch();
  // const [stateCount, setStateCount] = useState<number>(1);
  const { formStep } = useSelector((state: RootState) => state.clientForm);

  const stepTitle = [
    "Personal <br /> Information",
    "Parents or  <br /> Guardian Details",
    "Marital Status &  <br /> Spouse Details",
    "Contact <br /> Information",
    "Place of Birth & <br /> Religious Denomination",
    "Education &  <br /> Employment",
  ];

  const disabledBackButton = formStep === 1;

  const handleStepBack = () => {
    dispatch(clientFormStepBack());
  };
  const handleStepNext = () => {
    dispatch(clientFormStepNext());
  };

  return {
    stepTitle,
    stateCount: formStep,
    disabledBackButton,
    handleStepBack,
    handleStepNext,
  };
};

export default useClientFormStep;
