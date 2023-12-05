import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

type Props = {};

function TableHeader({}: Props) {
  return (
    <div className="grid grid-cols-6 bg-primaryColor items-center">
      <p className="p-2 text-white text-xs font-bold flex items-center gap-1">
        name
        <div className="">
          <button className="block">
            <IoMdArrowDropup size={20} />
          </button>
          <button className="block p-0 mt-[-10px]">
            <IoMdArrowDropdown size={20} />
          </button>
        </div>
      </p>
      <p className="p-2 text-white text-xs font-bold flex items-center gap-1">
        Age
        <div className="">
          <button className="block">
            <IoMdArrowDropup size={20} />
          </button>
          <button className="block p-0 mt-[-10px]">
            <IoMdArrowDropdown size={20} />
          </button>
        </div>
      </p>
      <p className="p-2 text-white text-xs font-bold flex items-center gap-1">
        Office
        <div className="">
          <button className="block">
            <IoMdArrowDropup size={20} />
          </button>
          <button className="block p-0 mt-[-10px]">
            <IoMdArrowDropdown size={20} />
          </button>
        </div>
      </p>
      <p className="p-2 text-white text-xs font-bold flex items-center gap-1">
        Start Date
        <div className="">
          <button className="block">
            <IoMdArrowDropup size={20} />
          </button>
          <button className="block p-0 mt-[-10px]">
            <IoMdArrowDropdown size={20} />
          </button>
        </div>
      </p>
      <p className="p-2 text-white text-xs font-bold flex items-center gap-1">
        Salary
        <div className="">
          <button className="block">
            <IoMdArrowDropup size={20} />
          </button>
          <button className="block p-0 mt-[-10px]">
            <IoMdArrowDropdown size={20} />
          </button>
        </div>
      </p>
      <p className="p-2 text-white text-xs font-bold w-[100px] sticky right-0 z-50 bg-primaryColor">
        Action
      </p>
    </div>
  );
}

export default TableHeader;
