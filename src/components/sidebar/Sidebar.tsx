import { Accordion } from "flowbite-react";
import { useState } from "react";
import SidebarList from "./SidebarData";

function Sidebar() {
  const [search, setSearch] = useState("");
  const filteredData = SidebarList.filter((item) => {
    return search.toLocaleLowerCase() === ""
      ? item
      : item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  console.log({ filteredData });

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
      <div>
        {filteredData?.length <= 0 && (
          <div
            className="bg-red-100 mx-3 text-center border border-red-400 text-red-700 px-4 py-2 rounded relative"
            role="alert"
          >
            <span>Menu Not Found</span>
          </div>
        )}
        {filteredData?.length > 0 && (
          <Accordion
            className="border-none rounded-[1px] overflow-auto"
            style={{ borderRadius: "0px" }}
          >
            {filteredData.map((item, index) => (
              <Accordion.Panel key={index} className="border-none rounded-none">
                <Accordion.Title className="p-3 border-none outline-none hover:bg-primaryColor focus:bg-primaryColor hover:text-white active:bg-primaryColor rounded-none">
                  {item.title}
                </Accordion.Title>
              </Accordion.Panel>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
