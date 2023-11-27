import FormLayout from "../../../components/core/form-layouts/FormLayout";
import Input from "@/components/core/form-elements/Input";
import Button from "@/components/core/buttons/Button";
import Password from "@/components/core/form-elements/password";
import useUserLogin from "./useUserLogin";

type Props = {};

function UserLogin({}: Props) {
  const userLogin = useUserLogin();
  const { errors, handleFormSubmit, loginForm, handleInputChange, isLoading } =
    userLogin;

  return (
    <FormLayout emergencyAccess loginForm mainTitle="Welcome to SmartCare Pro">
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

          <Button loading={isLoading} type="submit" title="User Login" />
        </div>
      </form>
    </FormLayout>
  );
}

export default UserLogin;
