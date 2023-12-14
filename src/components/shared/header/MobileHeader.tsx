import { RootState } from "@/app/store";
import { sidebarState } from "@/features/sidebar/sidebar";
import useWindowWidth from "@/hooks/useWindow";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import HeaderList from "./HeaderList";

type Props = {
  offSidebar?: boolean;
};
function MobileHeader({ offSidebar }: Props) {
  const w1100 = useWindowWidth(1100);
  const dispatch = useDispatch();

  // * Redux
  const sidebar = useSelector((state: RootState) => state.sidebar.sidebar);

  return (
    <div className="flex justify-between px-5 bg-whiteBgColor border-b py-2 items-center">
      <div>
        <HeaderList />
      </div>
      {offSidebar && (
        <div>
          {w1100 && (
            <button
              className="flex items-center"
              onClick={() => dispatch(sidebarState({ sidebar: !sidebar }))}
            >
              {sidebar ? (
                <FaBars color="#000" size={25} />
              ) : (
                <FaTimes color="#000" size={25} />
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default MobileHeader;
