import { useState } from "react";
import { FaChartPie } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SidebarList from "./SidebarData";

function Sidebar() {
  const [search, setSearch] = useState("");
  const filteredData = SidebarList.filter((item) => {
    return search.toLocaleLowerCase() === ""
      ? item
      : item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div className="w-full">
      <div className="text-left p-3">
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded w-[100%] py-2 px-3 outline-none my-auto"
          placeholder="Search..."
        />
      </div>
      <ul>
        {filteredData.length <= 0 && (
          <div
            className="bg-red-100 mx-3 text-center border border-red-400 text-red-700 px-4 py-2 rounded relative"
            role="alert"
          >
            <span>Menu Not Found</span>
          </div>
        )}
        {filteredData.length > 0 &&
          filteredData.map((item, index) => (
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
