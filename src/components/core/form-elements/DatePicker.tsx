import React, { KeyboardEvent } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateInputProps {
  onChange: (date: Date | null) => void;
  selected?: Date | null;
  label?: string;
  required?: boolean;
  // error?: boolean;
  errMsg?: string;
  disabled?: boolean;
  name?: string;
  className?: string;
  min?: Date | null;
  max?: Date | null;
  notOnKeyDown?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({
  onChange,
  selected,
  label,
  required,
  // error,
  errMsg,
  disabled,
  name = "",
  className = "",
  min = null,
  max = null,
  notOnKeyDown,
}) => {
  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!notOnKeyDown) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex  flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex w-full">
        <div className="input_label ">
          {" "}
          {label}
        </div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <ReactDatePicker
        selected={selected || null}
        closeOnScroll={true}
        showYearDropdown
        showMonthDropdown
        minDate={min}
        maxDate={max}
        name={name}
        disabled={disabled}
        dropdownMode="select"
        onChange={onChange}
        dateFormat={"dd/MM/yyyy"}
        placeholderText="dd/mm/yyyy"
        onKeyDown={handleOnKeyDown}
        wrapperClassName="w-full"
        className={`custom-input w-[100%] ${className}`}
      />
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal ">
          {errMsg}
        </span>
      )}
    </div>
  );
};

export default DateInput;
