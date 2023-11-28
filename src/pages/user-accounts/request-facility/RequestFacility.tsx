import Select from "@/components/core/form-elements/Select";

import Button from "@/components/core/buttons/Button";
import RenderSelectOptions from "@/components/core/form-elements/RenderSelectOptions";
import FormLayout from "@/components/core/form-layouts/FormLayout";
import useRequestFacility from "./useRequestFacility";

type Props = {};

const RequestFacility = ({}: Props) => {
  const {
    facilityChangeHandler,
    districtOptions,
    facilitiesOptions,
    facilityError,
    facilityState,
    provinceOptions,
    //
    handleSendFacilityRequest,
    handleCancelRequest,
  } = useRequestFacility();

  return (
    <div>
      <FormLayout
        mainTitle="Request Facility Login"
        note="Please select a Facility to send login request."
        className="max-w-[570px]"
      >
        <form action="" className="mt-5">
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
            <Button
              onClick={handleSendFacilityRequest}
              type="submit"
              title="Submit Request"
            />
          </div>

          <div className="mt-5 mb-3">
            <Button
              onClick={handleCancelRequest}
              type="outline"
              title="Cancel"
            />
          </div>
        </form>
      </FormLayout>
    </div>
  );
};

export default RequestFacility;
