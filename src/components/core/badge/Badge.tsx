import { cn } from "@/utilities/cn";

type Props = {
  value?: string | number;
  type?: string;
};

/**
 *
 * @param value Number
 * @param type  circle | Rectangle
 * @returns
 */

const Badge = ({ value, type }: Props) => {
  return (
    <span
      className={cn(" ", { "": type === "circle", "": type === "Rectangle" })}
    >
      {value}
    </span>
  );
};

export default Badge;
