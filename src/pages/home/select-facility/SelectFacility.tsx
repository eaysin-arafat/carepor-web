import OutlineButton from "@/components/core/buttons/OutlineButton";
import SubmitButton from "@/components/core/buttons/SubmitButton";
import RenderSelectOptions from "@/components/core/form-elements/RenderSelectOptions";
import Select from "@/components/core/form-elements/Select";
import FormLayout from "@/components/core/form-layouts/FormLayout";
import { URLRequestFacility } from "@/routers/facility";
import { Link } from "react-router-dom";
import useSelectFacility from "./useSelectFacility";

const SelectFacility = () => {
  // const { data } = useReadProvincesQuery(undefined);
  // console.log(data);

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
      <FormLayout
        layoutCenter
        mainTitle="Select Facility"
        note="Please select a facility to enter."
        className="md:w-[570px] "
      >
        <form onSubmit={handleRequestSubmit} className="mt-5">
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
          <div className="text-right mt-3">
            <Link
              to={URLRequestFacility()}
              className="text-grayColor hover:text-primaryColor text-xs"
            >
              Send Facility Access Request
            </Link>
          </div>
          <div className="mt-5">
            <SubmitButton buttonType="submit" title="Enter" />
          </div>
          <div className="text-center mt-2">
            <OutlineButton title="Logout" onClick={handleLogout} />
          </div>
        </form>
      </FormLayout>
    </>
  );
};

export default SelectFacility;
