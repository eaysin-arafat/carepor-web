import Button from "@/components/core/buttons/Button";
import Password from "@/components/core/form-elements/password";
import FormLayout from "@/components/core/form-layouts/FormLayout";

function ChangePassword() {
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
