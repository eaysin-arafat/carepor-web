import { RootState } from "@/app/store";
import { useCreateClientMutation } from "@/features/client/client-api";
import { URLClientDetails } from "@/routers/client";
import { cookieManager } from "@/utilities/cookie-manager";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import maritalStatusAndSpouseValidation from "../marital-status-And-spouse/maritalStatusAndSpouseValidation";
import placeOfBirthReligiousValidation from "../place-of-birth-religious/placeOfBirthReligiousValidation";
import { useDispatch } from "react-redux";
import { setClientFormStep } from "@/features/client/client-form-slice";

// export type ClientCreateFormSubmitHookType = {
//   personalInfo: ClientPersonalInfoType;
//   parentsOrGuardians;
//   maritalStatusAndSpouse;
//   contactInfo;
//   placeOfBirthAndReligion;
//   educationAndEmployment;
//   handleFormReset;
// };

const useSubmitClientAccountCreate = ({
  personalInfo,
  parentsOrGuardians,
  maritalStatusAndSpouse,
  contactInfo,
  placeOfBirthAndReligion,
  educationAndEmployment,
  handleFormReset,
  setMaritalStatusAndSpouseError,
  setPlaceOfBirthAndReligionError,
  // setEducationAndEmploymentError,
}) => {
  const { user } = useSelector((state: RootState) => state.authentication);
  const dispatch = useDispatch();

  const facility = cookieManager.parseCookie("facility");

  const [
    clientRegistration,
    { data: clientData, status, isError, isSuccess, error },
  ] = useCreateClientMutation();

  // React Hook
  const navigate = useNavigate();

  const handleClientDataSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    //with three step
    const { isMaritalStatusAndSpouseValid, maritalStatusAndSpouseErrors } =
      maritalStatusAndSpouseValidation(maritalStatusAndSpouse);
    const { isPlaceOfBirthReligious, placeOfBirthReligiousErrors } =
      placeOfBirthReligiousValidation(placeOfBirthAndReligion);

    if (!isMaritalStatusAndSpouseValid) {
      setMaritalStatusAndSpouseError(maritalStatusAndSpouseErrors);
      setPlaceOfBirthAndReligionError(maritalStatusAndSpouseErrors);
    }
    if (!isPlaceOfBirthReligious) {
      setMaritalStatusAndSpouseError(maritalStatusAndSpouseErrors);
      setPlaceOfBirthAndReligionError(placeOfBirthReligiousErrors);
    }
    if (!isMaritalStatusAndSpouseValid || !isPlaceOfBirthReligious) {
      return false;
    }

    //@ts-ignore
    if (!facility?.facilityId) {
      console.log("facility not found");
      return;
    }

    const baseData = {
      createdBy: user.oid,
      // @ts-ignore
      createdIn: facility?.facilityId,
      dateCreated: new Date().toISOString(),
      isDeleted: false,
      isSynced: false,
      //
      hivStatus: 0,
      isDeceased: false,
      isOnART: false,
      isAdmitted: false,
      //
      // dateModified: "2023-12-01T13:44:00",
      // modifiedBy: "f53101db-baf7-4f2c-4e44-08dbcd4df0dd",
    };

    const clientFormData = {
      ...baseData,
      // initialization state data
      ...personalInfo,
      ...parentsOrGuardians,
      ...maritalStatusAndSpouse,
      ...contactInfo,
      ...placeOfBirthAndReligion,
      ...educationAndEmployment,

      // data format for server match
      noNRC: personalInfo.nrc == "000000/00/0" ? true : contactInfo.noNRC,
      cellphone: contactInfo?.cellphone || "00000000000",
      cellphoneCountryCode: contactInfo?.cellphoneCountryCode || "0000",
      otherCellphone: contactInfo?.otherCellphone || "00000000000",
      otherCellphoneCountryCode:
        contactInfo?.otherCellphoneCountryCode || "0000",
      email: contactInfo?.email || null,
      landline: contactInfo?.landline || null,
      landlineCountryCode: contactInfo?.landline
        ? contactInfo.landlineCountryCode
        : "0000",

      isZambianBorn: placeOfBirthAndReligion.isZambianBorn == 1 ? true : false,
      fathersSurname: parentsOrGuardians?.fathersSurname || null,
      fathersFirstName: parentsOrGuardians?.fathersFirstName || null,
      mothersSurname: parentsOrGuardians?.mothersSurname || null,
      mothersFirstName: parentsOrGuardians?.mothersFirstName || null,
      guardiansFirstName: parentsOrGuardians?.guardiansFirstName || null,
      guardiansSurname: parentsOrGuardians?.guardiansSurname || null,
      spousesLegalName: maritalStatusAndSpouse?.spousesLegalName || null,
      spousesSurname: maritalStatusAndSpouse?.spousesSurname || null,
      occupationId: educationAndEmployment?.occupationId || null,
      educationLevelId: educationAndEmployment?.educationLevelId || null,
      districtId: placeOfBirthAndReligion?.districtId || null,
      provinceId: placeOfBirthAndReligion?.provinceId || null,
    };

    // RTK mutation // Post
    clientRegistration(clientFormData);
  };

  // Handle Side Effects
  useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      if (clientData.oid) {
        toast.dismiss();
        toast.success("Client registered successfully");
        dispatch(setClientFormStep(1));
        handleFormReset();
        navigate(URLClientDetails({ id: clientData.oid }));
      }
    }
  }, [isSuccess, clientData?.oid, status]);

  useEffect(() => {
    if (isError && status === "rejected") {
      Swal.fire({
        title: "Failed!",
        text:
          //@ts-ignore
          (error?.data && typeof error?.data === "string" && error?.data) ||
          "Client registered failed!",
        icon: "error",
        // showCancelButton: true,
        confirmButtonColor: "#3085d6",
        // cancelButtonColor: "#d33",
        confirmButtonText: "Close",
      }).then((result) => {
        if (result.isConfirmed) {
        }
      });
    }
  }, [isError]);

  // Return handler
  return { handleClientDataSubmit };
};

export default useSubmitClientAccountCreate;

// const handleMaritalStatusAndSpouseNext = (): {
//   isSuccessMaritalStatusAndSpouse: boolean;
// } => {
//   const {
//     isMaritalStatusAndSpouseValid,
//     maritalStatusAndSpouseErrors,
//     // Form section Error
//   } = maritalStatusAndSpouseValidation(maritalStatusAndSpouse);

//   if (!isMaritalStatusAndSpouseValid) {
//     setMaritalStatusAndSpouseError(maritalStatusAndSpouseErrors);
//     return {
//       isSuccessMaritalStatusAndSpouse: false,
//     };
//   } else {
//     setMaritalStatusAndSpouseError(null);
//     // handleStepNext()
//     return {
//       isSuccessMaritalStatusAndSpouse: true,
//     };
//   }
// };

// const handlePlaceOfBirthAndReligionNext = (): {
//   isSuccessPlaceOfBirthAndReligion: boolean;
// } => {
//   const { isPersonalInfoValid, placeOfBirthReligiousErrors } =
//     placeOfBirthReligiousValidation({
//       ...placeOfBirthAndReligion,
//     });

//   if (!isPersonalInfoValid) {
//     setPlaceOfBirthAndReligionError(placeOfBirthReligiousErrors);
//     return {
//       isSuccessPlaceOfBirthAndReligion: false,
//     };
//   } else {
//     setPlaceOfBirthAndReligionError(null);
//     // handleStepNext();
//     return {
//       isSuccessPlaceOfBirthAndReligion: true,
//     };
//   }
// };
