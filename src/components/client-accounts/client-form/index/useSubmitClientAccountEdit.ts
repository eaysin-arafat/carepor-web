import { useClientUpdateMutation } from "@/features/client/client-api";
import { FormEvent, useEffect } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const useSubmitClientAccountEdit = ({
  contactInfo,
  educationAndEmployment,
  maritalStatusAndSpouse,
  parentsOrGuardians,
  personalInfo,
  placeOfBirthAndReligion,
  editClient,
}) => {
  const [clientUpdate, { status, isError, isSuccess, error }] =
    useClientUpdateMutation();

  const handleClientDataUpdate = async (e: FormEvent) => {
    e.preventDefault();

    const clientData = {
      oid: editClient.oid,
      key: editClient.oid,

      // dateCreated: today(),
      // createdBy: session?.user?.oid,
      modifiedIn: 2912, // baseData?.createdIn,
      dateModified: new Date().toISOString(), // today(),
      modifiedBy: "f53101db-baf7-4f2c-4e44-08dbcd4df0dd", //  baseData?.modifiedBy,
      // isDeleted: false,
      // isSynced: false,
      // hivStatus: 0,
      // isDeceased: false,
      // isOnART: false,
      // isAdmitted: false,

      // ...initialState,
      // ...dateInputs,
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
      // navigate(`/clients/details/${data?.oid}`);
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
