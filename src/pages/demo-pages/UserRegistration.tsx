import Input from "@/components/form-elements/Input";
import FormLayout from "./FormLayout";
import Password from "@/components/form-elements/password";
import Button from "@/components/form-elements/button";

type Props = {};

function UserRegistration({}: Props) {
  return (
    <FormLayout emergencyAccess mainTitle="User Profile Registration">
      <form action="" className="my-5">
        <div className="flex flex-col gap-5">
          <Input label="username" />
          <Password label="password" />
          <Button type="submit" title="Select" />
        </div>
      </form>
    </FormLayout>
  );
}

export default UserRegistration;
