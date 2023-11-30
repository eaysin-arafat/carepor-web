// import { useChangePasswordMutation } from "@/features/users/users-api";
// import { changePasswordValidator } from "@/validation-model/change-password";
import { RootState } from "@/app/store";
import { RtkStatusEnum } from "@/enum/rtk";
import { useChangedPasswordMutation } from "@/features/user-accounts/user-accounts-api";

import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import {
  ChangePasswordFormErrorType,
  ChangePasswordFormType,
} from "@/types/user-accounts";
import Alert from "@/utilities/alert";
import { changePasswordValidator } from "@/validation-models/change-password";
// import { formEvent } from "@/types/htmlEvents";
import React, { useState } from "react";
import { useSelector } from "react-redux";

// initial state
const initialState = {
  password: "",
  newPassword: "",
  confirmPassword: "",
};

function useChangePassword() {
  const { user } = useSelector((state: RootState) => state.authentication);

  const [fromData, setFromData] =
    useState<ChangePasswordFormType>(initialState);
  const [errors, setErrors] = useState<ChangePasswordFormErrorType | null>(
    null
  );

  // api hooks
  const [updatePassword, { isError, error, status, isSuccess }] =
    useChangedPasswordMutation();

  // handler functions
  const handleInputChange = (e: OnchangeEventType): void => {
    const { name, value } = e.target;
    setFromData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: FormSubmitEventType): void => {
    e.preventDefault();
    const { errors: validationError, isValid } =
      changePasswordValidator(fromData);

    console.log({ validationError });

    if (!isValid) return setErrors(validationError);

    console.log({ ...fromData, username: user?.username });

    updatePassword({ ...fromData, username: user?.username });
  };

  // handle error side effect
  React.useEffect(() => {
    if (isError && status === RtkStatusEnum.rejected) {
      Alert.error("Password change failed");
    }
    if (isError && status === RtkStatusEnum.fulfilled) {
      Alert.success("Password change successful");
    }
  }, [isError, isSuccess, status, error]);

  return {
    fromData,
    errors,
    handleInputChange,
    handleSubmit,
  };
}

export default useChangePassword;
