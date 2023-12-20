// import React, { useState } from "react";

type Props = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  required?: boolean;
  errMsg?: string;
  disabled?: boolean;
  pattern?: "textOnly" | "numberOnly" | "float" | "username";
  type?: string;
  className?: string;
  placeholder?: string;
  max?: string;
  numberOnly?: boolean;
};

function Input({
  value,
  onChange,
  name,
  label,
  required,
  errMsg,
  disabled,
  type = "text",
  className,
  placeholder,
  max,
}: Props) {
  return (
    <div className="flex flex-col w-full items-start justify-start gap-[3px]">
      <div className="flex">
        <div className="input_label text-xs !mb-0 ml-[1px]">{label}</div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <input
        type={type}
        className={`custom-input ${disabled && "disabled_bg"} ${className}`}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        max={max || "250"}
        placeholder={`${placeholder ? placeholder : "Enter" + " " + label}`}
      />
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal text-xs">
          {errMsg}!
        </span>
      )}
    </div>
  );
}

export default Input;
