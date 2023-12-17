import { TypeFacility } from "@/features/facility/facility-api";

export const findFacility = (
  facilityId: number = 0,
  facilites: TypeFacility[] = []
) => {
  const facility =
    (Array.isArray(facilites) &&
      facilites.find((data) => data.oid == facilityId)) ||
    null;

  return {
    facilityName: facility?.description,
  };
};
export default findFacility;
