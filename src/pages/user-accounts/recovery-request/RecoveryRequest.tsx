import Input from "@/components/core/form-elements/Input";

import Button from "@/components/core/buttons/Button";
import Select from "@/components/core/form-elements/Select";
import usePasswordRecovery from "./useRecoveryRequest";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";

function RecoveryRequest() {
  const {
    // countries,
    // errors,
    // handleCloseCommonErrorModal,
    // handleRecoveryInfoChange,
    // handleSubmit,
    // isSuccess,
    // recoverInfo,
    // status,
  } = usePasswordRecovery();
  // render country codes
  // const renderCountryCodes = () => {
  //   return countries?.map((countryCode) => {
  //     return (
  //       <option key={countryCode.oid} value={countryCode.countryCode}>
  //         {countryCode.isoCodeAlpha2}
  //       </option>
  //     );
  //   });
  // };
  return (
    <>
      <FormWrapper
        emergencyAccess
        contentCenter
        titleClass="text-center"
        title="Login Recovery Request"
      >
        <form action="">
          <div className="grid gap-5">
            <Input label="Username" />
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-1">
                <Select label="Code">
                  <option value="">Select</option>
                  <option value="">+880</option>
                  <option value="">+981</option>
                </Select>
              </div>
              <div className="col-span-3">
                <Input label="Cellphone" />
              </div>
            </div>
            <div className="mt-5">
              <Button type="button" title="Submit" />
            </div>
          </div>
        </form>
      </FormWrapper>
    </>
  );
}

export default RecoveryRequest;
