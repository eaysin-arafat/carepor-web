import RootLayout from "@/layout/RootLayout";
import { cn } from "@/utilities/cn";
import { Accordion } from "flowbite-react";
import { FaChartPie } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import QueueRoutes from "./routeArray/QueueSidebarRoutes";

function QueueSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <RootLayout>
      <div className="sidebar">
        <Accordion
          className="border-none rounded-[1px] overflow-auto"
          style={{ borderRadius: "0px" }}
        >
          {QueueRoutes?.map((item, index) => (
            <Accordion.Panel
              key={index}
              className="border-none rounded-none bg-black"
            >
              <Accordion.Title
                onClick={() => navigate(item.link)}
                className={cn(
                  "p-3 border-none outline-none dark:bg-whiteBgColor !bg-whiteBgColor rounded-none",
                  {
                    "!bg-activeColor !text-white": pathname === item?.link,
                  }
                )}
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
                    <div className="inline-flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-primaryColor border-2 border-white rounded-full dark:border-gray-900">
                      9
                    </div>
                  </div>
                </div>
              </Accordion.Title>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </RootLayout>
  );
}

export default QueueSidebar;
