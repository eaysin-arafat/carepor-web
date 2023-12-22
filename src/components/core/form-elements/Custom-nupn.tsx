// function CustomNupn({
//   nupn,
//   handler,
//   required,
//   disabled,
//   errMsg,
//   keyUpHandler = null,
// }) {
//   return (
//     <div className="w-full">
//       <div className={inputCss.new_input_wrapper}>
//         <PatternFormat
//           format="####-####P-#####-#"
//           placeholder="____-____P-_____-_"
//           mask="_"
//           value={nupn}
//           onChange={handler}
//           disabled={disabled}
//           onKeyUp={keyUpHandler}
//         />
//         <p className={inputCss.input_label}>
//           NUPN {required && <sup style={{ color: "red" }}>*</sup>}
//         </p>
//       </div>

//       {errMsg && (
//         <p className="text-sm mt-1" style={{ color: "red" }}>
//           {errMsg}
//         </p>
//       )}
//     </div>
//   );
// }

import React, { ChangeEvent, FC } from "react";
import { PatternFormat } from "react-number-format";

interface CustomNrcProps {
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  errMsg?: string;
  name?: string;
  label?: string;
  className?: string;
  keyUpHandler?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref?: React.ForwardedRef<HTMLInputElement>;
  placeholder?: string;
}

const CustomNupn: FC<CustomNrcProps> = React.forwardRef<
  HTMLInputElement,
  CustomNrcProps
>(
  (
    {
      value,
      onChange,
      required,
      disabled,
      errMsg,
      name = "nrc",
      placeholder = "____-_____P-_____-_",
      label,
      className,
      keyUpHandler = null,
    },
    ref
  ) => {
    return (
      <div className="flex flex-col w-full items-start justify-start gap-[6px]">
        <div className="flex">
          <div className="input_label ">{label}</div>
          {required && (
            <span className="-mt-[6px] mx-1 text-dangerColor">*</span>
          )}
        </div>
        <PatternFormat
          format="####-#####P-#####-#"
          placeholder={placeholder}
          mask="_"
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          onKeyUp={keyUpHandler}
          getInputRef={ref}
          className={`custom-input ${disabled && "disabled_bg"} ${className}`}
        />
        {errMsg && (
          <span className="text-dangerColor leading-[125%] font-normal text-xs">
            {errMsg}!
          </span>
        )}
      </div>
    );
  }
);

export default CustomNupn;
