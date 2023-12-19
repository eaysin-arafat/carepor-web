import { useReadCountriesQuery } from "@/features/country/country-api";
import { useCreateRecoveryRequestMutation } from "@/features/recovery-request/recovery-request-api";
import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import {
  PasswordRecoveryFormErrorType,
  PasswordRecoveryFormType,
} from "@/types/user-accounts";
import { TypeValidation } from "@/utilities/type-valdation";
import { passwordRecoveryRequestValidator } from "@/validation-models/password-recovery";
import React from "react";
import toast from "react-hot-toast";

// initial state
const initialRecoveryInfo = {
  countryCode: "+260",
  cellphone: "",
  username: "",
};

function usePasswordRecovery() {
  // local state
  const [recoverInfo, setRecoverInfo] =
    React.useState<PasswordRecoveryFormType>(initialRecoveryInfo);
  const [errors, setErrors] = React.useState<PasswordRecoveryFormErrorType>({});

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

    // console.log(errors);

    if (!isValid) return setErrors(errors);

    recoveryRequest(recoverInfo);
  };

  React.useEffect(() => {
    if (isRecoverySuccess && recoveryStatus === "fulfilled") {
      toast.dismiss();
      toast.success("Recovery request sent successfully.");
      setRecoverInfo(initialRecoveryInfo);
      setErrors({});
    } else if (isRecoveryError && recoveryStatus === "rejected") {
      toast.dismiss();
      //@ts-ignore
      const errorMessage = recoveryError?.data?.message;
      if (typeof errorMessage === "string" && errorMessage) {
        toast.dismiss();
        toast.error(errorMessage);
      } else {
        toast.dismiss();
        toast.error("Something went wrong.");
      }
    }
  }, [isRecoverySuccess, isRecoveryError, recoveryError, recoveryStatus]);

  // if phone pattern is not matched then reset value
  const resetCellPhone = () => {
    setRecoverInfo((prev) => ({ ...prev, cellphone: "" }));
  };

  return {
    recoverInfo,
    errors,
    countries,
    status,
    isSuccess,
    handleRecoveryInfoChange,
    handleSubmit,
    resetCellPhone,
  };
}

export default usePasswordRecovery;
