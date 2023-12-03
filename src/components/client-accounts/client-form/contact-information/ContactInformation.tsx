import CountryCode from "@/components/core/form-elements/CountryCode";
import Textarea from "@/components/core/form-elements/textarea";
import {
  ClientContactInfoErrorType,
  ClientContactInfoType,
  notZMPhoneResetType,
} from "@/types/clientFormTypes";
import Checkbox from "../../../core/form-elements/Checkbox";
import Input from "../../../core/form-elements/Input";
import PhoneNumberInput from "../../../core/form-elements/PhoneNumber";
import FormSection from "../../../core/form-layouts/FormSection";

type ContactInformationProps = {
  contactInfo: ClientContactInfoType;
  contactInfoError: ClientContactInfoErrorType;
  handleContactInformationChange: (e: React.ChangeEvent) => void;
  notZMPhoneResetContractInfo: notZMPhoneResetType;
};

function ContactInformation({
  contactInfo,
  contactInfoError,
  handleContactInformationChange,
  notZMPhoneResetContractInfo,
}: ContactInformationProps) {
  return (
    <>
      <FormSection titleText="Contact Information">
        <>
          {/* Cellphone Number */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="grid md:grid-cols-2 md:col-span-1">
              <h2 className="text-lg text-blackColor col-span-2 mb-5">
                Cellphone Number : <span className="text-dangerColor"> *</span>
              </h2>
              <div className="col-span-2 items-center ">
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1">
                    <CountryCode
                      label="Code"
                      name="cellphoneCountryCode"
                      value={contactInfo.cellphoneCountryCode}
                      onChange={handleContactInformationChange}
                      errMsg={contactInfoError?.cellphoneCountryCode}
                      disabled={contactInfo.noCellphone}
                      resetCellPhone={() =>
                        notZMPhoneResetContractInfo("cellphone")
                      }
                    />
                  </div>
                  <div className="col-span-2">
                    <PhoneNumberInput
                      name="cellphone"
                      value={contactInfo.cellphone}
                      onChange={handleContactInformationChange}
                      countryCode={contactInfo.cellphoneCountryCode}
                      errMsg={contactInfoError?.cellphone}
                      disabled={contactInfo.noCellphone}
                      label="Cellphone Number"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2 mt-5">
                <Checkbox
                  label="Client does not have cellphone number"
                  name="noCellphone"
                  checked={contactInfo.noCellphone}
                  onChange={handleContactInformationChange}
                />
              </div>
            </div>

            {/* Other Cellphone Number (Optional)  */}
            <div className="grid md:grid-cols-2 md:col-span-1">
              <h2 className="text-lg text-blackColor col-span-2 mb-5">
                Other Cellphone Number (Optional) :
              </h2>
              <div className="col-span-2 items-center ">
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1">
                    <CountryCode
                      value={contactInfo.otherCellphoneCountryCode}
                      label="Code"
                      name="otherCellphoneCountryCode"
                      onChange={handleContactInformationChange}
                      errMsg={contactInfoError?.otherCellphoneCountryCode}
                      resetCellPhone={() =>
                        notZMPhoneResetContractInfo("otherCellphone")
                      }
                    />
                  </div>
                  <div className="col-span-2">
                    <PhoneNumberInput
                      label="Cellphone Number"
                      name="otherCellphone"
                      value={contactInfo.otherCellphone}
                      onChange={handleContactInformationChange}
                      errMsg={contactInfoError?.otherCellphone}
                      countryCode={contactInfo.otherCellphoneCountryCode}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2 md:mt-10">
              </div>
            </div>
          </div>

          {/* Landline Number (Optional)  */}
          <h2 className="text-lg text-blackColor col-span-2 mt-5 mb-3">
            Landline Number (Optional) :
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="col-span-1 items-center ">
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                  <CountryCode
                    label="Code"
                    name="landlineCountryCode"
                    value={contactInfo.landlineCountryCode}
                    onChange={handleContactInformationChange}
                    errMsg={contactInfoError?.landlineCountryCode}
                    resetCellPhone={() =>
                      notZMPhoneResetContractInfo("landline")
                    }
                  />
                </div>
                <div className="col-span-2">
                  <PhoneNumberInput
                    label="Landline Number"
                    name="landline"
                    value={contactInfo.landline}
                    onChange={handleContactInformationChange}
                    errMsg={contactInfoError?.landline}
                    countryCode={contactInfo.landlineCountryCode}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <Input
                value={contactInfo.email}
                label="Email"
                name="email"
                onChange={handleContactInformationChange}
                errMsg={contactInfoError?.email}
              />
            </div>
            <div className="col-span-1">
              <Input
                label="House Number"
                name="householdNumber"
                value={contactInfo.householdNumber}
                onChange={handleContactInformationChange}
                errMsg={contactInfoError?.householdNumber}
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Road/Street"
                name="road"
                value={contactInfo.road}
                onChange={handleContactInformationChange}
                errMsg={contactInfoError?.road}
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Area"
                name="area"
                value={contactInfo.area}
                onChange={handleContactInformationChange}
                errMsg={contactInfoError?.area}
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Town Name"
                name="townName"
                value={contactInfo.townName}
                onChange={handleContactInformationChange}
                errMsg={contactInfoError?.townName}
              />
            </div>
            <div className="col-span-2">
              <Textarea
                label="Landmarks & Directions"
                name="landmarks"
                value={contactInfo.landmarks}
                onChange={handleContactInformationChange}
                errMsg={contactInfoError?.landmarks}
              />
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default ContactInformation;
