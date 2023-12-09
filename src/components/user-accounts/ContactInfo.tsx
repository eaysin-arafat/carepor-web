import { Country } from "@/interface/country";
import { ContactInfoType, ErrorsType } from "@/types/user-accounts";
import CountryCode from "../core/form-elements/CountryCode";
import PhoneNumber from "../core/form-elements/PhoneNumber";
import Textarea from "../core/form-elements/textarea";
import FormSection from "../core/form-layouts/FormSection";

type Props = {
  contactInfo: ContactInfoType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: ErrorsType;
  countries: Country[];
  handleCellphoneChange: (e: string) => void;
  handleChangeCellphoneAndCode: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  isCellphoneValid?: boolean;
  editMode?: boolean;
};

function ContactInfo({
  contactInfo,
  handleChange,
  errors,
  countries,
  handleCellphoneChange,
  handleChangeCellphoneAndCode,
  isCellphoneValid,
  editMode = false,
}: Props) {
  // const renderCountryOptions = () => {
  //   return countries.map((country: Country) => (
  //     <option key={country.oid} value={country.countryCode}>
  //       {country.isoCodeAlpha2}
  //     </option>
  //   ));
  // };
  console.log(countries, editMode);

  console.log(handleCellphoneChange);
  console.log(contactInfo.countryCode);
  return (
    <>
      <FormSection titleText="Contact Information">
        <>
          <div className="">
            <Textarea
              required
              className="w-[100%]"
              label="Contact Address"
              placeholder="Add Address"
              max={500}
              errMsg={errors?.contactAddress}
              value={contactInfo.contactAddress}
              onChange={handleChange}
              name="contactAddress"
            />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-4">
            <CountryCode
              resetCellPhone={() => {}}
              required
              label="Code"
              placeholder="Add Code"
              value={contactInfo.countryCode}
              name="countryCode"
              onChange={handleChangeCellphoneAndCode}
              errMsg={
                errors?.countryCode ||
                errors?.cellphone ||
                (!isCellphoneValid ? "Cellphone already exists" : "")
              }
            />
            {/* <Select
              required
              label="Code"
              placeholder="Add Code"
              value={contactInfo.countryCode}
              name="countryCode"
              onChange={handleChange}
              errMsg={
                errors?.countryCode ||
                errors?.cellphone ||
                (!isCellphoneValid ? "Cellphone already exists" : "")
              }
            >
              {countries?.length > 0 && renderCountryOptions()}
            </Select> */}
            <div>
              <PhoneNumber
                required
                name="cellphone"
                countryCode={contactInfo.countryCode}
                label="Cellphone"
                placeholder="Phone"
                value={contactInfo.cellphone}
                onChange={handleChangeCellphoneAndCode}
              />
              {/* <Input
                required
                label="Cellphone"
                placeholder="Phone"
                {...(editMode && { value: contactInfo.cellphone })}
                name="cellphone"
                onChange={(e) => handleCellphoneChange(e.target.value)}
              /> */}
              <p className="dark:text-gray-500 mt-2">
                Note: Cellphone must be unique.
              </p>
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default ContactInfo;
