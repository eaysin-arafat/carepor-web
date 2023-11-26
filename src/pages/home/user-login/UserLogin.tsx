import FormLayout from "../../../components/form-elements/form-layouts/FormLayout";
import Input from "@/components/form-elements/Input";
import Password from "@/components/form-elements/Password";
import Button from "@/components/form-elements/Button";

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
