import Checkbox from "@/components/core/form-elements/Checkbox";
import { Edit, Eye, Trash } from "react-feather";

type Title = {
  title: string | number | JSX.Element;
  w: string;
};

type Props = {
  index: number;
  item: Title[];
  isAction?: boolean;
  length?: number;
  actionWidth?: string;
  btn?: {
    show?: boolean;
    edit?: boolean;
    delete?: boolean;
    btn?: string;
    btnOutline?: string;
    viewResult?: string;
  };
  btnHandler?: () => void;
  btnOutlineHandler?: () => void;
  viewResultHandler?: () => void;
};

/**
 *
 * @Props Index Number
 * @Props Item Item Array
 * @Props isAction it's for action column
 * @Props edit for edit button show
 * @Props delete for delete button
 * @Props show for show button
 * @props length = length for border radius
 * @props actionWidth
 * @returns
 */

function TableBody({
  item,
  index,
  isAction,
  btn,
  actionWidth,
  btnHandler,
  btnOutlineHandler,
  viewResultHandler,
}: Props) {
  return (
    <div
      key={index}
      className={`flex justify-between ${
        length === index + 1 && "rounded-b-lg"
      } items-center ${
        index % 2
          ? "bg-gray-100 dark:bg-whiteBgColor"
          : "bg-white dark:bg-slate-800"
      }`}
    >
      <p className="p-2">
        <Checkbox className="h-[15px] w-[15px]" />
      </p>
      {item.map((data, i) => (
        <p
          className="p-2 text-textColor dark:text-white text-xs text-justify"
          style={{ width: data.w }}
          key={i}
        >
          {data.title}
        </p>
      ))}
      {isAction && (
        <p
          className={`p-2 text-textColor  flex gap-1.5 text-xs sticky right-0 z-50 ${actionWidth}  ${
            index % 2
              ? "bg-gray-100 dark:bg-whiteBgColor"
              : "bg-white dark:bg-slate-800"
          }`}
        >
          {btn?.show && (
            <button className="border border-primaryColor hover:bg-primaryColor text-primaryColor hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm p-1 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primaryColor">
              <Eye size={15} />
            </button>
          )}

          {btn?.edit && (
            <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-sm text-sm p-1 text-center inline-flex items-center  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500">
              <Edit size={15} />
            </button>
          )}

          {btn?.delete && (
            <button className="border border-red-500 text-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-sm text-sm p-1 text-center inline-flex items-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-primaryColor">
              <Trash size={15} />
            </button>
          )}

          {btn?.btn && (
            <button
              onClick={btnHandler}
              className="main_btn pt-[5px] pb-[3px] px-3 text-[13px]"
            >
              {btn.btn}
            </button>
          )}

          {btn?.btnOutline && (
            <button
              onClick={btnOutlineHandler}
              className="border rounded-full hover:bg-primaryColor hover:text-white border-primaryColor text-primaryColor flex items-center justify-center  px-3 text-[13px] pt-[5px] pb-[3px]"
            >
              {btn.btnOutline}
            </button>
          )}

          {btn?.viewResult && (
            <button
              onClick={viewResultHandler}
              className="border rounded-full hover:bg-primaryColor hover:text-white border-primaryColor text-primaryColor flex items-center justify-center  px-3 text-[13px] pt-[5px] pb-[3px]"
            >
              {btn.viewResult}
            </button>
          )}
        </p>
      )}
    </div>
  );
}

export default TableBody;
