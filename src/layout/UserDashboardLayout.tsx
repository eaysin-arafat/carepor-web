import Header from "@/components/shared/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { Outlet } from "react-router-dom";

function UserDashboardLayout() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <div className="h-[8vh] relative z-50 bg-white">
        <Header />
      </div>
      <div className="relative">
        {sidebar && (
          <button
            onClick={() => setSidebar(false)}
            className={`absolute bg-white h-[40px] w-[40px] top-0 left-0 border-r border-b rounded-br-lg flex justify-center items-center`}
          >
            <IoIosArrowForward className="cursor-pointer" size={20} />
          </button>
        )}
        <div className="flex justify-between ">
          <div className="relative">
            {!sidebar && (
              <button
                onClick={() => setSidebar(true)}
                className={`absolute bg-white h-[40px] w-[40px] rounded-br-lg top-0 left-full border-r border-b flex justify-center items-center`}
              >
                <MdArrowBackIos
                  size={20}
                  className="cursor-pointer relative left-1"
                />
              </button>
            )}
            <div
              className={` border-r bg-white h-[92vh] relative overflow-x-auto`}
              style={{
                transition: "0.5s",
                transform: sidebar && "translateX(-300px)",
                opacity: sidebar && "0",
                width: sidebar ? "0px" : "300px",
                minWidth: sidebar ? "0px" : "300px",
              }}
            >
              <Sidebar />
            </div>
          </div>
          <div className="w-full h-[92vh] overflow-x-auto bg-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardLayout;
