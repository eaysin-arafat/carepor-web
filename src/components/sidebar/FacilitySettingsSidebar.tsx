import RootLayout from "@/layout/RootLayout";
import { cn } from "@/utilities/cn";
import { Accordion } from "flowbite-react";
import { StopCircle } from "react-feather";
import { FaUserCog } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import FacilitySettingsRoutes from "./routeArray/FacilitySettingsSidebarRoutes";

function FacilitySettingsSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <RootLayout>
      <div className="sidebar">
        <Accordion
          className="border-none rounded-[1px] overflow-auto"
          style={{ borderRadius: "0px" }}
        >
          {FacilitySettingsRoutes?.map((item, index) => (
            <Accordion.Panel key={index} className="border-none rounded-none">
              <Accordion.Title
                onClick={() => navigate(item.link)}
                className={cn(
                  "p-3 border-none outline-none !bg-whiteBgColor dark:bg-whiteBgColor rounded-none",
                  {
                    "!bg-activeColor !text-white": pathname === item?.link,
                  }
                )}
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-3">
                    {item.icon ? (
                      <>
                        {item.icon === "department" && (
                          <FcDepartment size={23} />
                        )}
                        {item.icon === "facility" && <FaUserCog size={23} />}
                      </>
                    ) : (
                      <StopCircle color="var(--secondary)" size={23} />
                    )}
                    {item.title}
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

export default FacilitySettingsSidebar;
