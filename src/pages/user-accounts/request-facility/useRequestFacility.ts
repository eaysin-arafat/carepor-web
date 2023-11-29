import { RootState } from "@/app/store";
import { useCreateFacilityAccessMutation } from "@/features/facility-access/facility-access-api";
import useManageFacility from "@/hooks/useManageFacility";
import { URLSelectFacility } from "@/routers/facility";
import { FormSubmitEventType } from "@/types/htmlEvents";
import Alert from "@/utilities/alert";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type FacilityRequestType = {
  isDeleted: boolean;
  dateRequested: string;
  dateApproved: null;
  isApproved: boolean;
  isIgnored: boolean;
  forgotPassword: boolean;
  userAccountId: string;
  facilityId: string | number;
};

const useRequestFacility = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.authentication);

  const [
    sendFacilityRequest,
    { data: facilityAccess, isError, isSuccess, status, error },
  ] = useCreateFacilityAccessMutation();

  const {
    districtOptions,
    facilitiesOptions,
    provinceOptions,
    facilityChangeHandler,
    facilityError,
    facilityState,
    facilityValid,
  } = useManageFacility(undefined);

  const handleSendFacilityRequest = (e: FormSubmitEventType): void => {
    e.preventDefault();

    const { isFacilityValid } = facilityValid();
    if (!isFacilityValid) {
      return;
    }

    const today = () => {
      return new Date().toISOString();
    };
    const requestData: FacilityRequestType = {
      isDeleted: false,
      dateRequested: today(),
      dateApproved: null,
      isApproved: false,
      isIgnored: false,
      forgotPassword: false,
      userAccountId: user?.oid,
      facilityId: facilityState.facility,
    };

    // request
    sendFacilityRequest(requestData);
  };

  //@ts-ignore
  console.log(error?.data);

  useEffect(() => {
    if (isSuccess && status === "fulfilled") {
      Alert.success(facilityAccess && "Facility Request send successful");
    }
    if (isError && status === "rejected") {
      Alert.error(
        //@ts-ignore
        error?.data && typeof error?.data === "string"
          ? //@ts-ignore
            error.data
          : "Facility Request send failed"
      );
    }
  }, [isError, isSuccess]);

  const handleCancelRequest = (): void => {
    navigate(URLSelectFacility());
  };

  return {
    districtOptions,
    facilitiesOptions,
    provinceOptions,
    facilityChangeHandler,
    facilityError,
    facilityState,
    //
    handleCancelRequest,
    handleSendFacilityRequest,
  };
};

export default useRequestFacility;
