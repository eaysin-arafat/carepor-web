import Checkbox from "@/components/core/form-elements/Checkbox";
import { cn } from "@/utilities/cn";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

type Props = {
  isAction?: boolean;
  title: Array<object | string>;
  className?: string;
};

/**
 *
 * @Props isAction it's for action column
 * @Props title Table Title Array
 * @Props className Css Class Name
 * @returns
 */
function TableHeader({ isAction, title, className }: Props) {
  return (
    <div
      className={cn("flex bg-primaryColor items-center", className)}
      // style={{ gridTemplateColumns: `repeat(${title.length + action}, 1fr)` }}
    >
      <p className="p-2">
        <Checkbox className="h-[15px] w-[15px]" />
      </p>
      {title.map((item, index) => (
        <p
          className="p-2 text-white text-xs font-bold flex items-center gap-1"
          key={index}
          style={{ width: item.w + "px" }}
        >
          {item.title}
          <div className="">
            <button className="block">
              <IoMdArrowDropup size={20} />
            </button>
            <button className="block p-0 mt-[-10px]">
              <IoMdArrowDropdown size={20} />
            </button>
          </div>
        </p>
      ))}

      {isAction && (
        <p className="p-2 text-white text-xs font-bold sticky right-0 z-50 bg-primaryColor">
          Action
        </p>
      )}
    </div>
  );
}

export default TableHeader;
