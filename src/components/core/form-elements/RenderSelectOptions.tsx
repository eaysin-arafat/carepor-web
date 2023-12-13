import { useReadCountriesQuery } from "@/features/country/country-api";
import { ApiEnumsType } from "@/types/enums-types";

export const renderOptions = (options: ApiEnumsType[]) => {
  return (
    Array.isArray(options) &&
    options.map((item) => (
      <option key={item?.oid} value={item?.oid}>
        {item?.description}
      </option>
    ))
  );
};

type Props = {
  options: ApiEnumsType[];
};

// default
/**
 * @use select option render
 * @param options
 * @Type SelectOptionType[{oid:optionId, description:description}]
 * @returns
 */
function RenderSelectOptions({ options }: Props) {
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

// // default Home Language select options
// /**
//  * @
//  * @param no prams
//  * @returns select options for homeLanguage
//  */
// export const RenderLanguageOptions = () => {
//   const { data: homeLanguageEnum } = useReadHomeLanguagesQuery(undefined);

//   return renderOptions(homeLanguageEnum);
// };
