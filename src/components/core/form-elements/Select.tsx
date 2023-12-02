type Props = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent) => void;
  // onChange?: any;
  name?: string;
  label: string;
  required?: boolean;
  errMsg?: string;
  selectShow?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  children?: any;
};

function Select({
  value,
  onChange,
  name,
  label,
  required,
  errMsg,
  selectShow = "--Select--",
  disabled,
  className,
  placeholder,
  children,
}: Props) {
  // console.log({ value });
  return (
    <div className="flex flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex">
        <div className="text-blackColor leading-[125%] capitalize ">
          {" "}
          {label}
        </div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <select
        className={`custom-input ${
          value === "" && "default_option"
        } ${className}`}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        placeholder={`${placeholder ? placeholder : "Enter" + " " + label}`}
      >
        <option value="" className="text-black">
          {selectShow}
        </option>
        {children}
      </select>
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal ">
          {errMsg}
        </span>
      )}
    </div>
  );
}

export default Select;
