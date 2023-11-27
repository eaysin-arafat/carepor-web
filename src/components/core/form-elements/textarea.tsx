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
  max?: number;
  // numberOnly?: boolean;
};

function Textarea({
  value,
  onChange,
  name,
  label,
  required,
  errMsg,
  disabled,
  className,
  placeholder,
  max = 250,
}: // numberOnly,
Props) {
  return (
    <div className="flex flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex">
        <div className="text-blackColor leading-[125%] capitalize">
          {" "}
          {label}
        </div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <textarea
        className={`w-full rounded-md text-blackColor bg-whiteColor box-border flex flex-row items-center justify-start py-[10px] px-4 border-[2px] border-solid border-borderColor outline-none ${className}`}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        maxLength={max}
        placeholder={`${placeholder ? placeholder : "Enter" + " " + label}`}
      />
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal ">
          {errMsg}
        </span>
      )}
    </div>
  );
}

export default Textarea;
