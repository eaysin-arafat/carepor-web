import { cn } from "@/utilities/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Table = ({ children, className }: Props) => {
  return (
    <div className="overflow-x-auto">
      <div className={cn("bg-whiteBgColor   max-full", className)}>
        {children}
      </div>
    </div>
  );
};

export default Table;
