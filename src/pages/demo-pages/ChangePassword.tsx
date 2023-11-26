import Button from "@/components/form-elements/Button";
import Password from "@/components/form-elements/Password";
import FormLayout from "./FormLayout";

type Props = {};

function ChangePassword({}: Props) {
  return (
    <div>
      <FormLayout
        mainTitle="Change Password"
        emergencyAccess
      >
        <form action="" className="mt-5">
          <div className="grid gap-5">
            <Password label="Current Password" />
            <Password label="New Password" />
            <Password label="Confirm Password" />
          </div>
          <div className="mt-5">
            <Button type="submit" title="Change Password" />
          </div>
          <div className="mt-5">
            <Button type="outline" title="Cancel" />
          </div>
        </form>
      </FormLayout>
    </div>
  );
}

export default ChangePassword;
