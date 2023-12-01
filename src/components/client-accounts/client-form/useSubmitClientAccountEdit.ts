const useSubmitClientAccountEdit = () => {
  const handleClientDataUpdate = async (e) => {
    e.preventDefault();

    const { isValid, error: validationError } = clientCreateValidator({
      clientPrevData: data,
      // ...dateInputs,
      ...personalInfo,
      ...parentsOrGuardian, // no required filed if client over or same age 18.
      ...maritalStatusAndSpouse,
      ...contactInfo,
      ...placeOfBirthAndReligion,
      ...educationAndEmployment,
      searchClients: prevClientByNRC,
      isEditForm: true,
    });

    // If from data is on valid set form error
    if (!isValid) {
      setInputError(validationError);
      return false;
    }

    const clientData = {
      oid: data.oid,

      // dateCreated: today(),
      // createdBy: session?.user?.oid,
      modifiedIn: baseData?.createdIn,
      dateModified: today(),
      modifiedBy: baseData?.modifiedBy,
      // isDeleted: false,
      // isSynced: false,
      // hivStatus: 0,
      // isDeceased: false,
      // isOnART: false,
      // isAdmitted: false,

      // ...initialState,
      // ...dateInputs,
      ...personalInfo,
      ...parentsOrGuardian,
      ...maritalStatusAndSpouse,
      ...contactInfo,
      ...placeOfBirthAndReligion,
      ...educationAndEmployment,

      // data format for server validation
      noNRC: personalInfo.nrc == "000000/00/0" ? true : contactInfo.noNRC,
      cellphone: contactInfo.cellphone || "00000000000",
      cellphoneCountryCode: contactInfo?.cellphoneCountryCode || "0000",
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
      fathersSurname: parentsOrGuardian?.fathersSurname || null,
      fathersFirstName: parentsOrGuardian?.fathersFirstName || null,
      mothersSurname: parentsOrGuardian?.mothersSurname || null,
      mothersFirstName: parentsOrGuardian?.mothersFirstName || null,
      guardiansFirstName: parentsOrGuardian?.guardiansFirstName || null,
      guardiansSurname: parentsOrGuardian?.guardiansSurname || null,
      spousesLegalName: maritalStatusAndSpouse?.spousesLegalName || null,
      spousesSurname: maritalStatusAndSpouse?.spousesSurname || null,
      occupationId: educationAndEmployment?.occupationId || null,
      educationLevelId: educationAndEmployment?.educationLevelId || null,
      districtId: placeOfBirthAndReligion?.districtId || null,
      provinceId: placeOfBirthAndReligion?.provinceId || null,
    };

    // Rtk mutation // put
    updateClientAccount({ body: clientData, clientId: clientData.oid });
  };

  // // Handle Side Effects
  useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      toast.dismiss();
      toast.success("Client Account Update successful");
      navigate(`/clients/details/${data?.oid}`);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError && status === "rejected") {
      Swal.fire({
        title: "Failed!",
        text: error?.data || "Client Account Update failed!",
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
};
