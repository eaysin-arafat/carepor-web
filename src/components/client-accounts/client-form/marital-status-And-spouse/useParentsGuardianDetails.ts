import { ClientMaritalStatusAndSpouseType } from "@/types/clientFormTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";

type MaritalStatusAndSpouseType = {
  maritalStatusAndSpouse: ClientMaritalStatusAndSpouseType;
  setMaritalStatusAndSpouse: SetStateType<ClientMaritalStatusAndSpouseType>;
};

const useParentsGuardianDetails = ({
  maritalStatusAndSpouse,
  setMaritalStatusAndSpouse,
}: MaritalStatusAndSpouseType) => {
  console.log({ maritalStatusAndSpouse, setMaritalStatusAndSpouse });

  // handle Marital Status And Spouse  form change
  const handleMaritalStatusAndSpouseChange = (e: OnchangeEventType): void => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setMaritalStatusAndSpouse((prev) => ({ ...prev, [name]: checked }));
    } else {
      setMaritalStatusAndSpouse((prev) => ({ ...prev, [name]: value }));
    }
  };

  return {
    handleMaritalStatusAndSpouseChange,
  };
};
export default useParentsGuardianDetails;
