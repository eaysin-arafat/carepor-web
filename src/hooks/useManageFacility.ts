import { useReadDistrictsQuery } from "@/features/district/district-api";
import { useReadFacilitiesQuery } from "@/features/facility/facility-api";
import { useReadProvincesQuery } from "@/features/province/province-api";
import { onchangeEvent } from "@/types/htmlEvents";
import React from "react";

function useManageFacility(oldFacility?: string) {
  // data from rtk
  //
  const { data: provinces } = useReadProvincesQuery(undefined);
  const { data: districts } = useReadDistrictsQuery(undefined);
  const { data: facilities } = useReadFacilitiesQuery(undefined);

  const initialState = { facility: "", district: "", province: "" };
  const [facilityState, setFacilityState] = React.useState(initialState);
  const [facilityError, setFacilityError] = React.useState(initialState);

  const facilityChange = (e: onchangeEvent) => {
    const { name, value } = e.target;
    if (name == "province") {
      setFacilityState({ ...initialState, province: value });
      return setFacilityError(initialState);
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
      districts.filter((dis) => dis.provinceId == facilityState?.province)) ||
    [];
  const filteredFacility =
    (Array.isArray(facilities) &&
      facilities.filter((dis) => dis.districtId == facilityState?.district)) ||
    [];

  console.log(oldFacility);

  // useEffect(() => {
  //   if (oldFacility) {
  //     const lastAttachedFacilityId = oldFacility || undefined;
  //     const facilityObj = Array.isArray(facility)
  //       ? facility.find((data) => data.oid == lastAttachedFacilityId)
  //       : null;
  //     const findDistrictObj = Array.isArray(districts)
  //       ? districts?.find((data) => data.oid === facilityObj?.districtId)
  //       : null;
  //     const findProvinceObj = Array.isArray(provinces)
  //       ? provinces?.find((data) => data?.oid === findDistrictObj?.provinceId)
  //       : null;

  //     if (findProvinceObj) {
  //       setFacilityState((prev) => ({
  //         ...prev,
  //         province: findProvinceObj?.oid,
  //         district: findDistrictObj?.oid,
  //         facility: oldFacility,
  //       }));
  //     }
  //   } else {
  //     setFacilityState(initialState);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [oldFacility, facilities, districts, provinces]);

  // const facilityValid = () => {
  //   const { errors, isFacilityValid } = validation(facilityState);
  //   setFacilityError((prev) => ({ ...prev, ...errors }));
  //   return { isFacilityValid, facilityError: errors };
  // };

  return {
    // options array
    options: {
      provinceOptions,
      districtOptions: filteredDist,
      facilitiesOptions: filteredFacility,
    },
    // onChange: function
    facilityChange,
    // states
    setFacilityState,
    facilityState,
    setFacilityError,
    facilityError,
    // validation function
    // facilityValid,
  };
}

export default useManageFacility;

// const validation = (data) => {
//   const errors = {};

//   if (!data.facility) errors.facility = "Required";
//   if (!data.district) errors.district = "Required";
//   if (!data.province) errors.province = "Required";

//   return {
//     isFacilityValid: Object.keys(errors).length == 0,
//     errors,
//   };
// };
