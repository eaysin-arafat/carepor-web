import AppLogo from "@/components/core/logo/logo";
import ThemeSwitcher from "@/components/core/theme/theme-switcher";
import useWindowWidth from "@/hooks/useWindow";
import { URLUserAccountCreate, URLUserLogin } from "@/routers/public";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function Header() {
  // * Hooks
  const w1230 = useWindowWidth(1230);
  const w1100 = useWindowWidth(1100);

  return (
    <>
      <div className="flex justify-between py-2 px-5 border-b dark:border-b-0 items-center w-full max-w-full h-[100%] bg-whiteColor dark:bg-whiteBgColor sticky top-0 z-[999]">
        <div className="flex items-center gap-1">
          <AppLogo
            type="rounded"
            marginTop={w1230 ? `h-[50px] w-[50px]` : `h-[60px] w-[60px]`}
            className="h-[70%] w-[70%]"
          />
          {!w1100 && (
            <p className="text-xl">
              <span className="text-[#15ac12]">Smart</span>
              <span className="text-primaryColor">Care</span>{" "}
              <b className="text-primaryColor">PRO</b>
            </p>
          )}
        </div>

        <div className="flex gap-2 xs:gap-3 items-center">
          <Link
            to={URLUserLogin()}
            className="transparent_btn px-7 xs:px-9 py-[7px] xs:py-[10px] border-primaryColor text-primaryColor bg-whiteBgColor hover:bg-primaryColor hover:text-white transition-all ease-out duration-300 dark:text-primaryColor dark:hover:text-white text-sm"
          >
            Sign In
          </Link>
          <Link
            to={URLUserAccountCreate()}
            className="main_btn px-7 xs:px-9 py-[7px] xs:py-[10px] border-primaryColor border-2 transition-all ease-out duration-300  text-sm inline-flex"
          >
            Sign Up
          </Link>
          <div className="ms-2 xs:mx-5">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
