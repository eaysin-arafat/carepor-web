import Input from "@/components/core/form-elements/Input";

import SubmitButton from "@/components/core/buttons/SubmitButton";
import CountryCode from "@/components/core/form-elements/CountryCode";
import PhoneNumberInput from "@/components/core/form-elements/PhoneNumber";
import { FormFooterLink } from "@/components/core/form-layouts/FormFooterLink";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import { URLUserLogin } from "@/routers/public";
import usePasswordRecovery from "./useRecoveryRequest";

function RecoveryRequest() {
  const {
    // countries,
    errors,
    handleRecoveryInfoChange,
    handleSubmit,
    recoverInfo,
    resetCellPhone,
  } = usePasswordRecovery();

  return (
    <>
      <FormWrapper
        emergencyAccess
        contentCenter
        appTitle
        titleClass="text-center"
        title="Login Recovery Request"
      >
        <>
          <p className="text-secondaryColor text-center mt-5">
            Please provide either Username or Cellphone to recover your Login.
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="grid gap-5">
              <Input
                onChange={handleRecoveryInfoChange}
                name="username"
                value={recoverInfo.username}
                label="Username"
                errMsg={errors?.username}
              />
              <div className="grid grid-cols-4 gap-3">
                <div className="col-span-1">
                  <CountryCode
                    label="Code"
                    value={recoverInfo.countryCode}
                    onChange={handleRecoveryInfoChange}
                    name="countryCode"
                    resetCellPhone={resetCellPhone}
                    errMsg={errors?.countryCode}
                  />
                </div>
                <div className="col-span-3">
                  <PhoneNumberInput
                    value={recoverInfo.cellphone}
                    onChange={handleRecoveryInfoChange}
                    name="cellphone"
                    label="Cellphone"
                    countryCode={recoverInfo.countryCode}
                    errMsg={errors.cellphone}
                  />
                </div>
              </div>

              <div className="mt-1">
                <SubmitButton buttonType="submit" title="Submit" />
              </div>
              <FormFooterLink
                btnText="Sign In"
                link={URLUserLogin()}
                question="Already have an account"
              />
            </div>
          </form>
        </>
      </FormWrapper>
    </>
  );
}

export default RecoveryRequest;
