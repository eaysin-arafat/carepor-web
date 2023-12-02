import { cn } from "@/utilities/cn";

type Props = {
  tableHead: any;
  edit?: boolean;
  action?: boolean;
  gridCol?: number;
  result?: boolean;
  className?: string;
};

const TableHead = ({
  tableHead = [],
  edit = false,
  gridCol,
  action,
  result,
  className
}: Props) => {
  const length = tableHead.length;
  const lengthWithAction = tableHead.length + 1;
  const totalCol = edit ? lengthWithAction : length;
  const grid = ` grid-cols-${gridCol ? gridCol : totalCol} `;

  return (
    <div
      className={cn(
        `bg-whiteBgColor text-blackColor dark:text-grayColor border-b dark:border-b-gray-700 p-3 rounded-t-lg grid grid-cols-${grid}` , className
      )}
    >
      {tableHead.map((item, index) => (
        <div key={index} className="px-1 uppercase">
          {item}
        </div>
      ))}
      {action && (
        <div className="space-x-2  text-end me-4 uppercase">
          <div className="">Action</div>
        </div>
      )}
      {result && (
        <div className="space-x-2  text-end me-4 uppercase">
          <div className="">Result</div>
        </div>
      )}
    </div>
  );
};

export default TableHead;
