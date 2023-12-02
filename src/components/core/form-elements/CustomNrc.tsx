import React, { ChangeEvent, FC } from "react";
import { PatternFormat } from "react-number-format";

interface CustomNrcProps {
  state?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  errMsg?: string;
  name?: string;
  label: string;
  className?: string;
  keyUpHandler?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref?: React.ForwardedRef<HTMLInputElement>;
  placeholder?: string
}

const CustomNrc: FC<CustomNrcProps> = React.forwardRef<
  HTMLInputElement,
  CustomNrcProps
>(
  (
    {
      state,
      onChange,
      required,
      disabled,
      errMsg,
      name = "nrc",
      placeholder = "______/__/_",
      label,
      className,
      keyUpHandler = null,
    },
    ref
  ) => {
    const handleNrcChange = (e: ChangeEvent<HTMLInputElement>) => {
      const nrcWithoutSlash = e.target.value.replace(/\//g, "")?.length;
      if (nrcWithoutSlash && nrcWithoutSlash <= 9) {
        onChange(e);
      }
    };

    return (
      <div className="flex flex-col w-full items-start justify-start gap-[6px]">
        <div className="flex">
          <div className="text-blackColor leading-[125%] capitalize ">
            {label}
          </div>
          {required && (
            <span className="-mt-[6px] mx-1 text-dangerColor">*</span>
          )}
        </div>
        <PatternFormat
          format="######/##/#"
          placeholder={placeholder}
          mask="_"
          {...(state && { value: state })}
          // value={state}
          onChange={handleNrcChange}
          disabled={disabled}
          onKeyUp={keyUpHandler}
          name={name}
          getInputRef={ref}
          className={`custom-input ${className}`}
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
);

export default CustomNrc;
