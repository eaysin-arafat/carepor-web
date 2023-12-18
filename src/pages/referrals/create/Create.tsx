import CancelAndAddButton from "@/components/core/buttons/CancelAndAddButton";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Textarea from "@/components/core/form-elements/textarea";
import DefaultOpenModal from "@/components/core/modal/DefaultOpenModal";
import useCreate from "./useCreate";

export interface ReferralsErrorType {
  isProceededFacility?: string;
  reasonForReferral?: string;
  referralType?: string;
  otherFacility?: string;
  otherFacilityType?: string;
  servicePointId?: string;
  receivingFacilityId?: string;
  referredFacilityId?: string;
  facilityId?: string;
  provinceId?: string;
  districtId?: string;
  comments?: string;
}

function ReferralsCreate({ toggler }) {
  const {
    errorMsg,
    filteredDistricts,
    filteredFacilities,
    handleChange,
    handleSubmit,
    isLoadedDistricts,
    isLoadedFacilities,
    isLoadedProvinces,
    isLoadedServicePoints,
    isLoading,
    provinces,
    referralData,
    servicePoints,
    status,
  } = useCreate();

  const renderProvinceOptions = () => {
    return provinces?.map((province) => (
      <option key={province.oid} value={province.oid}>
        {province.description}
      </option>
    ));
  };

  const renderDistrictOptions = () => {
    return filteredDistricts?.map((district) => (
      <option key={district.oid} value={district.oid}>
        {district.description}
      </option>
    ));
  };

  const renderFacilityOptions = () => {
    return filteredFacilities?.map((facility) => (
      <option key={facility.oid} value={facility.oid}>
        {facility.description}
      </option>
    ));
  };

  const renderServicePointOptions = () => {
    return servicePoints?.map((servicePoint) => (
      <option key={servicePoint.oid} value={servicePoint.oid}>
        {servicePoint.description}
      </option>
    ));
  };

  return (
    <DefaultOpenModal title="Referral" isShow={true} toggler={toggler}>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <Input
            required
            label="Reason For Referral"
            name="reasonForReferral"
            errMsg={errorMsg?.reasonForReferral}
            onChange={handleChange}
            value={referralData?.reasonForReferral}
          />
          <Select
            label="Referral Type"
            name="referralType"
            value={referralData?.referralType}
            onChange={handleChange}
            errMsg={errorMsg?.referralType}
          >
            <option value="1">Internal</option>
            <option value="2">External</option>
          </Select>
        </div>

        {/* DIVIDER */}
        <hr className="my-5" />
        <h1 className="text-md font-medium mb-2">External Referral :</h1>

        <div className="flex gap-5">
          <Select
            required
            label="Province"
            name="provinceId"
            errMsg={errorMsg?.provinceId}
            value={referralData?.provinceId}
            onChange={handleChange}
            disabled={
              referralData?.referralType === "1" || !referralData?.referralType
            }
          >
            {isLoadedProvinces && renderProvinceOptions()}
          </Select>

          <Select
            required
            label="District"
            name="districtId"
            errMsg={errorMsg?.districtId}
            value={referralData?.districtId}
            onChange={handleChange}
            disabled={
              referralData?.referralType === "1" || !referralData?.referralType
            }
          >
            {isLoadedDistricts && renderDistrictOptions()}
          </Select>
        </div>

        <div className="flex gap-5 mt-5">
          <Select
            required
            label="Facility"
            name="receivingFacilityId"
            errMsg={errorMsg?.receivingFacilityId}
            value={referralData?.receivingFacilityId}
            onChange={handleChange}
            disabled={
              referralData?.referralType === "1" || !referralData?.referralType
            }
          >
            {isLoadedFacilities && renderFacilityOptions()}
          </Select>
          <Input
            label="Others Facility"
            name="otherFacility"
            value={referralData?.otherFacility}
            onChange={handleChange}
            errMsg={errorMsg?.otherFacility}
            disabled={
              referralData?.referralType === "1" || !referralData?.referralType
            }
          />
        </div>

        <div className="flex gap-5 mt-5">
          <Input
            label="Others Facility Type"
            name="otherFacilityType"
            value={referralData?.otherFacilityType}
            onChange={handleChange}
            errMsg={errorMsg?.otherFacilityType}
            disabled={
              referralData?.referralType === "1" || !referralData?.referralType
            }
          />
          <Select
            required
            label="Referral Service"
            name="servicePointId"
            errMsg={errorMsg?.servicePointId}
            value={referralData?.servicePointId}
            onChange={handleChange}
          >
            {isLoadedServicePoints && renderServicePointOptions()}
          </Select>
        </div>

        <div className="flex gap-5 mt-5">
          <Textarea
            label="Additional Comments"
            name="comments"
            value={referralData?.comments}
            onChange={handleChange}
            errMsg={errorMsg?.comments}
          />
        </div>

        {/* DIVIDER */}
        <hr className="my-5" />

        {/* BUTTONS */}
        <CancelAndAddButton
          toggler={toggler}
          disableBoth={isLoading || status === "pending"}
        />
      </form>
    </DefaultOpenModal>
  );
}

export default ReferralsCreate;
