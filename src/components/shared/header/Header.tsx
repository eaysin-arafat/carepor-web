import AppLogo from "@/components/core/logo/logo";
import useWindowWidth from "@/hooks/useWindow";
import AdminInfo from "./AdminInfo";
import HeaderList from "./HeaderList";
import MobileHeader from "./MobileHeader";

type Props = {
  isSidebarOff?: boolean;
};

function Header({ isSidebarOff }: Props) {
  // * Hooks
  const w1230 = useWindowWidth(1230);
  const w1100 = useWindowWidth(1100);

  return (
    <>
      <div className="flex justify-between py-2 px-5 border-b dark:border-b-0 items-center w-full max-w-full bg-whiteColor dark:bg-whiteBgColor sticky top-0 z-[999] h-full">
        <div className="flex items-center gap-1">
          <AppLogo
            type="rounded"
            marginTop={w1230 ? `h-[50px] w-[50px]` : `h-[60px] w-[60px]`}
            className="h-[70%] w-[70%]"
          />
          {!w1100 && (
            <p className="text-xl">
              <span className="text-[var(--logoColor2)]">Smart</span>
              <span className="text-[var(--logoColor)]">Care</span>&nbsp;
              <b className="text-[var(--logoColor)]">PRO</b>
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
      {w1100 && <MobileHeader offSidebar={isSidebarOff ? false : true} />}
    </>
  );
}

export default Header;
