import { useReadDepartmentsQuery } from "@/features/department/department-api";
import { useReadWardsQuery } from "@/features/ward/ward-api";
import { FacilityToken } from "@/types/coreTypes";
import { cookieManager } from "@/utilities/cookie-manager";
import React from "react";

const useAdmissionFilter = () => {
  const [allFilters, setAllFilters] = React.useState(false);

  const facility = cookieManager.parseCookie<FacilityToken>("facility");

  // api hooks
  const { data: departments } = useReadDepartmentsQuery(facility?.facilityId, {
    skip: !facility?.facilityId,
    refetchOnMountOrArgChange: true,
  });

  const { data: wards } = useReadWardsQuery(null);

  // handlers
  const filtersHandler = () => {
    setAllFilters((prev) => !prev);
  };

  //   const myVar = `${allFilters === false ? "hidden" : ""}`;
  const isFiltersHidden = `${allFilters === false ? "hidden" : ""}`;

  return {
    allFilters,
    filtersHandler,
    isFiltersHidden,
    departments,
    wards,
  };
};

export default useAdmissionFilter;
