import ThemeSwitcher from "@/components/core/theme/theme-switcher";
import Title from "@/components/core/titles/Titles";
import { logout } from "@/features/authentication/authentication-slice";
import useFacility from "@/hooks/useFacility";
import useWindowWidth from "@/hooks/useWindow";
import { cookieManager } from "@/utilities/cookie-manager";
import { useState } from "react";
import { BsLock } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function AdminInfo() {
  // * Hooks
  const [adminBar, setAdminBar] = useState(false);
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
      <div className="relative">
        <img
          onClick={() => setAdminBar(!adminBar)}
          src="/public/assets/img/menu-avatar.png"
          className={`${w1230 ? "w-[50px]" : "w-[60px]"} cursor-pointer`}
          alt=""
        />
        {adminBar && (
          <div className="w-[300px] absolute top-full z-50 right-0 border dark:border-gray-600 dark:text-white shadow bg-bodyColor rounded-lg">
            <div className="text-center border-b dark:border-gray-600 p-5">
              <Title type="h3" title="System Administrator" />
              <p className="dark:text-gray-500">CarePro Admin</p>
            </div>
            <ul>
              <li className="border-b  dark:border-gray-600">
                <Link
                  to="/facility-settings"
                  className="px-5 py-3 flex items-center gap-3 hover:bg-lightBlueColor"
                >
                  <CiSettings size={28} className="w-[30px]" /> Facility Setting
                </Link>
              </li>
              <li className="border-b dark:border-gray-600">
                <Link
                  to="/user-accounts/edit/40"
                  className="px-5 py-3 flex items-center gap-3 hover:bg-lightBlueColor"
                >
                  <FiEdit size={20} className="w-[30px]" /> Edit Profile
                </Link>
              </li>
              <li className="border-b dark:border-gray-600">
                <Link
                  to="/change-password"
                  className="px-5 py-3 flex items-center gap-3 hover:bg-lightBlueColor"
                >
                  <BsLock size={22} className="w-[30px]" /> Change Password
                </Link>
              </li>
              <li>
                <button
                  className="px-5 py-3 flex items-center gap-3"
                  onClick={handleLogout}
                >
                  <IoExitOutline size={25} className="w-[30px]" /> Sign Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <ThemeSwitcher />
    </div>
  );
}

export default AdminInfo;
