import AppLogo from "@/components/core/logo/logo";
import useWindowWidth from "@/hooks/useWindow";
import AdminInfo from "./AdminInfo";
import HeaderList from "./HeaderList";

function Header() {
  // * Hooks
  const w1230 = useWindowWidth(1230);
  const w1100 = useWindowWidth(1100);
  const w800 = useWindowWidth(800);

  return (
    <div className="flex justify-between py-2 px-5 border-b items-center w-full max-w-full h-[100%]">
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
      <div className="flex flex-col items-center">
        <HeaderList />
        {w800 && (
          <p
            className={`border mt-1 rounded px-2 text-primaryColor font-[11px]`}
          >
            Bauleni Mini Hospital
          </p>
        )}
      </div>

      <div>
        <AdminInfo />
      </div>
    </div>
  );
}

export default Header;
