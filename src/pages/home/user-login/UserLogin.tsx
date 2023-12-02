import SubmitButton from "@/components/core/buttons/SubmitButton";
import Checkbox from "@/components/core/form-elements/Checkbox";
import Input from "@/components/core/form-elements/Input";
import Password from "@/components/core/form-elements/PasswordInput";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import { URLUserRecoveryRequest } from "@/routers/public";
import { Link } from "react-router-dom";
import useUserLogin from "./useUserLogin";
// import { Alert } from "flowbite-react";
// import { HiInformationCircle } from 'react-icons/hi';

function UserLogin() {
  const userLogin = useUserLogin();
  const { errors, handleFormSubmit, loginForm, handleInputChange, isLoading } =
    userLogin;

  return (
    <FormWrapper
      titleClass="text-center"
      emergencyAccess
      loginForm
      maxWidth="max-w-[570px]"
      title="Welcome to SmartCare Pro"
      contentCenter
    >
      <form onSubmit={handleFormSubmit} className="my-5">
        {/* <Alert icon={HiInformationCircle} color="failure" onDismiss={() => alert("Alert dismissed!")} className="mb-5">
          You have entered an invalid username or password
        </Alert> */}
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
          <div className="grid grid-cols-2">
            <div>
              <Checkbox
                onChange={handleInputChange}
                name="rememberMe"
                checked={loginForm.rememberMe}
                label="Remember me"
              />{" "}
              &nbsp;
            </div>

            <div className="flex justify-end items-center">
              <Link to={URLUserRecoveryRequest()} className="heading_5">
                Forgot Password
              </Link>
            </div>
          </div>

          <SubmitButton
            loading={isLoading}
            buttonType="submit"
            title="User Login"
          />
        </div>
      </form>
    </FormWrapper>
  );
}

export default UserLogin;
