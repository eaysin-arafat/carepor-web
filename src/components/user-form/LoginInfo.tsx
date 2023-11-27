import Input from "../form-elements/Input";
import FormSection from "../form-elements/form-layouts/FormSection";
import Password from "../form-elements/password";

// type Props = {};

function LoginInfo() {
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
