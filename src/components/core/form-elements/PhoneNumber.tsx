import React, { ChangeEvent } from "react";

interface PhoneNumberInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
  required?: boolean;
  errMsg?: string;
  disabled?: boolean;
  pattern?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  countryCode: string;
}

const PhoneNumber: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  name,
  label,
  required,
  errMsg,
  disabled,
  pattern,
  type,
  className,
  placeholder,
  countryCode,
}) => {
  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const ZMCountryCode = "+260";
    const ZMPattern = /^0?\d{0,9}$/;

    if (countryCode === ZMCountryCode) {
      if (ZMPattern.test(value)) {
        return onChange(e);
      }
    } else {
      if (/^[0-9]{0,11}$/.test(value)) {
        return onChange(e);
      }
    }
  };

  return (
    <div className="flex flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex">
        <div className="input_label "> {label}</div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <input
        // style={{ backgroundColor: disabled ? "#eef2f3" : undefined }}
        type={type || "text"}
        className={`custom-input ${disabled && "disabled_bg"} ${className}`}
        value={value}
        name={name}
        onChange={handleFilter}
        placeholder={label ? label : placeholder}
        disabled={disabled}
        pattern={pattern}
        max="250"
      />
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal text-xs">
          {errMsg}!
        </span>
      )}
      {/* {isOnlyNumber && (
        <p className="text-sm mt-1" style={{ color: "red" }}>
          {isOnlyNumber}
        </p>
      )} */}
    </div>
  );
};
export default PhoneNumber;
