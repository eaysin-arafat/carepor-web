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

function Checkbox({
  onChange,
  name,
  label,
  required=true,
  errMsg,
  className,
  checked,
}: Props) {
  return (
    <div className="flex flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex">
      </div>
      <label className="flex justify-center items-center gap-2">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          id={name}
          onChange={onChange}
          className={`border-gray-300 rounded-lg h-5 w-5 ${className}`}
        />
        <p className="text-sm">{label}</p>
        {required && <span className="-mt-[6px] text-dangerColor">*</span>}
      </label>
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal ">
          Required
        </span>
      )}
    </div>
  );
}

export default Checkbox;
