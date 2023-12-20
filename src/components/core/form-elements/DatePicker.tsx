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
  isClearable?: boolean;
  placeholderText?: string;
  timeOnly?: boolean;
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
  isClearable = false,
  placeholderText = "dd/mm/yyyy",
  timeOnly = false,
}) => {
  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!notOnKeyDown) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex  flex-col w-full items-start justify-start gap-[6px] !z-50">
      <div className="flex w-full">
        <div className="input_label "> {label}</div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <ReactDatePicker
        selected={selected || null}
        closeOnScroll={true}
        minDate={min}
        maxDate={max}
        name={name}
        isClearable={isClearable}
        disabled={disabled}
        onChange={onChange}
        placeholderText={placeholderText}
        onKeyDown={handleOnKeyDown}
        wrapperClassName="w-full"
        className={`custom-input w-[100%] !z-50 ${className}`}
        {...(timeOnly && {
          showTimeSelect: true,
          showTimeSelectOnly: true,
          timeIntervals: 1,
          timeCaption: "Time",
          dateFormat: "h:mm aa",
        })}
        {...(!timeOnly && {
          showYearDropdown: true,
          showMonthDropdown: true,
          dropdownMode: "select",
          dateFormat: "dd/MM/yyyy",
        })}
      />
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal text-xs">
          {errMsg}!
        </span>
      )}
    </div>
  );
};

export default DateInput;
