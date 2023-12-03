import { Country } from "@/interface/country";
import { ContactInfoType, ErrorsType } from "@/types/user-accounts";
import Input from "../core/form-elements/Input";
import Select from "../core/form-elements/Select";
import Textarea from "../core/form-elements/textarea";
import FormSection from "../core/form-layouts/FormSection";

type Props = {
  contactInfo: ContactInfoType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: ErrorsType;
  countries: Country[];
  handleCellphoneChange: (e: string) => void;
  isCellphoneValid?: boolean;
  editMode?: boolean;
};

function ContactInfo({
  contactInfo,
  handleChange,
  errors,
  countries,
  handleCellphoneChange,
  isCellphoneValid,
  editMode = false,
}: Props) {
  const renderCountryOptions = () => {
    return countries.map((country: Country) => (
      <option key={country.oid} value={country.countryCode}>
        {country.isoCodeAlpha2}
      </option>
    ));
  };
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
            <Select
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
            </Select>
            <div>
              <Input
                required
                label="Cellphone"
                placeholder="Phone"
                {...(editMode && { value: contactInfo.cellphone })}
                name="cellphone"
                onChange={(e) => handleCellphoneChange(e.target.value)}
              />
              <p className="dark:text-gray-500 mt-2">Note: Cellphone must be unique.</p>
            </div>
          </div>
        </>
      </FormSection>
    </>
  );
}

export default ContactInfo;
