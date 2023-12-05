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

const Badge = ({ value, className, type = "circle" }: Props) => {
  return (
    <span
      className={cn(
        "                 ",
        {
          "inline-flex items-center justify-center w-7 h-7 text-xs font-bold text-white bg-primaryColor rounded-full":
            type === "circle",
          "flex items-center justify-center px-5 py-1 text-xs font-bold text-white bg-primaryColor rounded-full":
            type === "rectangle",
        },
        className
      )}
    >
      {value}
    </span>
  );
};

export default Badge;
