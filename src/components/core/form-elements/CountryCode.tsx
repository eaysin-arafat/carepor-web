import { useReadCountriesQuery } from "@/features/country/country-api";
import { Country } from "@/interface/country";
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
}: Props) {
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
      selectShow="Country"
    >
      {renderCodeOptions(countries)}
    </Select>
  );
}

const renderCodeOptions = (countries: Country[]) => {
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
