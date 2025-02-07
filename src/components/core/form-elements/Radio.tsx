import { ChangeEvent } from "react";

type Props = {
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  required?: boolean;
  errMsg?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  max?: number;
  checked?: boolean;
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
        {required && <span className="input_required">*</span>}
      </div>
      <label className="flex justify-center text-textColor items-center gap-2">
        <input
          type="radio"
          name={name}
          checked={checked}
          id={name}
          onChange={onChange}
          className={`border-gray-300 rounded-full h-4 w-4 ${className}`}
          value={value}
        />
        {label}
      </label>
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal ">
          {errMsg}
        </span>
      )}
    </div>
  );
}

export default Radio;
