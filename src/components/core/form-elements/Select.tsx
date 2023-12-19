import React from "react";

type Props = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange?: any;
  name?: string;
  label: string;
  required?: boolean;
  errMsg?: number | string;
  selectShow?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  children?: React.ReactNode;
  isHideSelect?: boolean;
};

function Select({
  value,
  onChange,
  name,
  label,
  required,
  errMsg,
  selectShow = "--Select--",
  isHideSelect,
  disabled,
  className,
  placeholder,
  children,
}: Props) {
  // console.log({ value });
  return (
    <div className="flex flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex">
        <div className="input_label "> {label}</div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <select
        className={`custom-input ${disabled && "disabled_bg"} ${
          value === "" && "default_option"
        } ${className}`}
        value={value}
        name={name}
        // @ts-ignore
        onChange={onChange}
        disabled={disabled}
        placeholder={`${placeholder ? placeholder : "Enter" + " " + label}`}
      >
        {!isHideSelect && (
          <option value="" className="text-textColor">
            {selectShow}
          </option>
        )}

        {children}
      </select>
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal text-xs">
          {errMsg}!
        </span>
      )}
    </div>
  );
}

export default Select;
