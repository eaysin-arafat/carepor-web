import React from "react";
import Checkbox from "../../core/form-elements/Checkbox";
import Input from "../../core/form-elements/Input";
import PhoneNumberInput from "../../core/form-elements/PhoneNumber";
import Select from "../../core/form-elements/Select";
import FormSection from "../../core/form-layouts/FormSection";

type Props = {};

function ContactInformation({}: Props) {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  console.log(handler);

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
                    <Select label="Code" name="cellphoneCountryCode">
                      <option value="">Select</option>
                    </Select>
                  </div>
                  <div className="col-span-2">
                    <PhoneNumberInput
                      name="cellphone"
                      value={"000000000"}
                      onChange={handler}
                      countryCode={""}
                      label="Cellphone Number"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2 mt-5">
                <Checkbox label="Client does not have cellphone number" />
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
                    <Select label="Code" name="cellphoneCountryCode">
                      <option value="">Select</option>
                    </Select>
                  </div>
                  <div className="col-span-2">
                    <PhoneNumberInput
                      name="cellphone"
                      value={"00000000"}
                      onChange={handler}
                      label="Cellphone Number"
                      countryCode={""}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-2 mt-5">
                <Checkbox label="Client does not have cellphone number" />
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
                  <Select label="Code" name="cellphoneCountryCode">
                    <option value="">Select</option>
                  </Select>
                </div>
                <div className="col-span-2">
                  <PhoneNumberInput
                    name="cellphone"
                    value={"00000000"}
                    onChange={handler}
                    label="Landline Number"
                    countryCode={""}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <Input label="Email" />
            </div>
            <div className="col-span-1">
              <Input label="House Number" />
            </div>
            <div className="col-span-1">
              <Input label="Road/Street" />
            </div>
            <div className="col-span-1">
              <Input label="Area" />
            </div>
            <div className="col-span-1">
              <Input label="Town Name" />
            </div>
            <div className="col-span-2">
              <Input label="Landmarks & Directions" />
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default ContactInformation;
