import { cn } from "@/utilities/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  isRounded?: boolean;
};

function Table({ children, className , isRounded }: Props) {
  return (
    <div className={`overflow-x-auto ${isRounded ? " rounded-lg" : " "}`}>
      <div className={cn("min-w-[900px]  w-full ", className)}>{children}</div>
    </div>
  );
}

export default Table;
