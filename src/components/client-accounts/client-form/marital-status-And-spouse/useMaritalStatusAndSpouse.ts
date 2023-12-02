import {
  ClientMaritalStatusAndSpouseErrorType,
  ClientMaritalStatusAndSpouseType,
} from "@/types/clientFormTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";
import { TypeValidation } from "@/utilities/type-valdation";
import maritalStatusAndSpouseValidation from "./maritalStatusAndSpouseValidation";

type MaritalStatusAndSpouseType = {
  maritalStatusAndSpouse: ClientMaritalStatusAndSpouseType;
  setMaritalStatusAndSpouse: SetStateType<ClientMaritalStatusAndSpouseType>;
  setMaritalStatusAndSpouseError: SetStateType<ClientMaritalStatusAndSpouseErrorType>;
  handleStepNext: () => void;
};

const useMaritalStatusAndSpouse = ({
  maritalStatusAndSpouse,
  setMaritalStatusAndSpouse,
  setMaritalStatusAndSpouseError,
  handleStepNext,
}: MaritalStatusAndSpouseType) => {
  // console.log({ maritalStatusAndSpouse });

  // handle Marital Status And Spouse  form change
  const handleMaritalStatusAndSpouseChange = (e: OnchangeEventType): void => {
    const { name, value } = e.target;

    const nameField = ["spousesSurname", "spousesLegalName"];
    if (nameField.includes(name)) {
      if (TypeValidation.isOnlyNameField(value))
        setMaritalStatusAndSpouse((prev) => ({
          ...prev,
          [name]: value.replace(/  /g, " "),
        }));
      setMaritalStatusAndSpouseError((prev) => ({ ...prev, [name]: "" }));
      return;
    }
    if (name === "maritalStatus" && value != "2") {
      setMaritalStatusAndSpouse((prev) => ({
        ...prev,
        [name]: value,
        spousesLegalName: "",
        spousesSurname: "",
      }));
      setMaritalStatusAndSpouseError((prev) => ({ ...prev, [name]: "" }));
      return;
    }
    if (name === "maritalStatus" && value == "2") {
      setMaritalStatusAndSpouse((prev) => ({ ...prev, [name]: value }));
      setMaritalStatusAndSpouseError((prev) => ({ ...prev, [name]: "" }));
      return;
    }
  };

  const handleMaritalStatusAndSpouseNext = () => {
    const {
      isMaritalStatusAndSpouseValid,
      maritalStatusAndSpouseErrors,
      // Form section Error
    } = maritalStatusAndSpouseValidation(maritalStatusAndSpouse);

    if (!isMaritalStatusAndSpouseValid) {
      setMaritalStatusAndSpouseError(maritalStatusAndSpouseErrors);
      return false;
    } else {
      setMaritalStatusAndSpouseError(null);
      return handleStepNext();
    }
  };

  return {
    handleMaritalStatusAndSpouseChange,
    handleMaritalStatusAndSpouseNext,
  };
};
export default useMaritalStatusAndSpouse;
