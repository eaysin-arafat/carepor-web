import {
  TypeFacility,
  useReadFacilitiesQuery,
} from "@/features/facility/facility-api";

const useFindFacility = () => {
  const { data: facilities } = useReadFacilitiesQuery(undefined);

  /**
   * get facility information by id
   * @param facilityId
   * @returns
   */
  const getFacility = (facilityId: number): TypeFacility | null => {
    const facility =
      (Array.isArray(facilities) &&
        facilities.find((data) => data.oid == facilityId)) ||
      null;
    return facility;
  };

  /**
   * get facility information by id
   * @param facilityId
   * @returns
   */
  const getFacilityName = (facilityId: number): string | undefined => {
    const facility = getFacility(facilityId);
    return facility?.description;
  };

  return {
    getFacilityName,
    getFacility,
  };
};

export default useFindFacility;
