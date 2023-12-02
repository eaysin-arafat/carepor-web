import { cn } from "@/utilities/cn";

type Props = {
  tableHead: any;
  edit?: boolean;
  action?: boolean;
  gridCol?: number;
  result?: boolean;
};

const TableHead = ({
  tableHead = [],
  edit = false,
  gridCol,
  action,
  result,
}: Props) => {
  const length = tableHead.length;
  const lengthWithAction = tableHead.length + 1;
  const totalCol = edit ? lengthWithAction : length;
  const grid = ` grid-cols-${gridCol ? gridCol : totalCol} `;

  return (
    <div
      className={cn(
        `bg-whiteColor border-b p-3 rounded-t-lg grid grid-cols-${grid}`
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
