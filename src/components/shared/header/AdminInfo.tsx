import ThemeSwitcher from "@/components/core/theme/theme-switcher";
import Title from "@/components/core/titles/Titles";
import { logout } from "@/features/authentication/authentication-slice";
import useFacility from "@/hooks/useFacility";
import useWindowWidth from "@/hooks/useWindow";
import { URLUserAccountEdit } from "@/routers/user-accounts";
import { cookieManager } from "@/utilities/cookie-manager";
import { Dropdown } from "flowbite-react";
import { BsLock } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function AdminInfo() {
  // * Hooks
  const w1230 = useWindowWidth(1230);
  const dispatch = useDispatch();

  const { facility } = useFacility();

  const handleLogout = () => {
    cookieManager.removeCookie("carepro_token");
    dispatch(logout());
  };

  return (
    <div className="flex items-center dropdown gap-2">
      <p
        className={`border-r pr-2 text-textColor font-medium ${
          w1230 ? "font-[11px]" : "font-[15px]"
        }`}
      >
        {facility?.facilityName}
      </p>
      <Dropdown
        arrowIcon={false}
        inline
        className="min-w-[300px] w-[300px] z-50 bg-whiteBgColor"
        label={
          <img
            src="https://i.ibb.co/thBM8t0/avatar.jpg"
            className={`${
              w1230 ? "w-[50px]" : "w-[50px]"
            } rounded-full cursor-pointer`}
            alt=""
          />
        }
      >
        <Dropdown.Header>
          <div className="text-center border-textColor">
            <Title
              type="h3"
              className="text-textColor"
              title="System Administrator"
            />
            <p className="text-textColor">CarePro Admin</p>
          </div>
        </Dropdown.Header>
        <Dropdown.Item
          className="border-b py-3 text-textColor"
          as={Link}
          to="/facility-settings"
        >
          <CiSettings size={28} className="w-[30px]" /> Facility Setting
        </Dropdown.Item>
        <Dropdown.Item
          className="border-b py-3 text-textColor"
          as={Link}
          to={URLUserAccountEdit()}
        >
          <FiEdit size={20} className="w-[30px]" /> Edit Profile
        </Dropdown.Item>
        <Dropdown.Item
          className="border-b py-3 text-textColor"
          as={Link}
          to="/change-password"
        >
          <BsLock size={22} className="w-[30px]" /> Change Password
        </Dropdown.Item>
        <Dropdown.Item className="py-3 text-textColor" onClick={handleLogout}>
          <IoExitOutline size={25} className="w-[30px]" /> Sign Out
        </Dropdown.Item>
      </Dropdown>
      <ThemeSwitcher />
    </div>
  );
}

export default AdminInfo;
