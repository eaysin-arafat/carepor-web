import { useReadBedByWardQuery } from "@/features/bed/bed-api";
import { useReadDepartmentsQuery } from "@/features/department/department-api";
import { useReadFirmsByDepartmentIdQuery } from "@/features/firm/firm-api";
import { useCreateEncounterMutation } from "@/features/medical-encounter/medical-encounter-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useReadWardByFirmQuery } from "@/features/ward/ward-api";
import useBaseModel from "@/hooks/useBaseModel";
import { FacilityToken } from "@/types/coreTypes";
import { cookieManager } from "@/utilities/cookie-manager";
import {
  ClientAdmissionErrorType,
  clientAdmissionValidator,
} from "@/validation-models/client-admission-validator";
import dayjs from "dayjs";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const initialState = {
  admissionNote: "",
  bedID: "",
  departmentID: "",
  firmID: "",
  wardID: "",
  admissionDate: "",
};

const useCreate = () => {
  const [admissionData, setAdmissionData] = useState(initialState);
  const [errMsg, setErrMsg] = useState<ClientAdmissionErrorType>(initialState);

  // * Hooks
  const dispatch = useDispatch();
  const baseModel = useBaseModel({});
  const { clientId } = useParams();

  // * Handlers
  const handleAdmissionDataChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
    admissionData.departmentID,
    {
      skip: !admissionData.departmentID,
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: wards } = useReadWardByFirmQuery(admissionData.firmID, {
    skip: !admissionData.firmID,
    refetchOnMountOrArgChange: true,
  });

  const { data: beds } = useReadBedByWardQuery(admissionData.wardID, {
    skip: !admissionData.wardID,
    refetchOnMountOrArgChange: true,
  });

  const [createAdmission, { isLoading, isSuccess, isError, error, status }] =
    useCreateEncounterMutation();

  const closeModal = () => {
    dispatch(closeAddModal());
  };

  const handleDateChange = (date: Date | null) => {
    setAdmissionData((prev) => ({
      ...prev,
      admissionDate: date?.toISOString(),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { errors, isValid } = clientAdmissionValidator(admissionData);

    if (!isValid) return setErrMsg(errors);

    const data = {
      ...baseModel,
      ...admissionData,
      admissionDate: new Date(
        dayjs(admissionData.admissionDate).format("YYYY-MM-DD")
      ).toISOString(),
      clientID: clientId,
    };

    createAdmission(data);
  };

  // handle side effects
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeAddModal());
      toast.dismiss();
      toast.success("Admission created successfully");
      setAdmissionData(initialState);
      setErrMsg(initialState);
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string" ? error.data : "Error creating admission"
      );
    }
  }, [isSuccess, isError, status, error, dispatch]);

  return {
    admissionData,
    handleAdmissionDataChange,
    errMsg,
    closeModal,
    departments,
    firms,
    wards,
    beds,
    handleSubmit,
    handleDateChange,
    isLoading,
  };
};

export default useCreate;
