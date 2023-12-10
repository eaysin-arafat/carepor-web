import { useReadFacilitiesQuery } from "@/features/facility/facility-api";

const useFacilityData = (facilityId: number) => {
  const { data: facility } = useReadFacilitiesQuery(undefined);
  const findFacility =
    (Array.isArray(facility) &&
      facility.find((data) => data?.oid == facilityId)) ||
    null;

  return {
    facilityName: findFacility?.description,
  };
};

export default useFacilityData;
