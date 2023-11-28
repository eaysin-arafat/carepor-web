// fake file
import { useReadDistrictsQuery } from "@/features/district/district-api";
import { useReadFacilitiesQuery } from "@/features/facility/facility-api";
import { useReadProvincesQuery } from "@/features/province/province-api";
import {
  DistrictType,
  facilityStateErrorType,
  facilityStateType,
} from "@/types/coreTypes";
import { OnchangeEventType } from "@/types/htmlEvents";
import React from "react";

function useManageFacility(oldFacility?: string | number) {
  //facility =

  const { data: provinces } = useReadProvincesQuery(undefined);
  const { data: districts } = useReadDistrictsQuery(undefined);
  const { data: facilities } = useReadFacilitiesQuery(undefined);

  const initialState: facilityStateType = {
    facility: "",
    district: "",
    province: "",
  };
  const [facilityState, setFacilityState] =
    React.useState<facilityStateType>(initialState);
  const [facilityError, setFacilityError] =
    React.useState<facilityStateErrorType>({});

  const facilityChangeHandler = (e: OnchangeEventType) => {
    const { name, value } = e.target;
    if (name == "province") {
      setFacilityState({ ...initialState, province: value });
      return setFacilityError({});
    }
    if (name == "district") {
      setFacilityState((prev) => ({ ...prev, district: value, facility: "" }));
      return setFacilityError((prev) => ({
        ...prev,
        district: "",
        facility: "",
      }));
    }
    if (name == "facility") {
      setFacilityState((prev) => ({ ...prev, facility: value }));
      return setFacilityError((prev) => ({ ...prev, facility: "" }));
    }
    if (name == "district") {
      setFacilityState((prev) => ({ ...prev, district: value, facility: "" }));
      return setFacilityError((prev) => ({
        ...prev,
        district: "",
        facility: "",
      }));
    }
    if (name == "facility") {
      setFacilityState((prev) => ({ ...prev, facility: value }));
      return setFacilityError((prev) => ({ ...prev, facility: "" }));
    }

    if (!["faculty", "district", "province"].includes(name)) {
      return console.log("Please add name of input component");
    }
  };

  const provinceOptions = (Array.isArray(provinces) && provinces) || [];
  const filteredDist =
    (Array.isArray(districts) &&
      districts.filter(
        (dis: DistrictType) => dis.provinceId == facilityState?.province
      )) ||
    [];
  const filteredFacility =
    (Array.isArray(facilities) &&
      facilities.filter(
        (facility) => facility.districtId == facilityState?.district
      )) ||
    [];

  React.useEffect(() => {
    if (oldFacility) {
      const lastAttachedFacilityId: number | string | undefined = oldFacility;
      const facilityObj = Array.isArray(facilities)
        ? facilities.find((data) => data?.oid == lastAttachedFacilityId)
        : null;
      const findDistrictObj = Array.isArray(districts)
        ? districts?.find((data) => data.oid === facilityObj?.districtId)
        : null;
      const findProvinceObj = Array.isArray(provinces)
        ? provinces?.find((data) => data?.oid === findDistrictObj?.provinceId)
        : null;

      if (findProvinceObj) {
        setFacilityState((prev) => ({
          ...prev,
          province: findProvinceObj?.oid || "",
          district: findDistrictObj?.oid || "",
          facility: oldFacility,
        }));
      }
    } else {
      setFacilityState(initialState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oldFacility, facilities, districts, provinces]);

  // if require combine validations
  /**
   * @useMessage if only facility input fields in form than use
   * @useMessage this facilityValid function and get error state
   * @returns {
   *  facilityState
   * }
   */
  const facilityValid = () => {
    const { errors, isFacilityValid } = validation(facilityState);
    setFacilityError((prev) => ({ ...prev, ...errors }));
    return { isFacilityValid, facilityError: errors };
  };

  return {
    // options array
    provinceOptions,
    districtOptions: filteredDist,
    facilitiesOptions: filteredFacility,
    // onChange > function
    facilityChangeHandler,
    // states
    setFacilityState,
    facilityState,
    setFacilityError,
    facilityError,

    // validation function //
    facilityValid,
  };
}

export default useManageFacility;

const validation = (data: facilityStateType) => {
  const errors: facilityStateErrorType = {};

  if (!data.facility) errors.facility = "Required";
  if (!data.district) errors.district = "Required";
  if (!data.province) errors.province = "Required";

  return {
    isFacilityValid: Object.keys(errors).length == 0,
    errors,
  };
};
