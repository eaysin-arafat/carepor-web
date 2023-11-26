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
  checked?: true;
};

function Radio({
  onChange,
  name,
  label,
  required,
  errMsg,
  className,
  value,
  checked,
}: Props) {
  return (
    <div className="flex flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex">
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <label className="flex justify-center items-center gap-2">
        <input
          type="radio"
          name={name}
          checked={checked}
          id={name}
          onChange={onChange}
          className={`border-gray-300 rounded h-4 w-4 ${className}`}
          value={value}
        />
        {label}
      </label>
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal ">
          Required
        </span>
      )}
    </div>
  );
}

export default Radio;
