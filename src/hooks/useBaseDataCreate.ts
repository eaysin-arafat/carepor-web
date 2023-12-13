import { RootState } from "@/app/store";
import { Client } from "@/interface/clients";
import { TypeOpdVisit } from "@/types";
import { TypeFacilityToken } from "@/types/facility";
import { cookieManager } from "@/utilities/cookie-manager";
import { DateFunc } from "@/utilities/date";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useBaseDataCreate(encounterType) {
  const { user } = useSelector((state: RootState) => state.authentication);

  const [opdSession, setOpdSession] = useState<TypeOpdVisit | null>(null);
  const [selectFacility, setSelectFacility] =
    useState<TypeFacilityToken | null>(null);
  const [clientId, setSelectClientId] = useState("");

  // hooks
  useEffect(() => {
    const facility: TypeFacilityToken = cookieManager.parseCookie("facility");
    const opdVisitSession: TypeOpdVisit =
      cookieManager.parseCookie("opdVisitSession");
    const client: Client = cookieManager.parseCookie("client");

    setOpdSession(opdVisitSession);
    setSelectFacility(facility);
    setSelectClientId(client?.oid);
  }, []);

  const to_day = DateFunc.toDay();

  let createBase = {
    encounterId: opdSession?.oid,
    encounterType: encounterType,
    createdIn: selectFacility?.facilityId,
    dateCreated: to_day,
    createdBy: user?.oid,
    modifiedIn: selectFacility?.facilityId,
    dateModified: to_day,
    modifiedBy: user?.oid,
    isDeleted: false,
    isSynced: false,
    clientId: clientId,
  };

  return [createBase];
}

export default useBaseDataCreate;
