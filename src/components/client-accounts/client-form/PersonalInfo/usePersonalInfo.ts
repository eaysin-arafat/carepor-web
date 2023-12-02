import { ClientPersonalInfoType } from "@/types/clientFormTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
// import { OnchangeEventType } from "@/types/htmlEvents";
// import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";

type PersonalInfoProps = {
  personalInfo: ClientPersonalInfoType;
  setPersonalInfo: SetStateType<ClientPersonalInfoType>;
};
const usePersonalInfo = ({
  personalInfo,
  setPersonalInfo,
}: PersonalInfoProps) => {
  console.log({ personalInfo, setPersonalInfo });
  //

  // handle personal info form change
  const handlePersonalInfoChange = (e: OnchangeEventType): void => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setPersonalInfo((prev) => ({ ...prev, [name]: checked }));
    } else {
      setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  //

  return {
    handlePersonalInfoChange,
    // personalInfo,
  };
};

export default usePersonalInfo;
