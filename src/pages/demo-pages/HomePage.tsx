import Button from "@/components/form-elements/Button";
import Input from "@/components/form-elements/Input";
import FormLayout from "./FormLayout";
import Password from "@/components/form-elements/Password";

type Props = {};

function HomePage({}: Props) {
  return (
    //   {/* form wrapper */}
    <FormLayout emergencyAccess loginForm mainTitle="User Login">
      <form action="" className="my-5">
        <div className="flex flex-col gap-5">
          <Input label="username" />
          <Password label="password" />
          <Button type="button" title="Login" />
        </div>
      </form>
    </FormLayout>
  );
}

export default HomePage;
