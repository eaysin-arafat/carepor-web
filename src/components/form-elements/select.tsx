type Props = {
  value?: string | number;
  onChange?: any;
  name?: string;
  label: string;
  required?: boolean;
  errMsg?: string;
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
  disabled,
  className,
  placeholder,
  children,
}: Props) {
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
        className={`custom-input ${className}`}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        placeholder={`${placeholder ? placeholder : "Enter" + " " + label}`}
      >
        {children}
      </select>
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal ">
          Required
        </span>
      )}
    </div>
  );
}

export default Select;
