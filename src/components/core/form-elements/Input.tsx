// import React, { useState } from "react";

type Props = {
  value?: string | number;
  onChange?: any;
  name?: string;
  label: string;
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
  pattern,
  type = "text",
  className,
  placeholder,
  max,
  numberOnly,
}: Props) {
  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!pattern) {
      return onChange(event);
    }
  };

  return (
    <div className="flex flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex">
        <div className="text-blackColor leading-[125%] capitalize">
          {" "}
          {label}
        </div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <input
        type={numberOnly ? "text" : type}
        className={`custom-input ${className}`}
        value={value}
        name={name}
        onChange={handleInputChange}
        disabled={disabled}
        // pattern={pattern}
        max={max || "250"}
        placeholder={`${placeholder ? placeholder : "Enter" + " " + label}`}
      />
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal ">
          {errMsg}
        </span>
      )}
      {/* {isOnlyNumber && (
        <p className="text-sm mt-1" style={{ color: "red" }}>
          {isOnlyNumber}
        </p>
      )} */}
    </div>
  );
}

export default Input;
