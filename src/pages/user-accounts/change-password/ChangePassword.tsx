import OutlineButton from "@/components/core/buttons/OutlineButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import Password from "@/components/core/form-elements/PasswordInput";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import useChangePassword from "./useChangePassword";

function ChangePassword() {
  const { fromData, errors, handleInputChange, handleSubmit } =
    useChangePassword();

  console.log(fromData);

  return (
    <div>
      <FormWrapper
        contentCenter
        title="Change Password"
        maxWidth="max-w-[570px]"
        emergencyAccess
      >
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
            <SubmitButton buttonType="submit" title="Change Password" />
          </div>
          <div className="mt-5">
            <OutlineButton buttonType="button" title="Cancel" />
          </div>
        </form>
      </FormWrapper>
    </div>
  );
}

export default ChangePassword;
