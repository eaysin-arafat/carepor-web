import ThemeSwitcher from "@/components/core/theme/theme-switcher";
import Title from "@/components/core/titles/Titles";
import { logout } from "@/features/authentication/authentication-slice";
import useFacility from "@/hooks/useFacility";
import useWindowWidth from "@/hooks/useWindow";
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
    <div className="flex items-center gap-2">
      <p
        className={`border-r pr-2 text-primaryColor dark:text-white ${
          w1230 ? "font-[11px]" : "font-[15px]"
        }`}
      >
        {facility?.facilityName}
      </p>
      <Dropdown
        arrowIcon={false}
        inline
        className="min-w-[300px] w-[300px]"
        label={
          <img
            src="/public/assets/img/menu-avatar.png"
            className={`${w1230 ? "w-[50px]" : "w-[60px]"} cursor-pointer`}
            alt=""
          />
        }
      >
        <Dropdown.Header>
          <div className="text-center dark:border-gray-600">
            <Title type="h3" title="System Administrator" />
            <p className="dark:text-gray-500">CarePro Admin</p>
          </div>
        </Dropdown.Header>
        <Dropdown.Item className="border-b py-3">
          <Link to="/facility-settings" className="flex items-center gap-3 ">
            <CiSettings size={28} className="w-[30px]" /> Facility Setting
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="border-b py-3">
          <Link to="/user-accounts/edit/40" className="flex items-center gap-3">
            <FiEdit size={20} className="w-[30px]" /> Edit Profile
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="border-b py-3">
          <Link to="/change-password" className="flex items-center gap-3 ">
            <BsLock size={22} className="w-[30px]" /> Change Password
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="py-3">
          <button className="flex items-center gap-3" onClick={handleLogout}>
            <IoExitOutline size={25} className="w-[30px]" /> Sign Out
          </button>
        </Dropdown.Item>
      </Dropdown>
      <ThemeSwitcher />
    </div>
  );
}

export default AdminInfo;
