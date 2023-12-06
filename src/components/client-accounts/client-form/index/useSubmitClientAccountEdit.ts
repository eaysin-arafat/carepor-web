import { useClientUpdateMutation } from "@/features/client/client-api";
import useFacility from "@/hooks/useFacility";
import { URLClientDetails } from "@/routers/client";
import { FormEvent, useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import maritalStatusAndSpouseValidation from "../marital-status-And-spouse/maritalStatusAndSpouseValidation";
import placeOfBirthReligiousValidation from "../place-of-birth-religious/placeOfBirthReligiousValidation";

const useSubmitClientAccountEdit = ({
  contactInfo,
  educationAndEmployment,
  maritalStatusAndSpouse,
  parentsOrGuardians,
  personalInfo,
  placeOfBirthAndReligion,
  editClient,
  setMaritalStatusAndSpouseError,
  setPlaceOfBirthAndReligionError,
  // setEducationAndEmploymentError,
}) => {
  const [clientUpdate, { status, isError, isSuccess, error }] =
    useClientUpdateMutation();

  // @ts-ignore
  const { user } = useSelector((state) => state.authentication);
  const facility = useFacility();

  // React Hook
  const navigate = useNavigate();

  const handleClientDataUpdate = async (e: FormEvent) => {
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

    const clientData = {
      oid: editClient.oid,
      key: editClient.oid,

      // dateCreated: today(),
      // createdBy: session?.user?.oid,
      //@ts-ignore
      modifiedIn: facility?.facilityId, // baseData?.createdIn,
      dateModified: new Date().toISOString(), // today(),
      modifiedBy: user.oid, //  baseData?.modifiedBy,

      // default edit form data
      ...personalInfo,
      ...parentsOrGuardians,
      ...maritalStatusAndSpouse,
      ...contactInfo,
      ...placeOfBirthAndReligion,
      ...educationAndEmployment,

      // data format for server validation
      noNRC: personalInfo.nrc == "000000/00/0" ? true : contactInfo.noNRC,
      cellphone: contactInfo.cellphone || "00000000000",
      // cellphoneCountryCode: contactInfo?.cellphoneCountryCode || "0000",
      otherCellphone: contactInfo?.otherCellphone
        ? contactInfo?.otherCellphone
        : "00000000000",
      otherCellphoneCountryCode: contactInfo?.otherCellphoneCountryCode
        ? contactInfo.otherCellphoneCountryCode
        : "0000",
      email: contactInfo.email || null,
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

    // Rtk mutation // put
    clientUpdate(clientData);
  };

  // // Handle Side Effects
  useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Client Account Update successful");
      navigate(URLClientDetails({ id: editClient.oid }));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError && status === "rejected") {
      Swal.fire({
        title: "Failed!",
        text:
          //@ts-ignore
          (error?.data && typeof error?.data === "string" && error?.data) ||
          "Client Account Update failed!",
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

  return { handleClientDataUpdate };
};

export default useSubmitClientAccountEdit;
