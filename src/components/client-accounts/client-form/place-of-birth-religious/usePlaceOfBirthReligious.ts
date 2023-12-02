// const usePlaceOfBirthReligious
import useManageFacility from "@/hooks/useManageFacility";
import {
  ClientPlaceOfBirthAndReligionErrorType,
  ClientPlaceOfBirthAndReligionType,
} from "@/types/clientFormTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
import { SetStateType } from "@/types/reactTypes";
import { useEffect } from "react";
import placeOfBirthReligiousValidation from "./placeOfBirthReligiousValidation";

type Props = {
  placeOfBirthAndReligion: ClientPlaceOfBirthAndReligionType;
  setPlaceOfBirthAndReligion: SetStateType<ClientPlaceOfBirthAndReligionType>;
  setPlaceOfBirthAndReligionError: SetStateType<ClientPlaceOfBirthAndReligionErrorType>;
  handleStepNext: () => void;
};

const usePlaceOfBirthReligious = ({
  placeOfBirthAndReligion,
  setPlaceOfBirthAndReligion,
  setPlaceOfBirthAndReligionError,
  handleStepNext,
}: Props) => {
  const districtAndProvince = useManageFacility();
  const { facilityState, setFacilityState } = districtAndProvince;

  useEffect(() => {
    if (placeOfBirthAndReligion.isZambianBorn != "1") {
      setPlaceOfBirthAndReligionError((p) => ({
        ...p,
        district: "",
        province: "",
      }));
    }
    if (placeOfBirthAndReligion.isZambianBorn != "2") {
      setPlaceOfBirthAndReligionError((p) => ({
        ...p,
        birthPlace: "",
      }));
    }
  }, [placeOfBirthAndReligion.isZambianBorn]);

  // handle Marital Status And Spouse  form change
  const handlePlaceOfBirthAndReligionChange = (e: OnchangeEventType): void => {
    const { name, value } = e.target;
    if (name === "isZambianBorn") {
      if (value != "1") {
        setPlaceOfBirthAndReligion((prev) => ({
          ...prev,
          [name]: value,
          birthPlace: "",
        }));
        setPlaceOfBirthAndReligionError((prev) => ({ ...prev, [name]: "" }));
        setFacilityState((prev) => ({ ...prev, district: "", province: "" }));
        return;
      }
      if (value == "1") {
        setPlaceOfBirthAndReligion((prev) => ({
          ...prev,
          [name]: value,
          birthPlace: "",
        }));
        setPlaceOfBirthAndReligionError((prev) => ({ ...prev, [name]: "" }));
      }
    } else {
      setPlaceOfBirthAndReligion((prev) => ({ ...prev, [name]: value }));
      setPlaceOfBirthAndReligionError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePlaceOfBirthAndReligionNext = () => {
    const { isPersonalInfoValid, placeOfBirthReligiousErrors } =
      placeOfBirthReligiousValidation({
        ...placeOfBirthAndReligion,
        district: facilityState.district,
        province: facilityState.province,
      });

    if (!isPersonalInfoValid) {
      setPlaceOfBirthAndReligionError(placeOfBirthReligiousErrors);
      return false;
    } else {
      setPlaceOfBirthAndReligionError(null);
      handleStepNext();
    }
  };

  return {
    handlePlaceOfBirthAndReligionChange,
    districtAndProvince,
    handlePlaceOfBirthAndReligionNext,
  };
};
export default usePlaceOfBirthReligious;
