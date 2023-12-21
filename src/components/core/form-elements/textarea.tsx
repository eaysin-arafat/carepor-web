type Props = {
  value?: string | number;
  onChange?: any;
  name?: string;
  label: string;
  required?: boolean;
  errMsg?: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  max?: number;
  // numberOnly?: boolean;
};

function Textarea({
  value,
  onChange,
  name,
  label,
  required,
  errMsg,
  disabled,
  className,
  placeholder,
  max = 250,
}: // numberOnly,
Props) {
  return (
    <div className="flex flex-col w-full items-start justify-start gap-[6px]">
      <div className="flex">
        <div className="input_label"> {label}</div>
        {required && <span className="input_required">*</span>}
      </div>
      <textarea
        className={`custom-input rounded-lg ${
          disabled && "disabled_bg"
        } ${className}`}
        value={value}
        name={name}
        onChange={onChange}
        disabled={disabled}
        maxLength={max}
        placeholder={`${placeholder ? placeholder : "Enter" + " " + label}`}
      />
      {errMsg && (
        <span className="text-dangerColor leading-[125%] font-normal text-xs">
          {errMsg}!
        </span>
      )}
    </div>
  );
}

export default Textarea;
