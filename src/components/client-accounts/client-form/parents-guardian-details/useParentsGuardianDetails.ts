import {
  ClientParentsOrGuardiansErrorType,
  ClientParentsOrGuardiansType,
} from "@/types/clientFormTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
// import { OnchangeEventType } from "@/types/htmlEvents";
// import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";
import { TypeValidation } from "@/utilities/type-valdation";
import parentsOrGuardiansValidation from "./parentsOrGuardiansValidation";

type ParentsGuardianDetailsType = {
  parentsOrGuardians: ClientParentsOrGuardiansType;
  setParentsOrGuardians: SetStateType<ClientParentsOrGuardiansType>;
  setParentsOrGuardiansError: SetStateType<ClientParentsOrGuardiansErrorType>;
  handleStepNext: () => void;
  isClientUnder18Years: boolean;
};
///-----------------
const useParentsGuardianDetails = ({
  parentsOrGuardians,
  setParentsOrGuardians,
  setParentsOrGuardiansError,
  handleStepNext,
  isClientUnder18Years,
}: ParentsGuardianDetailsType) => {
  // console.log({ parentsOrGuardians, setParentsOrGuardians });
  //

  // handle personal info form change
  const handleParentsGuardianDetailsChange = (e: OnchangeEventType): void => {
    const { name, type, checked, value } = e.target;

    const nameField = [
      "fathersFirstName",
      "fathersSurname",
      "mothersFirstName",
      "mothersSurname",
      "guardiansFirstName",
      "guardiansSurname",
    ];
    if (nameField.includes(name)) {
      if (TypeValidation.isOnlyNameField(value))
        setParentsOrGuardians((prev) => ({
          ...prev,
          [name]: value.replace(/  /g, " "),
        }));
      setParentsOrGuardiansError((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    if (type === "checkbox") {
      setParentsOrGuardians((prev) => ({ ...prev, [name]: checked }));
      setParentsOrGuardiansError((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    let cardField = [
      "motherNAPSANumber",
      "fatherNAPSANumber",
      "guardianNAPSANumber",
    ];
    if (cardField.includes(name)) {
      if (value.length > 20) return;
      setParentsOrGuardians((prev) => ({
        ...prev,
        [name]: value.replace(/ /g, ""),
      }));
      setParentsOrGuardiansError((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    setParentsOrGuardians((prev) => ({ ...prev, [name]: value }));
    setParentsOrGuardiansError((prev) => ({ ...prev, [name]: "" }));
  };

  const parentsOrGuardiansNext = () => {
    const {
      isParentsOrGuardiansValid,
      parentsOrGuardiansErrors,
      // Form section Error
    } = parentsOrGuardiansValidation(parentsOrGuardians, isClientUnder18Years);

    if (!isParentsOrGuardiansValid) {
      setParentsOrGuardiansError(parentsOrGuardiansErrors);
      return false;
    } else {
      setParentsOrGuardiansError(null);
      return handleStepNext();
    }
  };

  return {
    handleParentsGuardianDetailsChange,
    // personalInfo,
    parentsOrGuardiansNext,
  };
};

export default useParentsGuardianDetails;
