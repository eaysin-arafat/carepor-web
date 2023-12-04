import {
  ClientObjectType,
  ClientPersonalInfoErrorType,
  ClientPersonalInfoType,
} from "@/types/clientTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
// import { OnchangeEventType } from "@/types/htmlEvents";
// import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";
import { TypeValidation } from "@/utilities/type-valdation";
import personalInfoValidation from "./personalInfoValidation";

type PersonalInfoProps = {
  personalInfo: ClientPersonalInfoType;
  setPersonalInfo: SetStateType<ClientPersonalInfoType>;
  setPersonalInfoError: SetStateType<ClientPersonalInfoErrorType>;
  handleStepNext: () => void;
  NRCprevClient: any[];
  isEditForm: boolean;
  noNrc: boolean;
  notPreNrc: boolean;
};
const usePersonalInfo = ({
  personalInfo,
  setPersonalInfo,
  setPersonalInfoError,
  handleStepNext,
  NRCprevClient,
  isEditForm,
  noNrc,
  notPreNrc,
}: PersonalInfoProps) => {
  // //
  // const dddd = NRCprevClient[0]?.nrc;

  // handle personal info form change
  const handlePersonalInfoChange = (e: OnchangeEventType): void => {
    const { name, checked, value } = e.target;
    if (name === "isDOBEstimated") {
      setPersonalInfo((prev) => ({ ...prev, [name]: checked }));
      setPersonalInfoError((prev) => ({ ...prev, [name]: "" }));
      return;
    }
    const nameField = ["firstName", "surname"];
    if (name === "noNRC") {
      if (name === "noNRC" && checked) {
        setPersonalInfo((prev) => ({
          ...prev,
          [name]: checked,
          nrc: "000000/00/0",
        }));
        setPersonalInfoError((prev) => ({ ...prev, nrc: "" }));
      } else {
        setPersonalInfo((prev) => ({
          ...prev,
          [name]: checked,
          nrc: "______/__/_",
        }));
        setPersonalInfoError((prev) => ({ ...prev, [name]: "" }));
      }
      return;
    }

    if (nameField.includes(name)) {
      if (TypeValidation.isOnlyAlphabetSpaceEmpty(value)) {
        setPersonalInfo((prev) => ({
          ...prev,
          [name]: value.replace(/  /g, " "),
        }));
        setPersonalInfoError((prev) => ({ ...prev, [name]: "" }));
      }
      return;
    }

    if (["napsaNumber", "napsaNumber"].includes(name)) {
      if (value.length > 20) {
        return;
      }
      setPersonalInfo((prev) => ({ ...prev, [name]: value.replace(/ /g, "") }));
      setPersonalInfoError((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    setPersonalInfoError((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePersonalInfoNext = () => {
    if (isEditForm) {
      if (noNrc && notPreNrc && NRCprevClient?.length > 0) {
        console.log(NRCprevClient);
        setPersonalInfoError((prev) => ({
          ...prev,
          nrc: "NRC already exists!",
        }));
        return;
      }
    } else {
      if (noNrc && NRCprevClient?.length > 0) {
        console.log(NRCprevClient);
        setPersonalInfoError((prev) => ({
          ...prev,
          nrc: "NRC already exists!",
        }));
        return;
      }
    }

    const { personalInfoErrors, isPersonalInfoValid } =
      personalInfoValidation(personalInfo);
    if (!isPersonalInfoValid) {
      setPersonalInfoError(personalInfoErrors);
      return false;
    } else {
      setPersonalInfoError(null);
      return handleStepNext();
    }
  };

  return {
    handlePersonalInfoChange,
    // personalInfo,
    handlePersonalInfoNext,
  };
};

export default usePersonalInfo;
