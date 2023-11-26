import Input from "@/components/form-elements/Input";
import FormLayout from "./FormLayout";
import Password from "@/components/form-elements/Password";
import Button from "@/components/form-elements/Button";

type Props = {};

function UserRegistration({}: Props) {
  return (
    <FormLayout
      emergencyAccess
      width={850}
      className=""
      subTitle="User Profile Registration"
    >
      <form action="" className="my-5">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <Input label="username" />
          <Password label="password" />
          <Button type="submit" title="Select" />
        </div>
      </form>
    </FormLayout>
  );
}

export default UserRegistration;
