import { useReadBedByWardQuery } from "@/features/bed/bed-api";
import { useReadDepartmentsQuery } from "@/features/department/department-api";
import { useReadFirmsByDepartmentIdQuery } from "@/features/firm/firm-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useReadWardByFirmQuery } from "@/features/ward/ward-api";
import { FacilityToken } from "@/types/coreTypes";
import { cookieManager } from "@/utilities/cookie-manager";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const useCreate = () => {
  const [admissionData, setAdmissionData] = useState({
    admissionDate: "",
    department: "",
    firmUnit: "",
    ward: "",
    bed: "",
    additionalComments: "",
  });

  const [errMsg, setErrMsg] = useState({
    admissionDate: "",
    department: "",
    firmUnit: "",
    ward: "",
    bed: "",
    additionalComments: "",
  });

  const dispatch = useDispatch();

  const handleAdmissionDataChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setAdmissionData((prev) => ({ ...prev, [name]: value }));
    setErrMsg((prev) => ({ ...prev, [name]: "" }));
  };

  const facility = cookieManager.parseCookie<FacilityToken>("facility_token");

  // api hooks
  const { data: departments } = useReadDepartmentsQuery(facility?.facilityId, {
    skip: !facility?.facilityId,
    refetchOnMountOrArgChange: true,
  });

  const { data: firms } = useReadFirmsByDepartmentIdQuery(
    admissionData.department,
    {
      skip: !admissionData.department,
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: wards } = useReadWardByFirmQuery(admissionData.firmUnit, {
    skip: !admissionData.firmUnit,
    refetchOnMountOrArgChange: true,
  });

  const { data: beds } = useReadBedByWardQuery(admissionData.ward, {
    skip: !admissionData.ward,
    refetchOnMountOrArgChange: true,
  });

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  return {
    admissionData,
    handleAdmissionDataChange,
    errMsg,
    closeModal,
    departments,
    firms,
    wards,
    beds,
  };
};

export default useCreate;
