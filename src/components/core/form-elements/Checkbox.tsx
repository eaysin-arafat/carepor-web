type Props = {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  marginTop?: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  max?: number;
  checked?: boolean;
};

function Checkbox({
  onChange,
  name,
  label,
  required = false,
  className,
  checked,
  marginTop,
}: Props) {
  return (
    <div className="flex flex-col w-full items-start justify-start ">
      <div className="flex"></div>
      <label
        className={`flex justify-center items-center gap-2 ${
          marginTop && marginTop
        } `}
      >
        <input
          type="checkbox"
          name={name}
          checked={checked}
          id={name}
          onChange={onChange}
          className={` dark:bg-black border-gray-300 rounded h-5 w-5 focus:border-borderColor focus:shadow-none outline-none focus:outline-none focus:ring-0 ${className}`}
        />
        <p className="text-sm dark:text-gray-500">{label}</p>
        {required && <span className="-mt-[6px] text-dangerColor">*</span>}
      </label>
    </div>
  );
}

export default Checkbox;
