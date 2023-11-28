// import { useGetUserAccessByUserNameMutation } from "@/features/user-accounts/user-accounts-api";
// import useManageFacility from "@/hooks/useManageFacility";
// import { cookieManager } from "@/utilities/cookie-manager";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import useManageFacility from "@/hooks/useManageFacility";

// import { useGetUserAccessByUserNameMutation } from "@/features/user-accounts/user-accounts-api";
// import useManageFacility from "@/hooks/useManageFacility";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

const useSelectFacility = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // //   //   const { user } = useSelector((state) => state.auth);
  // // const gf = cookieManager;

  // const [username, setUsername] = useState<string>("");
  // const [facilityId, setFacilityId] = useState<string>("");
  // // const [getFacilityAccesses, { data }] =
  // //   useGetFacilityAccessByUsernameMutation();
  // const isFacilityId: boolean = !facilityId;
  // const [rrrrr, { data: facilityByKey }] = useGetUserAccessByUserNameMutation();

  const {
    districtOptions,
    facilitiesOptions,
    provinceOptions,
    facilityChangeHandler,
    facilityError,
    facilityState,
    // facilityValid,
  } = useManageFacility(undefined);
  // // initial state
  // const [isPermitted, setIsPermitted] = useState(false);
  // const [approvedFacility, setApprovedFacility] = useState(null);

  // // Error Message State
  // const [error, setError] = useState({});

  // // Loading
  // const [loading, setLoading] = useState(false);
  // const [pageLoading, setPageLoading] = useState(false);

  // const pageLoader = setTimeout(() => {
  //   setPageLoading(false);
  //   clearTimeout(pageLoader);
  // }, 1000);

  // useEffect(() => {
  //   if (facilityState?.facility) {
  //     if (data?.user?.userType === 1) {
  //       setIsPermitted(true);
  //     } else {
  //       let findApproved =
  //         Array.isArray(data?.userAccount?.facilityAccesses) &&
  //         data?.userAccount?.facilityAccesses?.find((item) => {
  //           return (
  //             item.facilityId == facilityState?.facility &&
  //             item?.isApproved === true
  //           );
  //         });
  //       if (findApproved) {
  //         setIsPermitted(true);
  //         setApprovedFacility(findApproved);
  //       } else {
  //         setIsPermitted(false);
  //         setApprovedFacility(null);
  //       }
  //     }
  //   } else {
  //     setIsPermitted(false);
  //     setApprovedFacility(null);
  //   }
  // }, [facilityState?.facility]);

  // const handleSubmit = (e: FormSubmitEventType) => {
  //   e.preventDefault();

  //   const { isFacilityValid, facilityError } = facilityValid();
  //   // const facilityValid = () => {
  //   //   const { errors, isFacilityValid } = validation(facilityState);
  //   //   setFacilityError((prev) => ({ ...prev, ...errors }));
  //   //   return { isFacilityValid, facilityError: errors };
  //   // };

  //   if (!isFacilityValid) {
  //     setError(facilityError);
  //     return false;
  //   }

  //   const cookieData = JSON.stringify({
  //     facilityId: facilityByKey?.oid,
  //     facilityName: facilityByKey?.description,
  //   });

  //   if (data?.userAccount.userType == 1) {
  //     //   cookieManager.saveCookie("facility_token", cookieData);
  //     //   navigate("/clients");
  //   } else if (isPermitted) {
  //     //   cookieManager.saveCookie("facility_token", cookieData);
  //     //   navigate("/clients");
  //   } else if (!isPermitted && isFacilityValid) {
  //     // setShowMessage(true);
  //     Swal.fire({
  //       title: "Not Permission!",
  //       text: "You are not authorized to login with this facility. Please contact the administrator.",
  //       icon: "error",
  //       confirmButtonColor: "#3085d6",
  //       confirmButtonText: "Close",
  //     });
  //   }
  // };

  return {
    districtOptions,
    facilitiesOptions,
    provinceOptions,
    facilityChangeHandler,
    facilityError,
    facilityState,
  };
};

export default useSelectFacility;

// // const validation = (data) => {
// //   const errors = {};

// //   if (!data.facility) errors.facility = "Required";
// //   if (!data.district) errors.district = "Required";
// //   if (!data.province) errors.province = "Required";

// //   return {
// //     isFacilityValid: Object.keys(errors).length == 0,
// //     errors,
// //   };
// // };
