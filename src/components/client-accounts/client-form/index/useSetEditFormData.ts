import { ClientPersonalInfoType } from "@/types/clientTypes";

const useSetEditFormData = (data) => {
  // let provinceId = data?.district?.provinceId;

  // useEffect(() => {
  //   if (provinceId) {
  //     getDistrictsByProvinceId(provinceId);
  //   }
  // }, [provinceId]);

  const prevPersonalInfo: ClientPersonalInfoType = {
    firstName: data?.firstName,
    surname: data?.surname,
    sex: data?.sex,
    // dob: data?.dob,
    dob: data?.dob ? new Date(data?.dob).toISOString() : "",
    isDOBEstimated: data?.isDOBEstimated,
    nrc: data?.nrc,
    noNRC: data?.noNRC,
    countryId: data?.countryId,
    napsaNumber: data?.napsaNumber,
    underFiveCardNumber: data?.underFiveCardNumber,
    nupn: data?.nupn,
    registrationDate: data?.registrationDate
      ? new Date(data?.registrationDate).toISOString()
      : "",
    // registrationDate: data?.registrationDate
    //   ? new Date(data?.registrationDate)
    //   : "",
  };

  // const nrcInputsState = {
  //   nrc: data?.nrc,
  //   fathersNRC: data?.fathersNRC,
  //   mothersNRC: data?.mothersNRC,
  //   guardiansNRC: data?.guardiansNRC,
  // };

  const prevParentsOrGuardians = {
    fathersFirstName: data?.fathersFirstName,
    fathersSurname: data?.fathersSurname,
    fathersNRC: data?.fathersNRC,
    fatherNAPSANumber: data?.fatherNAPSANumber,
    fatherNationality: data?.fatherNationality,
    isFatherDeceased: data?.isFatherDeceased,
    mothersFirstName: data?.mothersFirstName,
    mothersSurname: data?.mothersSurname,
    mothersNRC: data?.mothersNRC,
    motherNAPSANumber: data?.motherNAPSANumber,
    motherNationality: data?.motherNationality,
    isMotherDeceased: data?.isMotherDeceased,
    guardiansFirstName: data?.guardiansFirstName,
    guardiansSurname: data?.guardiansSurname,
    guardiansNRC: data?.guardiansNRC,
    guardianNAPSANumber: data?.guardianNAPSANumber,
    guardianNationality: data?.guardianNationality,
    guardianRelationship: data?.guardianRelationship,
  };

  const prevContactInfo = {
    cellphoneCountryCode:
      data?.cellphone == "00000000000" ? "" : data?.cellphoneCountryCode,
    cellphone: data?.cellphone == "00000000000" ? "" : data?.cellphone,
    otherCellphoneCountryCode:
      data?.otherCellphone == "00000000000"
        ? ""
        : data?.otherCellphoneCountryCode,
    otherCellphone:
      data?.otherCellphone == "00000000000" ? "" : data?.otherCellphone,
    noCellphone: data?.noCellphone,
    landlineCountryCode: data?.landlineCountryCode,
    landline: data?.landline,
    email: data?.email,
    householdNumber: data?.householdNumber,
    road: data?.road,
    area: data?.area,
    townName: data?.townName,
    landmarks: data?.landmarks,
  };

  const prevMaritalStatusAndSpouse = {
    spousesLegalName: data?.spousesLegalName,
    spousesSurname: data?.spousesSurname,
    maritalStatus: data?.maritalStatus,
  };

  const prevPlaceOfBirthAndReligion = {
    homeLanguageId: JSON.stringify(data?.homeLanguageId),
    isZambianBorn: data?.isZambianBorn ? "1" : "2",
    provinceId: data?.district?.provinceId ? data?.district?.provinceId : "",
    districtId: data?.districtId ? data?.districtId : "",
    birthPlace: data?.birthPlace ? data?.birthPlace : "",
    religion: JSON.stringify(data?.religion),
  };
  const districtProvince = {
    district: data?.districtId,
    province: data?.provinceId,
  };
  const prevEducationAndEmployment = {
    educationLevelId: data?.educationLevelId,
    occupationId: data?.occupationId,
  };

  return {
    prevPersonalInfo,
    prevParentsOrGuardians,
    prevContactInfo,
    prevMaritalStatusAndSpouse,
    prevPlaceOfBirthAndReligion,
    prevEducationAndEmployment,
    districtProvince,
  };
};

export default useSetEditFormData;
