// const usePlaceOfBirthReligious
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
  useEffect(() => {
    if (placeOfBirthAndReligion.isZambianBorn != "1") {
      setPlaceOfBirthAndReligionError((p) => ({
        ...p,
        districtId: "",
        provinceId: "",
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
          districtId: "",
          provinceId: "",
        }));
        setPlaceOfBirthAndReligionError((prev) => ({
          ...prev,
          [name]: "",
          districtId: "",
          provinceId: "",
        }));

        return;
      }
      if (value == "1") {
        setPlaceOfBirthAndReligion((prev) => ({
          ...prev,
          [name]: value,
          birthPlace: "",
        }));
        setPlaceOfBirthAndReligionError((prev) => ({
          ...prev,
          [name]: "",
          birthPlace: "",
        }));
      }
    }
    if (name === "ProvinceId") {
      setPlaceOfBirthAndReligion((prev) => ({
        ...prev,
        [name]: value,
        districtId: "",
      }));
      setPlaceOfBirthAndReligionError((prev) => ({
        ...prev,
        [name]: "",
        districtId: "",
      }));
      return;
    }
    setPlaceOfBirthAndReligion((prev) => ({ ...prev, [name]: value }));
    setPlaceOfBirthAndReligionError((prev) => ({ ...prev, [name]: "" }));
    return;
  };

  const handlePlaceOfBirthAndReligionNext = () => {
    const { isPersonalInfoValid, placeOfBirthReligiousErrors } =
      placeOfBirthReligiousValidation({
        ...placeOfBirthAndReligion,
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
    handlePlaceOfBirthAndReligionNext,
  };
};
export default usePlaceOfBirthReligious;
