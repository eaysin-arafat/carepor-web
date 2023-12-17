import { Encounter } from "@/features/medical-encounter/medical-encounter-api";
import { cookieManager } from "@/utilities/cookie-manager";

const useEncounter = (opdVisitType) => {
  const encounter = cookieManager.parseCookie<Encounter>("opdVisitSession");
  const encounterType = opdVisitType;

  return { encounterId: encounter.oid, encounterType };
};

export default useEncounter;
