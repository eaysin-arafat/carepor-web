import { cn } from "@/utilities/cn";

type Props = {
  children: any;
};

const Table = ({ children }: Props) => {
  
  return (
    <div className={cn("bg-whiteColor rounded-lg")}>
      {children}
    </div>
  );
};

export default Table;
