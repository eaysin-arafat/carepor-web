import { cn } from "@/utilities/cn";

type Props = {
  children: any;
  className?: string;
};

const Table = ({ children , className }: Props) => {
  
  return (
    <div className={cn("bg-whiteBgColor rounded-lg" , className)}>
      {children}
    </div>
  );
};

export default Table;
