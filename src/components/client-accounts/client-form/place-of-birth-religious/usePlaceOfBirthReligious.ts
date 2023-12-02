// const usePlaceOfBirthReligious
import useManageFacility from "@/hooks/useManageFacility";
import { ClientPlaceOfBirthAndReligionType } from "@/types/clientFormTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";

type Props = {
  placeOfBirthAndReligion: ClientPlaceOfBirthAndReligionType;
  setPlaceOfBirthAndReligion: SetStateType<ClientPlaceOfBirthAndReligionType>;
};

const usePlaceOfBirthReligious = ({
  placeOfBirthAndReligion,
  setPlaceOfBirthAndReligion,
}: Props) => {
  console.log({ placeOfBirthAndReligion });

  const districtAndProvince = useManageFacility();
  // const {
  //   districtOptions,
  //   provinceOptions,
  //   facilityState,
  //   facilityChangeHandler,
  // } = districtAndProvince;

  // handle Marital Status And Spouse  form change
  const handlePlaceOfBirthAndReligionChange = (e: OnchangeEventType): void => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setPlaceOfBirthAndReligion((prev) => ({ ...prev, [name]: checked }));
    } else {
      setPlaceOfBirthAndReligion((prev) => ({ ...prev, [name]: value }));
    }
  };

  return {
    handlePlaceOfBirthAndReligionChange,
    districtAndProvince,
  };
};
export default usePlaceOfBirthReligious;
