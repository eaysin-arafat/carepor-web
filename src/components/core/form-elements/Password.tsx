import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

type Props = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label: string;
  required?: boolean;
  errMsg?: string;
  disabled?: boolean;
  pattern?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  max?: string;
};

function Password({
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
  max,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex">
        <div className="input_label">{label}</div>
        {required && <span className="-mt-[6px] mx-1 text-dangerColor">*</span>}
      </div>
      <div className="relative w-full">
        <input
          type={showPassword ? type : "password"}
          className={`custom-input text-base min-h-[52px] ${
            disabled && "disabled_bg"
          } ${className}`}
          value={value}
          name={name}
          onChange={onChange}
          disabled={disabled}
          pattern={pattern}
          max={max || "250"}
          placeholder={`${placeholder ? placeholder : "Minimum 8 characters"}`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-5 top-1/2 text-base transform -translate-y-1/2 cursor-pointer dark:text-gray-500"
        >
          {showPassword ? (
            <FiEyeOff className="text-xl text-primaryColor" />
          ) : (
            <FiEye className="text-xl text-primaryColor" />
          )}
        </button>
      </div>

      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal ">
          {errMsg}
        </span>
      )}
    </div>
  );
}

export default Password;
