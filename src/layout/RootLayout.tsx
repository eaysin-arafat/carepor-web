import { RootState } from "@/app/store";
import Header from "@/components/shared/header/Header";
import { sidebarState } from "@/features/sidebar/sidebar";
import useWindowWidth from "@/hooks/useWindow";
import { cn } from "@/utilities/cn";
import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

interface RootLayoutProps {
  children?: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  const dispatch = useDispatch();
  const w1100 = useWindowWidth(1100);

  const sidebarVal = w1100 ? true : false;

  // * Redux
  const sidebar = useSelector((state: RootState) => state.sidebar.sidebar);

  // * Sidebar Update on Responsive
  useEffect(() => {
    dispatch(sidebarState({ sidebar: sidebarVal }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [w1100]);

  return (
    <div>
      <div
        className={cn("h-[8vh]  z-50 bg-whiteBgColor sticky top-0", {
          "h-[10vh]": w1100,
        })}
      >
        <Header />
      </div>
      <div className="relative">
        {sidebar && !w1100 && (
          <button
            onClick={() => dispatch(sidebarState({ sidebar: false }))}
            className={`absolute bg-whiteBgColor h-[40px] w-[40px] top-0 border-r-borderColor border-b-borderColor left-0 border-r border-b rounded-br-lg flex justify-center items-center`}
          >
            <IoIosArrowForward className="cursor-pointer" size={20} />
          </button>
        )}
        <div className="flex justify-between">
          <div className="relative">
            {!sidebar && !w1100 && (
              <button
                onClick={() => dispatch(sidebarState({ sidebar: true }))}
                className={`absolute bg-whiteBgColor h-[40px] w-[40px] rounded-br-lg top-0 left-full border-r border-b border-r-borderColor border-b-borderColor flex justify-center items-center`}
              >
                <MdArrowBackIos
                  size={20}
                  className="cursor-pointer relative left-1"
                />
              </button>
            )}
            <div
              className={`border-r bg-whiteBgColor h-[92vh] z-50 ${
                w1100 && "absolute bottom-0"
              } overflow-x-auto`}
              style={{
                transition: "0.5s",
                transform: sidebar && "translateX(-300px)",
                opacity: sidebar && "0",
                width: sidebar ? "0px" : "300px",
                minWidth: sidebar ? "0px" : "300px",
              }}
            >
              <div className="">{children}</div>
            </div>
          </div>

          <div
            className={cn(
              "w-full h-[92vh] overflow-x-auto bg-bodyColor block py-5 px-6",
              { "h-[90vh]": w1100 }
            )}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
