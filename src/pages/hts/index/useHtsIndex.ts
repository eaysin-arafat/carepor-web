import { RootState, useAppDispatch } from "@/app/store";
import { htsModalTypes } from "@/constants/modal-types";
import { clientTypeApiEndpoints } from "@/features/client-type/client-type-api";
import { hivNotTestingReasonApiEndpoints } from "@/features/hiv-not-testing-reasons/hiv-not-testing-reason-api";
import { hivRiskFactorApiEndpoints } from "@/features/hiv-risk-factor/hiv-risk-factor-api";
import { hivTestingReasonApiEndpoints } from "@/features/hiv-testing-reason/hiv-testing-reason-api";
import { HTS, useReadHTSQuery } from "@/features/hts/hts-api";
import {
  openAddModal,
  openEditModal,
  openViewModal,
} from "@/features/modal/modal-slice";
import { useReadServicePointsQuery } from "@/features/service-points/service-points-api";
import { useReadVisitTypesQuery } from "@/features/visit-type/visit-type-api";
import { CookieClient } from "@/hooks/useClientAge";
import useWindowWidth from "@/hooks/useWindow";
import { cookieManager } from "@/utilities/cookie-manager";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const useHtsIndex = () => {
  // get data from redux store
  const { addModal, viewModal, editModal } = useSelector(
    (state: RootState) => state.modal
  );

  // local state
  const [state, setState] = React.useState(1);

  // hooks and variables
  const dispatch = useDispatch();
  const w1100 = useWindowWidth(1100);
  const client = cookieManager.parseCookie<CookieClient>("client");
  const appDispatch = useAppDispatch();

  // api hooks
  const { data: visitTypes } = useReadVisitTypesQuery(null);
  const { data: servicePoints } = useReadServicePointsQuery(null);
  const {
    data: htses,
    isLoading,
    isSuccess,
    status,
  } = useReadHTSQuery(client?.oid, {
    skip: !client?.oid,
    refetchOnMountOrArgChange: true,
  });

  // side Effect
  React.useEffect(() => {
    appDispatch(
      hivTestingReasonApiEndpoints.readHIVTestingReasons.initiate(null)
    );
    appDispatch(
      hivNotTestingReasonApiEndpoints.readHIVNotTestingReasons.initiate(null)
    );
    appDispatch(hivRiskFactorApiEndpoints.readHIVRiskFactors.initiate(null));
    appDispatch(clientTypeApiEndpoints.readClientTypes.initiate(null));
  }, [appDispatch]);

  // handler functions
  const handleAddHtsModal = () => {
    dispatch(
      openAddModal({
        modalId: htsModalTypes.htsCreateModal,
        data: null,
      })
    );
  };

  const handleViewHtsModal = (hts: HTS) => {
    dispatch(
      openViewModal({
        modalId: htsModalTypes.htsViewModal,
        data: hts,
      })
    );
  };

  const handleEditModal = (hts: HTS) => {
    dispatch(
      openEditModal({
        modalId: htsModalTypes.htsEditModal,
        data: hts,
      })
    );
  };

  // transform functions
  const findVisitType = (visitTypeId: number) => {
    const visitType = visitTypes?.find((visit) => visit.oid === visitTypeId);
    return visitType?.description;
  };

  const findServicePoint = (servicePointId: number) => {
    const servicePoint = servicePoints?.find(
      (service) => service.oid === servicePointId
    );
    return servicePoint?.description;
  };

  return {
    htses,
    isLoading,
    isSuccess,
    status,
    handleAddHtsModal,
    handleViewHtsModal,
    handleEditModal,
    findVisitType,
    findServicePoint,
    w1100,
    addModal,
    viewModal,
    editModal,
    state,
    setState,
  };
};

export default useHtsIndex;
