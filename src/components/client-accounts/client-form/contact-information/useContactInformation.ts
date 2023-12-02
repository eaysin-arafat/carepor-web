import {
  ClientContactInfoErrorType,
  ClientContactInfoType,
  notZMPhoneResetType,
} from "@/types/clientFormTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";
import contactInformationValidation from "./contactInformationValidation";

type MaritalStatusAndSpouseType = {
  contactInfo: ClientContactInfoType;
  setContactInfo: SetStateType<ClientContactInfoType>;
  setContactInfoError: SetStateType<ClientContactInfoErrorType>;
  handleStepNext: () => void;
};

const useContactInformation = ({
  contactInfo,
  setContactInfo,
  setContactInfoError,
  handleStepNext,
}: MaritalStatusAndSpouseType) => {
  

  // handle Marital Status And Spouse  form change
  const handleContactInformationChange = (e: OnchangeEventType): void => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      // noCellphone
      if (checked === true) {
        setContactInfo((prev) => ({ ...prev, [name]: checked, cellphone: "" }));
        setContactInfoError((prev) => ({ ...prev, [name]: "" }));
      } else {
        setContactInfo((prev) => ({ ...prev, [name]: checked }));
        setContactInfoError((prev) => ({ ...prev, [name]: "" }));
      }
    } else {
      setContactInfo((prev) => ({ ...prev, [name]: value }));
      setContactInfoError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /**
   * If phone number length more ZM number and
   * user select ZM code then rest phone number
   * @param fieldName
   */

  const notZMPhoneResetContractInfo: notZMPhoneResetType = (fieldName) => {
    setContactInfo((prev) => ({ ...prev, [fieldName]: "" }));
    setContactInfoError((prev) => ({ ...prev, [fieldName]: "" }));
  };

  const handleContactInformationNext = () => {
    const { isContactInformationValid, contactInformationError } =
      contactInformationValidation(contactInfo);

    if (!isContactInformationValid) {
      setContactInfoError(contactInformationError);
      return false;
    } else {
      setContactInfoError(null);
      return handleStepNext();
    }
  };

  return {
    handleContactInformationChange,
    handleContactInformationNext,
    notZMPhoneResetContractInfo,
  };
};
export default useContactInformation;
