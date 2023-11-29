import { useReadCountriesQuery } from "@/features/country/country-api";
import { OnchangeEventType } from "@/types/htmlEvents";
import Select from "./Select";

type Props = {
  value?: string | number;
  onChange?: (e: any) => void;
  name?: string;
  label: string;
  required?: boolean;
  errMsg?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  // countries: any;
  resetCellPhone: () => void;
};

/**
 * @params resetCellPhone *** use for reset cellPhone field if not valid
 * @params value
 * @params onChange
 * @params name
 * @params label
 * @params errMsg
 * @params className
 * @params disabled
 * @params placeholder
 * @params required
 */

function CountryCode({
  value,
  onChange,
  name,
  label,
  required,
  errMsg,
  disabled,
  className,
  placeholder,
  resetCellPhone,
}: // countries,
Props) {
  const { data: countries } = useReadCountriesQuery(undefined);

  const handleFilter = (e: OnchangeEventType) => {
    onChange(e);
    const { value } = e.target;
    const ZMCountryCode = "+260";
    if (value == ZMCountryCode) {
      if (!/^0?\d{0,9}$/.test(value) && resetCellPhone) {
        resetCellPhone();
      }
    }
  };

  return (
    <Select
      disabled={disabled}
      className={className}
      errMsg={errMsg}
      name={name}
      label={label || "Code"}
      value={value}
      onChange={handleFilter}
      placeholder={placeholder}
      required={required}
    >
      {renderCodeOptions(countries)}
    </Select>
  );
}

const renderCodeOptions = (countries: any) => {
  return Array.isArray(countries) ? (
    countries?.map((countryCode) => {
      return (
        <option key={countryCode.oid} value={countryCode.countryCode}>
          {countryCode.isoCodeAlpha2}
        </option>
      );
    })
  ) : (
    <></>
  );
};

export default CountryCode;
