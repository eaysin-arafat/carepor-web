import { FaChartPie } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import css from "./Styles.module.css";

function SidebarListItem({ item, dropdown }) {
  console.log(dropdown);
  if (dropdown) {
    return (
      <li>
        <div className="join join-vertical w-full">
          <button
            className={`flex items-center w-full justify-between gap-2 p-3 hover:bg-primaryColor hover:text-white ${css.item}`}
          >
            <div className="flex justify-between items-center gap-2">
              {item.icon ? (
                <img src={item.icon} alt="" className="h-[30px] w-[30px]" />
              ) : (
                <FaChartPie size={20} />
              )}
              {item.title}
            </div>
            {dropdown && <IoIosArrowDown />}
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <Link
          to={item.link}
          className={`flex items-center justify-between gap-2 p-3 hover:bg-primaryColor hover:text-white ${css.item}`}
        >
          <div className="flex justify-between items-center gap-2">
            {item.icon ? (
              <img
                src={item.icon}
                alt=""
                // style={{ filter: "invert(100%)" }}
                className="h-[30px] w-[30px]"
              />
            ) : (
              <FaChartPie size={20} />
            )}
            {item.title}
          </div>
          {dropdown && <IoIosArrowDown />}
        </Link>
      </li>
    );
  }
}

export default SidebarListItem;
