import { useReadCountriesQuery } from "@/features/country/country-api";
import { ApiEnumsType } from "@/types/enums-types";

export const renderOptions = (options: ApiEnumsType[] | any[]) => {
  return (
    Array.isArray(options) &&
    options.map((item) => (
      <option key={item?.oid} value={item?.oid}>
        {item?.description}
      </option>
    ))
  );
};

export const renderObjEnumOptions = (obj: { [key: number]: string }) => {
  const array = Object.keys(obj).map((d) => ({
    oid: d,
    description: obj[d],
  }));
  return array.map((item) => (
    <option key={item?.oid} value={item?.oid}>
      {item?.description}
    </option>
  ));
};

type Props = {
  options?: any[];
};

// default
/**
 * @use select option render
 * @param options
 * @Type SelectOptionType[{oid:optionId, description:description}]
 * @returns
 */
function RenderSelectOptions({ options = [] }: Props) {
  return <>{renderOptions(options)}</>;
}

export default RenderSelectOptions;

/**
 * @default countries select options
 * @param no params required
 * @returns select options for countries
 */
export const RenderCountryOptions = () => {
  const { data: countries } = useReadCountriesQuery(undefined);

  return (
    Array.isArray(countries) &&
    countries.map((item) => (
      <option key={item?.oid} value={item?.oid}>
        {item?.description}
      </option>
    ))
  );
};

/**
 * @default countries select options
 * @param no params required
 * @returns select options for countries
 */
export const RenderCountryCode = ({ countries }) => {
  return (
    Array.isArray(countries) &&
    countries?.map((country) => (
      <option key={country.oid} value={country.countryCode}>
        {country.isoCodeAlpha2} ({country.countryCode})
      </option>
    ))
  );
};
