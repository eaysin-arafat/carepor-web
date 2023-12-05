import { Edit, Eye, Trash } from "react-feather";

type Props = {
  index: number;
  item: Array<string>;
  isAction?: boolean;
  edit?: boolean;
  delete?: boolean;
  show?: boolean;
};

/**
 *
 * @Props Index Number
 * @Props Item Item Array
 * @Props isAction it's for action column
 * @Props edit for edit button show
 * @Props delete for delete button
 * @Props show for show button
 * @returns
 */

function TableBody({ item, index, isAction, edit, delete: dd, show }: Props) {
  const action = (isAction && 1) || 0;
  return (
    <div
      key={index}
      className={`grid  items-start ${index % 2 ? "bg-gray-200" : "bg-white"}`}
      style={{
        gridTemplateColumns: `repeat(${item.length + action}, 1fr)`,
      }}
    >
      {item.map((data, i) => (
        <p className="p-2 text-textColor text-xs text-justify" key={i}>
          {data}
        </p>
      ))}
      {isAction && (
        <p
          className={`p-2 text-textColor flex gap-1.5 text-xs sticky w-[100px] right-0 z-50 ${
            index % 2 ? "bg-gray-200" : "bg-white"
          }`}
        >
          {show && (
            <button className="border border-primaryColor hover:bg-primaryColor text-primaryColor hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm p-1 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primaryColor">
              <Eye size={15} />
            </button>
          )}

          {edit && (
            <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-sm p-1 text-center inline-flex items-center  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500">
              <Edit size={15} />
            </button>
          )}

          {dd && (
            <button className="border border-red-500 text-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-sm text-sm p-1 text-center inline-flex items-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-primaryColor">
              <Trash size={15} />
            </button>
          )}
        </p>
      )}
    </div>
  );
}

export default TableBody;
