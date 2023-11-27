import Button from "@/components/core/buttons/Button";
import Password from "@/components/core/form-elements/PasswordInput";
import FormLayout from "@/components/core/form-layouts/FormLayout";
import useChangePassword from "./useChangePassword";

function ChangePassword() {
  const { fromData, errors, handleInputChange, handleSubmit } =
    useChangePassword();

  console.log(fromData);

  return (
    <div>
      <FormLayout mainTitle="Change Password" emergencyAccess>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="grid gap-5">
            <Password
              onChange={handleInputChange}
              errMsg={errors?.password}
              value={fromData.password}
              label="Current Password"
              name="password"
            />
            <Password
              onChange={handleInputChange}
              errMsg={errors?.newPassword}
              value={fromData.newPassword}
              label="New Password"
              name="newPassword"
            />
            <Password
              onChange={handleInputChange}
              errMsg={errors?.confirmPassword}
              value={fromData.confirmPassword}
              label="Confirm Password"
              name="confirmPassword"
            />
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
