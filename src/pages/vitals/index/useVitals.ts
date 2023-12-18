import { RootState } from "@/app/store";
import { vitalModalTypes } from "@/constants/modal-types";
import { EnumEncounterType } from "@/enum/encounter-type";
import { openAddModal, openViewModal } from "@/features/modal/modal-slice";
import { Vital, useReadVitalByClientQuery } from "@/features/vital/vital-api";
import useWindowWidth from "@/hooks/useWindow";
import { Client } from "@/interface/clients";
import { cookieManager } from "@/utilities/cookie-manager";
import { useDispatch, useSelector } from "react-redux";

const useVitals = () => {
  const dispatch = useDispatch();
  const w1100 = useWindowWidth(1100);

  const { addModal, viewModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  const client = cookieManager.parseCookie<Client>("client");

  const {
    data: vitals,
    isLoading,
    status,
  } = useReadVitalByClientQuery(client?.oid, {
    skip: !client?.oid,
    refetchOnMountOrArgChange: true,
  });

  const handleAddVitalModal = () => {
    dispatch(
      openAddModal({
        modalId: vitalModalTypes.addVital,
        data: null,
      })
    );
  };

  const handleViewVitalModal = (vital: Vital) => {
    dispatch(
      openViewModal({
        modalId: vitalModalTypes.viewVital,
        data: vital,
      })
    );
  };

  const handleEncounterFilter = (vital: Vital) => {
    return vital.encounterType === EnumEncounterType.Vital;
  };

  return {
    handleAddVitalModal,
    handleViewVitalModal,
    handleEncounterFilter,
    w1100,
    addModal,
    vitals,
    viewModal,
    editModal,
    isLoading,
    status,
  };
};

export default useVitals;
