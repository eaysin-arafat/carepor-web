import Input from "@/components/core/form-elements/Input";

import Button from "@/components/core/buttons/Button";
import CountryCode from "@/components/core/form-elements/CountryCode";
import PhoneNumberInput from "@/components/core/form-elements/PhoneNumber";
import { FormFooterLink } from "@/components/core/form-layouts/FormFooterLink";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import usePasswordRecovery from "./useRecoveryRequest";
import { URLUserLogin } from "@/routers/public";

function RecoveryRequest() {
  const {
    // countries,
    errors,
    handleRecoveryInfoChange,
    handleSubmit,
    recoverInfo,
    resetCellPhone,
  } = usePasswordRecovery();

  console.log(errors);

  return (
    <>
      <FormWrapper
        emergencyAccess
        contentCenter
        titleClass="text-center"
        title="Login Recovery Request"
      >
        <form onSubmit={handleSubmit}>
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
            <FormFooterLink
              btnText="Log in"
              link={URLUserLogin()}
              question="Remember password?"
            />
            <div className="mt-5">
              <Button type="submit" title="Submit" />
            </div>
          </div>
        </form>
      </FormWrapper>
    </>
  );
}

export default RecoveryRequest;
