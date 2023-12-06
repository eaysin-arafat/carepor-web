import RootLayout from "@/layout/RootLayout";
import { Accordion } from "flowbite-react";
import { useState } from "react";
import { FaChartPie } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import DropdownList from "./DropdownList";
import css from "./Styles.module.css";
import ModuleSidebarRoutes from "./routeArray/ModuleSidebarRoutes";

function ModuleSidebar() {
  const [search, setSearch] = useState("");
  const filteredData = ModuleSidebarRoutes.filter((item) => {
    return search.toLocaleLowerCase() === ""
      ? item
      : item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });
  return (
    <RootLayout>
      <div className="w-full">
        <div className="text-left p-3">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded w-[100%] py-2 px-3 outline-none my-auto bg-whiteBgColor"
            placeholder="Search..."
          />
        </div>
        <div className={css.sidebar}>
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
              {filteredData?.map((item, index) => (
                <Accordion.Panel
                  key={index}
                  className="border-none rounded-none bg-black"
                >
                  {item?.children ? (
                    <Accordion.Title className="p-3 border-none outline-none hover:bg-primaryColor hover:text-white bg-whiteBgColor rounded-none">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3">
                          {item.icon ? (
                            <img
                              src={item.icon}
                              alt=""
                              className="h-[23px] w-[23px]"
                            />
                          ) : (
                            <FaChartPie size={23} />
                          )}
                          {item.title}
                        </div>
                        {item.children && <IoChevronDown />}
                      </div>
                    </Accordion.Title>
                  ) : (
                    <Accordion.Title
                      onClick={() => !item.children && alert("okay")}
                      className="p-3 border-none outline-none rounded-none"
                    >
                      <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3">
                          {item.icon ? (
                            <img
                              src={item.icon}
                              alt=""
                              className=" w-[23px] h-[23px]"
                            />
                          ) : (
                            <FaChartPie size={23} />
                          )}
                          {item.title}
                        </div>
                        {item.children && <IoChevronDown />}
                      </div>
                    </Accordion.Title>
                  )}
                  {item?.children && (
                    <Accordion.Content className="p-0 pl-5">
                      <div>
                        <DropdownList item={item?.children} />
                      </div>
                    </Accordion.Content>
                  )}
                </Accordion.Panel>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </RootLayout>
  );
}

export default ModuleSidebar;
