// Search link validation and formatting
export const searchLinkValidatorForApi = ({
  facilityId,
  pageNo,
  itemPerPage,
  patientName,
  investigationDateSearch,
  resultType,
}) => {
  if (!itemPerPage || !facilityId || !pageNo) {
    return false;
  } else {
    let link = `/investigation/investigation-dashboard/${facilityId}?page=${pageNo}&pageSize=${itemPerPage}`;
    if (patientName) {
      link += `&PatientName=${patientName}`;
    } else {
      link += `&PatientName=${""}`;
    }

    //
    if (investigationDateSearch) {
      const pickerDateRaw = new Date(investigationDateSearch);
      const day =
        pickerDateRaw.getDate() < 10
          ? "0" + pickerDateRaw.getDate()
          : pickerDateRaw.getDate();
      const month =
        pickerDateRaw.getMonth() < 9
          ? "0" + (pickerDateRaw.getMonth() + 1)
          : pickerDateRaw.getMonth() + 1;
      const year = pickerDateRaw.getFullYear();
      link += `&investigationDateSearch=${month}%2F${day}%2F${year}`;
    } else {
      link += `&investigationDateSearch=${""}`;
    }
    if (resultType) {
      link += `&resultType=${resultType}`;
    }

    return link;
  }
};

// /investigation/investigation-dashboard/2912?page=1&pageSize=10&PatientName=MEBO%20BANDA&investigationDateSearch=10%2F10%2F2023
