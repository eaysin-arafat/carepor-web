// import { useChangePasswordMutation } from "@/features/users/users-api";
// import { changePasswordValidator } from "@/validation-model/change-password";
import { useChangedPasswordMutation } from "@/features/user-accounts/user-accounts-api";

import { FormSubmitEvent, onchangeEvent } from "@/types/htmlEvents";
import {
  ChangePasswordFormErrorType,
  ChangePasswordFormType,
} from "@/types/user-accounts";
import { changePasswordValidator } from "@/validation-models/change-password";
// import { formEvent } from "@/types/htmlEvents";
import React, { useState } from "react";

// initial state
const initialState = {
  password: "",
  newPassword: "",
  confirmPassword: "",
};

function useChangePassword() {
  const [fromData, setFromData] =
    useState<ChangePasswordFormType>(initialState);
  const [errors, setErrors] = useState<ChangePasswordFormErrorType | null>(
    null
  );

  // api hooks
  const [updatePassword, { isError, error, status }] =
    useChangedPasswordMutation();

  // login user state
  //   const user = useSelector((state) => state.auth.user);

  // handler functions
  const handleInputChange = (e: onchangeEvent): void => {
    const { name, value } = e.target;
    setFromData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: FormSubmitEvent): void => {
    e.preventDefault();
    const { errors: validationError, isValid } =
      changePasswordValidator(fromData);

    console.log({ validationError });

    if (!isValid) return setErrors(validationError);

    alert("validation");
    console.log(updatePassword);

    //   updatePassword({ ...fromData, username: user?.username });
  };

  // handle error side effect
  React.useEffect(() => {
    if (isError && status === "rejected") {
      //   alert.error(error?.data);
    }
  }, [isError, status, error]);

  return {
    fromData,
    errors,
    handleInputChange,
    handleSubmit,
  };
}

export default useChangePassword;
