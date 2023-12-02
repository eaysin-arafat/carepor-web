import AppLogo from "@/components/core/logo/logo";
import useWindowWidth from "@/hooks/useWindow";
import AdminInfo from "./AdminInfo";
import HeaderList from "./HeaderList";
import MobileHeader from "./MobileHeader";

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
            <p>
              <span className="text-[#15ac12]">Smart</span>
              <span className="text-primaryColor">Care</span>{" "}
              <b className="text-primaryColor">PRO</b>
            </p>
          )}
        </div>
        {!w1100 && (
          <div>
            <HeaderList />
          </div>
        )}

        <div>
          <AdminInfo />
        </div>
      </div>
      {w1100 && <MobileHeader />}
    </>
  );
}

export default Header;
