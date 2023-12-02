import { RootState } from "@/app/store";
import { logout } from "@/features/authentication/authentication-slice";
import { useReadFacilityByKeyQuery } from "@/features/facility/facility-api";
import { useGetUserAccessByUserNameMutation } from "@/features/user-accounts/user-accounts-api";
import useManageFacility from "@/hooks/useManageFacility";
import { URLClientSearch } from "@/routers/client";
import { FormSubmitEventType } from "@/types/htmlEvents";
import Alert from "@/utilities/alert";
import { cookieManager } from "@/utilities/cookie-manager";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useSelectFacility = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.authentication);

  // // const gf = cookieManager;
  const {
    districtOptions,
    facilitiesOptions,
    provinceOptions,
    facilityChangeHandler,
    facilityError,
    facilityState,
    facilityValid,
  } = useManageFacility(undefined);

  // const isFacilityId: boolean = !facilityId;
  const { data: facilityByKey } = useReadFacilityByKeyQuery(
    facilityState.facility,
    {
      skip: !facilityState.facility,
      refetchOnMountOrArgChange: true,
    }
  );
  const [getFacilityAccesses, { data }] = useGetUserAccessByUserNameMutation();

  // // initial state
  const [isPermitted, setIsPermitted] = useState(false);
  const [approvedFacility, setApprovedFacility] = useState(null);

  // Error Message State
  // const [error, setError] = useState({});

  // Loading
  // const [loading, setLoading] = useState(false);
  // const [pageLoading, setPageLoading] = useState(false);

  // const pageLoader = setTimeout(() => {
  //   setPageLoading(false);
  //   clearTimeout(pageLoader);
  // }, 1000);

  useEffect(() => {
    if (facilityState?.facility) {
      if (data?.user?.userType === 1) {
        setIsPermitted(true);
      } else {
        const findApproved =
          Array.isArray(data?.userAccount?.facilityAccesses) &&
          data?.userAccount?.facilityAccesses?.find((item) => {
            return (
              item.facilityId == facilityState?.facility &&
              item?.isApproved === true
            );
          });
        console.log(data?.userAccount?.facilityAccesses);

        if (findApproved) {
          setIsPermitted(true);
          setApprovedFacility(findApproved);
        } else {
          setIsPermitted(false);
          setApprovedFacility(null);
        }
      }
    } else {
      setIsPermitted(false);
      setApprovedFacility(null);
    }
  }, [facilityState?.facility]);

  console.log({ approvedFacility, isPermitted });

  console.log(data);
  const handleRequestSubmit = (e: FormSubmitEventType) => {
    e.preventDefault();

    // hare use useManageFacility hook validation
    const { isFacilityValid } = facilityValid();

    if (!isFacilityValid) {
      // setError(facilityError);
      return false;
    }

    const cookieData = JSON.stringify({
      facilityId: facilityByKey?.oid,
      facilityName: facilityByKey?.description,
    });

    if (data?.userAccount.userType == 1) {
      cookieManager.saveCookie("facility_token", cookieData, null);
      navigate(URLClientSearch());
    } else if (isPermitted) {
      cookieManager.saveCookie("facility_token", cookieData, null);
      navigate(URLClientSearch());
    } else if (!isPermitted && isFacilityValid) {
      Alert.error(
        "You are not authorized to login with this facility. Please contact the administrator."
      );
    }
  };

  const handleLogout = () => {
    cookieManager.removeCookie("carepro_token");
    dispatch(logout());
  };

  useEffect(() => {
    getFacilityAccesses(user?.username);
  }, [user?.username]);

  return {
    districtOptions,
    facilitiesOptions,
    provinceOptions,
    facilityChangeHandler,
    facilityError,
    facilityState,
    handleLogout,
    handleRequestSubmit,
  };
};

export default useSelectFacility;

// const validation = (data) => {
//   const errors = {};

//   if (!data.facility) errors.facility = "Required";
//   if (!data.district) errors.district = "Required";
//   if (!data.province) errors.province = "Required";

//   return {
//     isFacilityValid: Object.keys(errors).length == 0,
//     errors,
//   };
// };
