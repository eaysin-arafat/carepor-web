import { RootState } from "@/app/store";
import { FacilityToken } from "@/types/coreTypes";
import { cookieManager } from "@/utilities/cookie-manager";
import { useSelector } from "react-redux";

interface BaseModel {
  createdIn?: string | null;
  dateCreated?: string;
  createdBy?: string;
  modifiedIn?: string | null;
  dateModified?: string;
  modifiedBy?: string;
  isDeleted?: boolean;
  isSynced?: boolean;
}

const useBaseModel = ({
  dateCreated = new Date().toISOString(),
  createdBy,
  modifiedBy,
  createdIn,
  dateModified = new Date().toISOString(),
  modifiedIn,
}: BaseModel) => {
  const cookie = cookieManager.parseCookie<FacilityToken>("facility");
  const { user } =
    useSelector((state: RootState) => state.authentication) || {};

  return {
    createdIn: createdIn || cookie?.facilityId,
    dateCreated: dateCreated,
    createdBy: user?.oid || createdBy,
    modifiedIn: modifiedIn || cookie?.facilityId,
    dateModified: dateModified,
    modifiedBy: user?.oid || modifiedBy,
    isDeleted: false,
    isSynced: false,
  };
};

export default useBaseModel;
