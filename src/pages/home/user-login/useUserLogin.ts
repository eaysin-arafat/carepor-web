import { useUserLoginMutation } from "@/features/user-accounts/user-accounts-api";
import { LoginDataType } from "@/types";
import { FormSubmitEventType, OnchangeEventType } from "@/types/htmlEvents";
import { cookieManager } from "@/utilities/cookie-manager";
import { loginValidator } from "@/validation-models/user-accounts/login";
import React from "react";
import toast from "react-hot-toast";

// initial state
const initialState: LoginDataType = {
  username: "",
  password: "",
  rememberMe: false,
};

// user login return type

type LoginErrorTypes = {
  username?: string;
  password?: string;
  rememberMe?: boolean;
};

function useUserLogin() {
  const [loginForm, setLoginForm] = React.useState(initialState);
  const [errors, setErrors] = React.useState<LoginErrorTypes>({});

  // api hooks
  const [
    login,
    { data: userData, isSuccess, isLoading, isError, error, status },
  ] = useUserLoginMutation();

  // handler for input change
  const handleInputChange = (e: OnchangeEventType) => {
    const { name, value } = e.target;
    if (name === "rememberMe") {
      setLoginForm((prev) => ({ ...prev, [name]: e.target.checked }));
    } else {
      setLoginForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // handle form submit
  const handleFormSubmit = async (e: FormSubmitEventType) => {
    e.preventDefault();

    // validate form
    const { isValid, errors: validationError } = loginValidator(loginForm);
    if (!isValid) return setErrors(validationError);
    // login user
    login(loginForm);
  };

  console.log(error);

  // handle login success and error
  React.useEffect(() => {
    // handle success
    if (isSuccess && status === "fulfilled") {
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
      toast.error("Login failed");
    }
  }, [isSuccess, isError, status, error, userData?.userAccount?.oid]);

  return {
    loginForm,
    errors,
    isLoading,
    handleInputChange,
    handleFormSubmit,
  };
}

export default useUserLogin;

// uninitialized , pending , fulfilled , rejected,
