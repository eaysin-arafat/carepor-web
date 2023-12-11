import Diagnosis from "@/assets/icons/Diagnosis";
import RootLayout from "@/layout/RootLayout";
import { Accordion } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import FacilitySettingsRoutes from "./routeArray/FacilitySettingsSidebarRoutes";

function FacilitySettingsSidebar() {
  const navigate = useNavigate();
  return (
    <RootLayout>
      <div>
        <Accordion
          className="border-none rounded-[1px] overflow-auto"
          style={{ borderRadius: "0px" }}
        >
          {FacilitySettingsRoutes?.map((item, index) => (
            <Accordion.Panel key={index} className="border-none rounded-none">
              <Accordion.Title
                onClick={() => navigate(item.link)}
                className="p-3 border-none outline-none hover:bg-primaryColor active:text-white focus:bg-primaryColor hover:text-white active:bg-primaryColor rounded-none"
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
                      // <FaChartPie size={23} />
                      <Diagnosis color="var(--secondary)" size={23} />
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
