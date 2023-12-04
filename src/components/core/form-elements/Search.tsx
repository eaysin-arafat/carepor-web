import { FiEyeOff } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";

type Props = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label: string;
  required?: boolean;
  errMsg?: string;
  disabled?: boolean;
  pattern?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  max?: string;
};

function Search({
  value,
  onChange,
  name,
  label,
  required,
  disabled,
  pattern,
  type = "text",
  className,
  placeholder,
  max,
}: Props) {
  return (
    <div className="flex flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex">
        <div className="text-blackColor leading-[125%] capitalize">{label}</div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <div className="relative w-full">
        <input
          type={type}
          className={`custom-input text-base min-h-[52px] ${
            disabled && "disabled_bg"
          } ${className}`}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          pattern={pattern}
          max={max || "250"}
          placeholder={`${placeholder ? placeholder : "Search..."}`}
        />
        <button
          type="button"
          className="absolute right-5 top-1/2 text-base transform -translate-y-1/2 cursor-pointer dark:text-gray-500"
        >
          <IoMdSearch className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Search;
