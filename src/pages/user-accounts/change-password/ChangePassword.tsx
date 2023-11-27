import Button from "@/components/form-elements/Button";
import FormLayout from "@/components/form-elements/form-layouts/FormLayout";
import Password from "@/components/form-elements/password";

type Props = {};

function ChangePassword({}: Props) {
  return (
    <div>
      <FormLayout mainTitle="Change Password" emergencyAccess>
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
            {/* <Button type="outline" title="Cancel" /> */}
            <Button type="button" title="Cancel" />
          </div>
        </form>
      </FormLayout>
    </div>
  );
}

export default ChangePassword;
