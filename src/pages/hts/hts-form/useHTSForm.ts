import { useAppSelector } from "@/app/store";
import { clientTypeApiEndpoints } from "@/features/client-type/client-type-api";
import { hivNotTestingReasonApiEndpoints } from "@/features/hiv-not-testing-reasons/hiv-not-testing-reason-api";
import { hivRiskFactorApiEndpoints } from "@/features/hiv-risk-factor/hiv-risk-factor-api";
import { hivTestingReasonApiEndpoints } from "@/features/hiv-testing-reason/hiv-testing-reason-api";
import { servicePointsApiEndpoints } from "@/features/service-points/service-points-api";
import { visitTypeApiEndpoints } from "@/features/visit-type/visit-type-api";
import { useMemo } from "react";

const useHTSForm = () => {
  // Client Types
  const selectClientTypes = useMemo(
    () => clientTypeApiEndpoints.readClientTypes.select(null),
    []
  );
  const {
    data: clientTypes,
    isLoading: typesLoading,
    status: typesStatus,
  } = useAppSelector(selectClientTypes);

  // Visit Types
  const selectVisitTypes = useMemo(
    () => visitTypeApiEndpoints.readVisitTypes.select(null),
    []
  );
  const {
    data: visitTypes,
    isSuccess: visitSuccess,
    status: visitStatus,
  } = useAppSelector(selectVisitTypes);

  // Service Points
  const selectServicePoints = useMemo(
    () => servicePointsApiEndpoints.readServicePoints.select(null),
    []
  );
  const {
    data: servicePoints,
    isSuccess: servicePointsSuccess,
    status: servicePointsStatus,
  } = useAppSelector(selectServicePoints);

  // Hiv Testing Reasons
  const selectHivTestingReasons = useMemo(
    () => hivTestingReasonApiEndpoints.readHIVTestingReasons.select(null),
    []
  );
  const {
    data: hivTestingReasons,
    isSuccess: testingReasonSuccess,
    status: testingReasonStatus,
  } = useAppSelector(selectHivTestingReasons);

  // Hiv Not Testing Reasons
  const selectHivNotTestingReasons = useMemo(
    () => hivNotTestingReasonApiEndpoints.readHIVNotTestingReasons.select(null),
    []
  );
  const {
    data: hivNotTestingReasons,
    isSuccess: hivNotTestingSuccess,
    status: hivNotTestingStatus,
  } = useAppSelector(selectHivNotTestingReasons);

  // Hiv Risk Factors
  const selectHivRiskFactors = useMemo(
    () => hivRiskFactorApiEndpoints.readHIVRiskFactors.select(null),
    []
  );
  const { data: hivRiskFactors } = useAppSelector(selectHivRiskFactors);

  return {
    clientTypes,
    typesLoading,
    typesStatus,
    visitTypes,
    visitSuccess,
    visitStatus,
    servicePoints,
    servicePointsSuccess,
    servicePointsStatus,
    hivTestingReasons,
    testingReasonSuccess,
    testingReasonStatus,
    hivNotTestingReasons,
    hivNotTestingSuccess,
    hivNotTestingStatus,
    hivRiskFactors,
  };
};

export default useHTSForm;
