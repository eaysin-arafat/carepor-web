import { cn } from "@/utilities/cn";

type Props = {
  value?: string | number;
  type?: string;
};

const Badge = ({ value, type }: Props) => {
  return (
    <span
      className={cn(
        " ",
        { "": type === "circle", "": type === "Rectangle" }
      )}
    >
      {value}
    </span>
  );
};

export default Badge;
