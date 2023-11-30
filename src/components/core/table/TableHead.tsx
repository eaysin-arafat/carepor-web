import { cn } from "@/utilities/cn";

type Props = {
  tableHead: any;
  edit?: boolean;
  gridCol?: number;
};

const TableHead = ({ tableHead = [], edit = false , gridCol }: Props) => {
  const length = tableHead.length
  const lengthWithAction = tableHead.length + 1
  const totalCol = edit ? lengthWithAction : length
  const grid = ` grid-cols-${gridCol ? gridCol : totalCol} `
  
  return (
    <div
      className={cn(`bg-whiteColor border-b p-3 rounded-t-lg grid grid-cols-${grid}`)}
    >
      {tableHead.map((item, index) => (
        <div key={index} className="px-1">
          {item}
        </div>
      ))}
      {edit && (
        <div className="space-x-2">
          <div>Action</div>
        </div>
      )}
    </div>
  );
};

export default TableHead;
