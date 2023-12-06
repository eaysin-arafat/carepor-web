import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

type Props = {
  isAction?: boolean;
  title: Array<string>;
};

/**
 *
 * @Props isAction it's for action column
 * @Props title Table Title Array
 * @returns
 */
function TableHeader({ isAction, title }: Props) {
  const action = (isAction && 1) || 0;
  return (
    <div
      className="grid bg-primaryColor items-center"
      style={{ gridTemplateColumns: `repeat(${title.length + action}, 1fr)` }}
    >
      {title.map((item, index) => (
        <p
          className="p-2 text-white text-xs font-bold flex items-center gap-1"
          key={index}
        >
          {item}
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
        <p className="p-2 text-white text-xs font-bold w-[100px] sticky right-0 z-50 bg-primaryColor">
          Action
        </p>
      )}
    </div>
  );
}

export default TableHeader;
