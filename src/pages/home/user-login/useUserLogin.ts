import React from "react";
import toast from "react-hot-toast";
import { useUserLoginMutation } from "@/features/user-accounts/user-accounts-api";
import { LoginDataType } from "@/types";
import { loginValidator } from "@/utilities/validation-model/user-accounts/login";
import { formEvent, onchangeEvent } from "@/types/htmlEvents";
import { saveCookie } from "@/utilities/cookie-manager";

// initial state
const initialState: LoginDataType = {
  username: "",
  password: "",
};

// user login return type
/**
 * user login m
 * @returns
 */

type errprstype = {
  username?: string;
  password?: string;
};

function useUserLogin() {
  const [loginForm, setLoginForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState<errprstype>({});

  // api hooks
  const [
    login,
    { data: userData, isSuccess, isLoading, isError, error, status },
  ] = useUserLoginMutation();

  // handler for input change
  const handleInputChange = (e: onchangeEvent) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // handle form submit
  const handleFormSubmit = async (e: formEvent) => {
    e.preventDefault();

    // validate form
    const { isValid, errors: validationError } = loginValidator(loginForm);
    if (!isValid) return setErrors(validationError);
    // login user
    login(loginForm);
  };

  // handle login success and error
  React.useEffect(() => {
    // handle success
    if (isSuccess && status === "fulfilled") {
      // set cookie
      saveCookie("carepro_token", userData?.userAccount?.oid, {
        expires: 1,
      });

      // show alert
      toast.dismiss();
      toast.success("Login Successful");

      // reset state
      setLoginForm(initialState);
      setErrors(initialState);
    }

    // handle error
    if (isError && status === "rejected") {
      // show alert
      toast.dismiss();
      // @ts-ignore
      toast.error(error?.message || "Login failed");
    }
  }, [isSuccess, isError, status, error, userData?.userAccount?.oid]);

  return {
    loginForm,
    errors,
    isLoading,
    handleInputChange,
    handleFormSubmit,
    // w600,
  };
}

export default useUserLogin;

// uninitialized , pending , fulfilled , rejected,
