type SelectOptionType = {
  oid: string | number;
  description: string;
};
export const renderOptions = (options: SelectOptionType[] = []) => {
  return options.map((item) => (
    <option key={item?.oid} value={item?.oid}>
      {item?.description}
    </option>
  ));
};

type Props = {
  options: SelectOptionType[];
};

function RenderSelectOptions({ options }: Props) {
  return <>{renderOptions(options)}</>;
}

export default RenderSelectOptions;
