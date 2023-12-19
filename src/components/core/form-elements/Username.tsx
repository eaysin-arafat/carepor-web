// import React, { useState } from "react";

import { User } from "react-feather";

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

function UserName({
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
    <div className="flex flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex">
        <div className="input_label">{label}</div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <div className="flex items-center border rounded w-full">
        <div className="h-full">
          <User size={25} />
        </div>
        <input
          type={type}
          className={`border-0 w-full outline-none focus:shadow-none focus:outline-none ${className}`}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          max={max || "250"}
          placeholder={`${placeholder ? placeholder : "Enter" + " " + label}`}
        />
      </div>
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal ">
          {errMsg}
        </span>
      )}
    </div>
  );
}

export default UserName;
