import PropTypes from "prop-types";
import { ChangeEvent, FC } from "react";
import { PatternFormat } from "react-number-format";

interface CustomNrcProps {
  state: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  errMsg?: string;
  name?: string;
  label: string;
  className?: string;
  keyUpHandler?: any;
}

const CustomNrc: FC<CustomNrcProps> = ({
  state,
  onChange,
  required,
  disabled,
  errMsg,
  name = "nrc",
  label,
  className,
  keyUpHandler = null,
}) => {
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
          {" "}
          {label}
        </div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <PatternFormat
        format="######/##/#"
        placeholder="______/__/_"
        mask="_"
        value={state}
        onChange={handleNrcChange}
        disabled={disabled}
        onKeyUp={keyUpHandler}
        name={name}
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
};

CustomNrc.propTypes = {
  state: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  errMsg: PropTypes.string,
  name: PropTypes.string,
  keyUpHandler: PropTypes.func,
};

export default CustomNrc;
