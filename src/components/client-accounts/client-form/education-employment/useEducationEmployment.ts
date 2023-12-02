import { ClientEducationAndEmploymentType } from "@/types/clientFormTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";

type MaritalStatusAndSpouseType = {
  educationAndEmployment: ClientEducationAndEmploymentType;
  setEducationAndEmployment: SetStateType<ClientEducationAndEmploymentType>;
};

const useEducationAndEmployment = ({
  educationAndEmployment,
  setEducationAndEmployment,
}: MaritalStatusAndSpouseType) => {
  console.log({ educationAndEmployment });

  // handle Education And Employment  form change
  const handleEducationAndEmploymentChange = (e: OnchangeEventType): void => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setEducationAndEmployment((prev) => ({ ...prev, [name]: checked }));
    } else {
      setEducationAndEmployment((prev) => ({ ...prev, [name]: value }));
    }
  };

  return {
    handleEducationAndEmploymentChange,
  };
};
export default useEducationAndEmployment;
