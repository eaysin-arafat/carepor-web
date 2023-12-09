import SubmitButton from "@/components/core/buttons/SubmitButton";
import Checkbox from "@/components/core/form-elements/Checkbox";
import Input from "@/components/core/form-elements/Input";
import Password from "@/components/core/form-elements/Password";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import { URLUserRecoveryRequest } from "@/routers/public";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { Link } from "react-router-dom";
import useUserLogin from "./useUserLogin";

function UserLogin() {
  const userLogin = useUserLogin();
  const {
    errors,
    handleFormSubmit,
    loginForm,
    handleInputChange,
    setCredentialError,
    credentialError,
    isLoading,
  } = userLogin;

  return (
    <FormWrapper
      titleClass="text-center "
      className=""
      emergencyAccess
      appTitle
      loginForm
      contentCenter
    >
      <form onSubmit={handleFormSubmit} className="my-5">
        {credentialError && (
          <>
            <Alert
              // icon={HiInformationCircle}
              color="failure"
              onDismiss={() => setCredentialError("")}
              className="mb-5 bg-red-100 dark:bg-gray-800"
            >
              <span className="inline-flex items-center gap-1 text-red-500">
                <HiInformationCircle className="text-base" /> {credentialError}
              </span>
            </Alert>
          </>
        )}

        <div className="flex flex-col gap-5">
          <Input
            value={loginForm?.username}
            errMsg={errors?.username}
            name="username"
            onChange={handleInputChange}
            label="username"
          />
          <Password
            value={loginForm?.password}
            errMsg={errors?.password}
            name="password"
            onChange={handleInputChange}
            label="password"
          />
          <div className="grid grid-cols-2 items-center ">
            <div className="flex justify-end items-center">
              <Checkbox
                onChange={handleInputChange}
                name="rememberMe"
                checked={loginForm.rememberMe}
                label="Remember me"
              />{" "}
              &nbsp;
            </div>

            <div className="flex justify-end items-center">
              <Link
                to={URLUserRecoveryRequest()}
                className="heading_5 hover:text-primaryColor dark:text-gray-500"
              >
                Forgot Password
              </Link>
            </div>
          </div>

          <SubmitButton
            loading={isLoading}
            buttonType="submit"
            title="Sign In"
          />
        </div>
      </form>
    </FormWrapper>
  );
}

export default UserLogin;
