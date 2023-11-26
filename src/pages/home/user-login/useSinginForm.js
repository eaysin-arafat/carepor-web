import { useLoginMutation } from "@/features/authentication/authentication-api";
import { CookieManager } from "@/utils/cookie-manager";
import { loginValidator } from "@/validation-model/user-accounts/login";
import Cookies from "js-cookie";
import React from "react";
import toast from "react-hot-toast";
import useWindowWidth from "../../../hooks/useWindowWidth";

// initial state
const initialState = {
  username: "",
  password: "",
};

function useLogin() {
  const [errors, setErrors] = React.useState(initialState);
  const [loginForm, setLoginForm] = React.useState(initialState);

  // api hooks
  const [
    login,
    { data: userData, isSuccess, isLoading, isError, error, status },
  ] = useLoginMutation();

  // custom hooks
  const w600 = useWindowWidth(600);

  // handler for input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // handle form submit
  const handleFormSubmit = async (e) => {
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
      const cookieManager = new CookieManager(Cookies);
      cookieManager.saveCookie("carepro_token", userData?.userAccount?.oid, {
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
      toast.error(error.message);
    }
  }, [isSuccess, isError, status, error, userData?.userAccount?.oid]);

  return {
    loginForm,
    errors,
    isLoading,
    handleInputChange,
    handleFormSubmit,
    w600,
  };
}

export default useLogin;
