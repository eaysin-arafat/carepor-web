// import { useGetCountriesQuery } from "@/features/country/country-api";
// import { usePasswordRecoveryRequestMutation } from "@/features/users/users-api";
// import { TypeValidation } from "@/utils/type-valdation";
// import { passwordRecoveryRequestValidator } from "@/validation-model/password-recovery";
// import React from "react";
// import toast from "react-hot-toast";

import { useReadCountriesQuery } from "@/features/country/country-api";
import { useCreateRecoveryRequestMutation } from "@/features/recovery-request/recovery-request-api";
import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import { TypeValidation } from "@/utilities/type-valdation";
import { passwordRecoveryRequestValidator } from "@/validation-models/password-recovery";
import React from "react";
import toast from "react-hot-toast";

// initial state
const initialRecoveryInfo = {
  countryCode: "",
  cellphone: "",
  username: "",
};

function usePasswordRecovery() {
  // local state
  const [recoverInfo, setRecoverInfo] = React.useState(initialRecoveryInfo);
  const [errors, setErrors] = React.useState({});

  // api hooks
  const {
    data: countries,
    status,
    isSuccess,
  } = useReadCountriesQuery(undefined);

  const [
    recoveryRequest,
    {
      isSuccess: isRecoverySuccess,
      isError: isRecoveryError,
      error: recoveryError,
      status: recoveryStatus,
    },
  ] = useCreateRecoveryRequestMutation();

  // handler functions
  const handleRecoveryInfoChange = (e: OnchangeEventType) => {
    const { name, value } = e.target;

    if (
      name === "cellphone" &&
      (TypeValidation.isOnlyNumber(value) || value === "")
    ) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
      return setRecoverInfo((prev) => ({ ...prev, [name]: value }));
    }

    if (name !== "cellphone") {
      setRecoverInfo((prev) => ({ ...prev, [name]: value }));
      return setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // handler functions
  const handleSubmit = async (e: FormSubmitEventType) => {
    e.preventDefault();

    const { errors, isValid } = passwordRecoveryRequestValidator(recoverInfo);

    if (!isValid) return setErrors(errors);

    recoveryRequest(recoverInfo);
  };

  const handleCloseCommonErrorModal = () => {
    setErrors((prev) => ({ ...prev, common: null }));
  };

  React.useEffect(() => {
    if (isRecoverySuccess && recoveryStatus === "fulfilled") {
      toast.dismiss();
      toast.success("Recovery request sent successfully.");
      setRecoverInfo(initialRecoveryInfo);
      setErrors({});
    } else if (isRecoveryError && recoveryStatus === "rejected") {
      toast.dismiss();
      toast.error("Something went wrong."); //recoveryError?.data?.message ||
    }
  }, [isRecoverySuccess, isRecoveryError, recoveryError, recoveryStatus]);

  return {
    recoverInfo,
    errors,
    countries,
    status,
    isSuccess,
    handleRecoveryInfoChange,
    handleSubmit,
    handleCloseCommonErrorModal,
  };
}

export default usePasswordRecovery;
