import Checkbox from "@/components/core/form-elements/Checkbox";
import { cn } from "@/utilities/cn";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

type Props = {
  isAction?: boolean;
  title: [
    {
      title: string;
      w: string;
    }
  ];
  className?: string;
  actionWidth?: string;
};

/**
 *
 * @Props isAction it's for action column
 * @Props title Table Title Array
 * @Props className Css Class Name
 * @Props actionWidth
 * @returns
 */
function TableHeader({ isAction, title, className, actionWidth }: Props) {
  return (
    <div
      className={cn("flex justify-between bg-white items-center", className)}
      // style={{ gridTemplateColumns: `repeat(${title.length + action}, 1fr)` }}
    >
      <p className="p-2">
        <Checkbox className="h-[15px] w-[15px]" />
      </p>
      {title.map((item, index) => (
        <p
          className="p-2 text-textColor text-xs font-bold flex items-center gap-1"
          key={index}
          style={{ width: item.w }}
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
        <p
          className={` ${actionWidth} p-2 text-textColor text-xs font-bold sticky right-0 z-50 `}
        >
          Action
        </p>
      )}
    </div>
  );
}

export default TableHeader;
