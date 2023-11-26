import Input from "../form-elements/Input";
import Password from "../form-elements/Password";
import FormSection from "../form-elements/form-layouts/FormSection";

type Props = {};

function LoginInfo({}: Props) {
  return (
    <>
      <FormSection titleText="Login Information">
        <div className="">
          <Input required label="User Name" placeholder="Add User Name" />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-4">
          <Password required label="Password" placeholder="Password" />
          <Password required label="Confirm Password" placeholder="Password" />
        </div>
      </FormSection>
    </>
  );
}

export default LoginInfo;
