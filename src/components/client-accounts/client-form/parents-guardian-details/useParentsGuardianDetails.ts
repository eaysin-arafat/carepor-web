import { ClientParentsOrGuardiansType } from "@/types/clientFormTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
// import { OnchangeEventType } from "@/types/htmlEvents";
// import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";

type ParentsGuardianDetailsType = {
  parentsOrGuardians: ClientParentsOrGuardiansType;
  setParentsOrGuardians: SetStateType<ClientParentsOrGuardiansType>;
};
const useParentsGuardianDetails = ({
  parentsOrGuardians,
  setParentsOrGuardians,
}: ParentsGuardianDetailsType) => {
  console.log({ parentsOrGuardians, setParentsOrGuardians });
  //

  // handle personal info form change
  const handleParentsGuardianDetailsChange = (e: OnchangeEventType): void => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setParentsOrGuardians((prev) => ({ ...prev, [name]: checked }));
    } else {
      setParentsOrGuardians((prev) => ({ ...prev, [name]: value }));
    }
  };

  //

  return {
    handleParentsGuardianDetailsChange,
    // personalInfo,
  };
};

export default useParentsGuardianDetails;
