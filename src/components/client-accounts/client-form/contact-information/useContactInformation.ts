import { ClientContactInfoType } from "@/types/clientFormTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";

type MaritalStatusAndSpouseType = {
  contactInfo: ClientContactInfoType;
  setContactInfo: SetStateType<ClientContactInfoType>;
};

const useContactInformation = ({
  contactInfo,
  setContactInfo,
}: MaritalStatusAndSpouseType) => {
  console.log({ contactInfo });

  // handle Marital Status And Spouse  form change
  const handleContactInformationChange = (e: OnchangeEventType): void => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setContactInfo((prev) => ({ ...prev, [name]: checked }));
    } else {
      setContactInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  return {
    handleContactInformationChange,
  };
};
export default useContactInformation;
