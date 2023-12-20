import SubmitButton from "@/components/core/buttons/SubmitButton";
import RenderSelectOptions from "@/components/core/form-elements/RenderSelectOptions";
import Select from "@/components/core/form-elements/Select";
import FormWrapper from "@/components/core/form-layouts/FormWrapper";
import useWindowWidth from "@/hooks/useWindow";
import { URLRequestFacility } from "@/routers/application-router";
import { cn } from "@/utilities/cn";
import { Link } from "react-router-dom";
import useSelectFacility from "./useSelectFacility";

const SelectFacility = () => {
  const w768 = useWindowWidth(768);

  const {
    districtOptions,
    facilitiesOptions,
    provinceOptions,
    facilityChangeHandler,
    facilityError,
    facilityState,
    handleRequestSubmit,
    handleLogout,
  } = useSelectFacility();

  return (
    <>
      <FormWrapper
        contentCenter
        appTitle
        emergencyAccess
        title="Select Facility"
        // titleNote="Please select a facility to enter."
        maxWidth={"max-w-[720px]"}
        titleClass="text-center"
      >
        <form
          onSubmit={handleRequestSubmit}
          className={cn("mt-8", { "mt-4": w768 })}
        >
          <div className="flex flex-col gap-3">
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
          <div className="text-right mt-3">
            <Link
              to={URLRequestFacility()}
              className="text-textColor hover:text-primaryColor text-xs"
            >
              Send Facility Access Request
            </Link>
          </div>
          <div className="mt-5">
            <SubmitButton buttonType="submit" title="Enter" />
          </div>
          <div className="text-center mt-2">
            {/* <OutlineButton title="Logout" onClick={handleLogout} /> */}
            <button
              onClick={handleLogout}
              className="text-md text-textColor sm:text-lg"
            >
              Logout
            </button>
          </div>
        </form>
      </FormWrapper>
    </>
  );
};

export default SelectFacility;
