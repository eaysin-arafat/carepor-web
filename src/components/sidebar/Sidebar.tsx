import { FaChartPie } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SidebarList from "./SidebarData";

function Sidebar() {
  return (
    <div className="w-full">
      <div className="text-left p-3">
        <input
          type="search"
          className="border rounded w-[100%] py-2 px-3 outline-none my-auto"
          placeholder="Search..."
        />
      </div>
      <ul>
        {SidebarList.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className="flex items-center gap-2 p-3 hover:bg-primaryColor hover:text-white"
            >
              <FaChartPie size={20} /> {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
