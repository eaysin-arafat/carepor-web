// import { useChangePasswordMutation } from "@/features/users/users-api";
// import { changePasswordValidator } from "@/validation-model/change-password";
import { RootState } from "@/app/store";
import { RtkStatusEnum } from "@/enum/rtk";
import { useChangedPasswordMutation } from "@/features/user-accounts/user-accounts-api";
import { URLClientSearch } from "@/routers/client";

import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import {
  ChangePasswordFormErrorType,
  ChangePasswordFormType,
} from "@/types/user-accounts";
import Alert from "@/utilities/alert";
import { changePasswordValidator } from "@/validation-models/change-password";
// import { formEvent } from "@/types/htmlEvents";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// initial state
const initialState = {
  password: "",
  newPassword: "",
  confirmPassword: "",
};

function useChangePassword() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
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

    // console.log({ validationError });

    if (!isValid) return setErrors(validationError);

    // console.log({ ...fromData, username: user?.username });

    updatePassword({ ...fromData, username: user?.username });
  };

  // If Required redirect to login after change password. ***
  // const handleLogout = () => {
  //   cookieManager.removeCookie("carepro_token");
  //   dispatch(logout());
  // };

  // handle error side effect
  React.useEffect(() => {
    if (isError && status === RtkStatusEnum.rejected) {
      Alert.error("Password change failed");
    }
    if (isSuccess && status === RtkStatusEnum.fulfilled) {
      // Alert.success("Password change successful");
      toast.success("Password change successful");
      // handleLogout(); ***
      navigate(URLClientSearch());
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
