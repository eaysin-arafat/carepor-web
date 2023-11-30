import { cn } from "@/utilities/cn";

type Props = {
  tableData: any;
  edit?: boolean;
  gridCol?: number;
};

const TableData = ({ tableData = [], edit , gridCol }: Props) => {
  const length = tableData.length
  const lengthWithAction = tableData.length + 1
  const totalCol = edit ? lengthWithAction : length
  const grid = ` grid-cols-${gridCol ? gridCol : totalCol} `

  return (
    <div className="rounded-b-lg">
    <div
      className={cn(`bg-gray-200 tableDataLast bg-whiteColor p-3 grid ${grid}`,)}
    >
      {tableData.map((item, index) => (
        <div key={index} className={`px-1`}>
          {item}
        </div>
      ))}
      {edit && (
        <div className="space-x-2">
          <button onClick={() => {}}>Edit</button>
          <button onClick={() => {}}>Delete</button>
        </div>
      )}
    </div></div>
  );
};

export default TableData;
