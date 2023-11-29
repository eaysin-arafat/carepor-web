import { useState } from "react";
import SidebarList from "./SidebarData";
import SidebarListItem from "./SidebarList";

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
            <SidebarListItem
              key={index}
              dropdown={item?.children ? true : false}
              item={item}
            />
          ))}
      </ul>
    </div>
  );
}

export default Sidebar;
