import useManageFacility from "@/hooks/useManageFacility";
import { selectFacility } from "@/routers/facility";
import { useNavigate } from "react-router-dom";

const useRequestFacility = () => {
  const navigate = useNavigate();

  const {
    districtOptions,
    facilitiesOptions,
    provinceOptions,
    facilityChangeHandler,
    facilityError,
    facilityState,
    facilityValid,
  } = useManageFacility(undefined);

  const handleSendFacilityRequest = (): void => {
    const { isFacilityValid } = facilityValid();

    if (!isFacilityValid) {
      return;
    }

    alert(JSON.stringify(facilityState));
  };

  const handleCancelRequest = (): void => {
    navigate(selectFacility());
  };

  //----------------------------------------------------------------

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
