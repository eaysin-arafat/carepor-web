import Select from "@/components/core/form-elements/Select";

import SubmitButton from "@/components/core/buttons/SubmitButton";
import RenderSelectOptions from "@/components/core/form-elements/RenderSelectOptions";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import { Navigate } from "react-router-dom";
import useRequestFacility from "./useRequestFacility";

const RequestFacility = () => {
  const {
    facilityChangeHandler,
    districtOptions,
    facilitiesOptions,
    facilityError,
    facilityState,
    provinceOptions,
    handleSendFacilityRequest,
    handleCancelRequest,
    isLoggedIn,
    token,
  } = useRequestFacility();

  return !isLoggedIn && !token ? (
    <Navigate to="/" />
  ) : (
    <div>
      <FormWrapper
        emergencyAccess
        title="Request Facility Login"
        appTitle
        // titleNote="Please select a Facility to send login request."
        // className="max-w-[570px]"
        titleClass="text-center"
        contentCenter
      >
        <form action="" className="mt-8">
          <div className="flex flex-col gap-5">
            <Select
              onChange={facilityChangeHandler}
              value={facilityState.province}
              errMsg={facilityError.province}
              label="Province"
              name="province"
              required
            >
              <RenderSelectOptions options={provinceOptions} />
            </Select>
            <Select
              name="district"
              value={facilityState.district}
              onChange={facilityChangeHandler}
              errMsg={facilityError.district}
              label="District"
              required
            >
              <RenderSelectOptions options={districtOptions} />
            </Select>
            <Select
              name="facility"
              value={facilityState.facility}
              onChange={facilityChangeHandler}
              errMsg={facilityError.facility}
              label="Facility"
              required
            >
              <RenderSelectOptions options={facilitiesOptions} />
            </Select>
          </div>
          <div className="mt-5">
            <SubmitButton
              onClick={handleSendFacilityRequest}
              buttonType="submit"
              title="Submit Request"
            />
          </div>

          <div className="mt-5 text-center font-medium">
            {/* <OutlineButton onClick={handleCancelRequest} title="Cancel" /> */}
            <button onClick={handleCancelRequest}>Cancel</button>
          </div>
        </form>
      </FormWrapper>
    </div>
  );
};

export default RequestFacility;
