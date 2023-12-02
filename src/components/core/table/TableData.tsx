import { cn } from "@/utilities/cn";

type Props = {
  tableData: any;
  edit?: boolean;
  deleteData?: boolean;
  preview?: boolean;
  gridCol?: number;
  result?: string;
};

const TableData = ({
  tableData = [],
  edit,
  gridCol,
  preview,
  deleteData,
  result,
}: Props) => {
  const length = tableData.length;
  const lengthWithAction = tableData.length + 1;
  const totalCol = edit ? lengthWithAction : length;
  const grid = ` grid-cols-${gridCol ? gridCol : totalCol} `;

  return (
    <div className="rounded-b-lg">
      <div
        className={cn(
          `bg-gray-200 tableDataLast bg-whiteColor rounded-b-lg p-3 border-t grid ${grid}`
        )}
      >
        {tableData.map((item: string, index: number) => (
          <p
            key={index}
            className={`px-1 `}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
        {edit && (
          <div className="space-x-2 text-end me-4">
            <button onClick={() => {}}>Edit</button>
          </div>
        )}
        {deleteData && (
          <div className="space-x-2 text-end me-4">
            <button onClick={() => {}}>Delete</button>
          </div>
        )}
        {preview && (
          <div className="space-x-2 text-end me-4 ">
            <button
              onClick={() => {}}
              className="bg-lightBlueColor px-3 rounded-full"
            >
              Preview
            </button>
          </div>
        )}
        {result && (
          <div className="space-x-2 text-end me-4 ">
            <div className="flex justify-end  items-center">
              <span className="flex items-center w-2 h-2 me-3 bg-primaryColor rounded-full"></span>{" "}
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableData;
