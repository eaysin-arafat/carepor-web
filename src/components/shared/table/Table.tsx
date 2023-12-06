import { cn } from "@/utilities/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Table({ children, className }: Props) {
  return (
    <div className="overflow-x-auto ">
      <div className={cn("min-w-[900px]  w-full ", className)}>{children}</div>
    </div>
  );
}

export default Table;
