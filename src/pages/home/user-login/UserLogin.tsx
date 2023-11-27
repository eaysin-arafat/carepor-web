import FormLayout from "../../../components/core/form-layouts/FormLayout";
import Input from "@/components/core/form-elements/Input";
import Button from "@/components/core/buttons/Button";
import Password from "@/components/core/form-elements/password";

type Props = {};

function UserLogin({}: Props) {
  return (
    <FormLayout emergencyAccess loginForm mainTitle="Welcome to SmartCare Pro">
      <form action="" className="my-5">
        <div className="flex flex-col gap-5">
          <Input label="username" />
          <Password label="password" />
          <Button type="submit" title="UserLogin" />
        </div>
      </form>
    </FormLayout>
  );
}

export default UserLogin;
