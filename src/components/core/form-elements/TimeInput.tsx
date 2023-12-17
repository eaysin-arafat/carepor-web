import React from "react";
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
  isClearable?: boolean;
  placeholderText?: string;
}

const TimeInput: React.FC<DateInputProps> = ({
  onChange,
  selected,
  label,
  required,
  errMsg,
  min,
  max,
  className,
  placeholderText = "Select Time",
}) => {
  return (
    <div className="flex  flex-col w-full items-start justify-start gap-[6px] !z-50">
      <div className="flex w-full">
        <div className="input_label "> {label}</div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <label className={"w-full "}>
        {/* <label className={inputCss.new_input_wrapper}> */}
        <ReactDatePicker
          selected={selected}
          onChange={onChange}
          showTimeSelect
          showTimeSelectOnly
          minDate={min}
          maxDate={max}
          maxTime={max}
          minTime={min}
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
          placeholderText={placeholderText}
          wrapperClassName="w-full"
          className={`custom-input w-[100%] !z-50 ${className}`}
        />{" "}
      </label>
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal ">
          {errMsg}
        </span>
      )}
    </div>
  );
};

export default TimeInput;
