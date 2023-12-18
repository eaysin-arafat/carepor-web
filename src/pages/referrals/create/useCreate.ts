import { EnumEncounterType } from "@/enum/encounter-type";
import { useReadDistrictsQuery } from "@/features/district/district-api";
import { useReadFacilitiesQuery } from "@/features/facility/facility-api";
import { closeAddModal } from "@/features/modal/modal-slice";
import { useReadProvincesQuery } from "@/features/province/province-api";
import { useCreateReferralMutation } from "@/features/referrals/referrals-api";
import { useReadServicePointsQuery } from "@/features/service-points/service-points-api";
import useBaseModel from "@/hooks/useBaseModel";
import useClient from "@/hooks/useClient";
import useEncounter from "@/hooks/useEncounter";
import { referralValidator } from "@/validation-models/referral-validator";
import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ReferralsErrorType } from "./Create";

const initialState = {
  isProceededFacility: true,
  reasonForReferral: "",
  referralType: "",
  otherFacility: "",
  otherFacilityType: "",
  servicePointId: "",
  receivingFacilityId: "",
  referredFacilityId: "",
  facilityId: "",
  provinceId: "",
  districtId: "",
  comments: "",
};

const useCreate = () => {
  const [referralData, setReferralData] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState<ReferralsErrorType>({});

  const client = useClient();
  const encounter = useEncounter(EnumEncounterType.Referral);
  const baseData = useBaseModel({});
  const dispatch = useDispatch();

  const { data: provinces, isSuccess: isLoadedProvinces } =
    useReadProvincesQuery({});
  const { data: districts, isSuccess: isLoadedDistricts } =
    useReadDistrictsQuery({});
  const { data: facilities, isSuccess: isLoadedFacilities } =
    useReadFacilitiesQuery(undefined);
  const { data: servicePoints, isSuccess: isLoadedServicePoints } =
    useReadServicePointsQuery(null);
  const [createReferral, { isSuccess, isLoading, isError, error, status }] =
    useCreateReferralMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReferralData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg((prev) => ({ ...prev, [name]: "" }));
  };

  const filteredDistricts = useMemo(() => {
    return districts?.filter(
      (district) => district?.provinceId == referralData?.provinceId
    );
  }, [districts, referralData?.provinceId]);

  const filteredFacilities = useMemo(() => {
    return facilities?.filter(
      (facility) => facility.districtId === +referralData?.districtId
    );
  }, [facilities, referralData?.districtId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { isValid, errors } = referralValidator(referralData);
    if (!isValid) return setErrorMsg(errors);

    const payload = {
      ...baseData,
      ...encounter,
      clientId: client?.oid,
      ...referralData,
      receivingFacilityId:
        referralData.referralType !== "2"
          ? baseData?.createdIn
          : referralData.receivingFacilityId,
    };

    createReferral(payload);
  };

  // handle side effects
  React.useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      dispatch(closeAddModal());
      setReferralData(initialState);
      toast.dismiss();
      toast.success("Referral created successfully");
    } else if (isError && "data" in error) {
      toast.dismiss();
      toast.error(
        typeof error.data === "string" ? error.data : "Error creating referral"
      );
    }
  }, [isSuccess, isError, status, error, dispatch]);

  return {
    referralData,
    handleChange,
    handleSubmit,
    errorMsg,
    filteredDistricts,
    filteredFacilities,
    isLoadedProvinces,
    isLoadedDistricts,
    isLoadedFacilities,
    isLoadedServicePoints,
    isLoading,
    servicePoints,
    provinces,
    status,
  };
};

export default useCreate;
