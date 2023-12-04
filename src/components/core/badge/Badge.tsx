import { cn } from "@/utilities/cn";

type Props = {
  value?: string | number;
  className?: string;
  type?: "rectangle" | "circle";
};

/**
 *
 * @param value Number
 * @param type  circle | Rectangle
 * @returns
 */

const Badge = ({ value, className , type = "circle" }: Props) => {
  return (
    <span
      className={cn(" ", {
        "inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-primaryColor border-2 border-white rounded-full dark:border-gray-900":
          type === "circle",
        "flex items-center justify-center px-5 py-1 text-xs font-bold text-white bg-primaryColor border-2 border-white rounded-full dark:border-gray-900":
          type === "rectangle",
      } , className)}
    >
      {value}
    </span>
  );
};

export default Badge;
