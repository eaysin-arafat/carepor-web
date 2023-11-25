import FormLayout from "./FormLayout";
import Button from "@/components/form-elements/button";
import Input from "@/components/form-elements/Input";
import Password from "@/components/form-elements/password";

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
