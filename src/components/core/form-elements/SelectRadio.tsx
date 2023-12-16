import { cn } from "@/utilities/cn";
import React from "react";

type Props = {
  counter?: boolean;
  count?: string;
  title: string;
  value: string | number;
  handler: (e: React.ChangeEvent) => void;
  name: string;
  classNmae: string;
};

/**
 *
 * @param Counter Bollean
 * @param Title string
 * @param Count string
 * @returns
 */
const SelectRadio = ({
  count,
  counter,
  title,
  value,
  handler,
  name,
  classNmae,
}: Props) => {
  return (
    <label
      className={cn(
        "inline-flex cursor-pointer gap-4 justify-center items-center px-5 py-3 text-sm font-medium text-center  border-2 border-primaryColor rounded-sm ",
        classNmae
      )}
    >
      {counter && (
        <span className="inline-flex items-center justify-center border border-white w-6 h-6 md:w-8 md:h-8 ms-2 text-xs font-semibold text-whiteColor bg-primaryColor rounded-full">
          {count}
        </span>
      )}
      {title}
      <input
        type="radio"
        className="hidden"
        onChange={handler}
        value={value}
        name={name}
      />
    </label>
  );
};

export default SelectRadio;
