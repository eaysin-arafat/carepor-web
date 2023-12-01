import {
  ClientEducationAndEmploymentErrorType,
  ClientEducationAndEmploymentType,
} from "@/types/clientFormTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";

type MaritalStatusAndSpouseType = {
  educationAndEmployment: ClientEducationAndEmploymentType;
  setEducationAndEmployment: SetStateType<ClientEducationAndEmploymentType>;
  setEducationAndEmploymentError: SetStateType<ClientEducationAndEmploymentErrorType>;
  handleStepNext: () => void;
};

const useEducationAndEmployment = ({
  educationAndEmployment,
  setEducationAndEmployment,
  setEducationAndEmploymentError,
  handleStepNext,
}: MaritalStatusAndSpouseType) => {
  // console.log({ educationAndEmployment });

  // handle Education And Employment  form change
  const handleEducationAndEmploymentChange = (e: OnchangeEventType): void => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setEducationAndEmployment((prev) => ({ ...prev, [name]: checked }));
      setEducationAndEmploymentError((prev) => ({ ...prev, [name]: "" }));
    } else {
      setEducationAndEmployment((prev) => ({ ...prev, [name]: value }));
      setEducationAndEmploymentError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // not required fields in the form
  // manage  form submission on parent Hook

  return {
    handleEducationAndEmploymentChange,
  };
};
export default useEducationAndEmployment;
