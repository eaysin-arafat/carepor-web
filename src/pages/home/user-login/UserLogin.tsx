import Button from "@/components/core/buttons/Button";
import Checkbox from "@/components/core/form-elements/Checkbox";
import Input from "@/components/core/form-elements/Input";
import Password from "@/components/core/form-elements/PasswordInput";
import FormLayout from "@/components/core/form-layouts/FormLayout";
import { Link } from "react-router-dom";
import useUserLogin from "./useUserLogin";
import { URLUserRecoveryRequest } from "@/routers/public";

function UserLogin() {
  const userLogin = useUserLogin();
  const { errors, handleFormSubmit, loginForm, handleInputChange, isLoading } =
    userLogin;

  return (
    <FormLayout
      className=" !w-[570px] "
      emergencyAccess
      loginForm
      layoutCenter
      mainTitle="Welcome to SmartCare Pro"
    >
      <form onSubmit={handleFormSubmit} className="my-5">
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

          <Button loading={isLoading} type="submit" title="User Login" />
        </div>
      </form>
    </FormLayout>
  );
}

export default UserLogin;
