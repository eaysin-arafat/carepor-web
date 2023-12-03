import { cn } from "@/utilities/cn";
import React from "react";

type Props = {
  counter?: boolean;
  count?: string;
  title: string;
  value: string | number | boolean;
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
        "inline-flex cursor-pointer gap-2 items-center px-5 py-2.5 text-sm font-medium text-center border-2 border-primaryColor rounded-sm ",
        classNmae
      )}
    >
      {counter && (
        <span className="inline-flex items-center justify-center w-8 h-8 ms-2 text-xs font-semibold text-whiteColor bg-primaryColor rounded-full">
          {count}
        </span>
      )}
      <span className="text-primaryColor font-semibold">{title}</span>
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
