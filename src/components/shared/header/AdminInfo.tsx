import Title from "@/components/core/titles/Titles";
import useWindowWidth from "@/hooks/useWindow";
import { useState } from "react";
import { BsLock } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

function AdminInfo() {
  // * Hooks
  const [adminBar, setAdminBar] = useState(false);
  const w1230 = useWindowWidth(1230);

  return (
    <div className="flex items-center gap-2">
      <p
        className={`border-r pr-2 text-primaryColor ${
          w1230 ? "font-[11px]" : "font-[15px]"
        }`}
      >
        Bauleni Mini Hospital
      </p>
      <div className="relative">
        <img
          onClick={() => setAdminBar(!adminBar)}
          src="/public/assets/img/menu-avatar.png"
          className={`${w1230 ? "w-[50px]" : "w-[60px]"} cursor-pointer`}
          alt=""
        />
        {adminBar && (
          <div className="w-[300px] absolute top-full z-50 right-0 border shadow bg-white">
            <div className="text-center border-b p-5">
              <Title type="h3" title="System Administrator" />
              <p>CarePro Admin</p>
            </div>
            <ul>
              <li className="border-b">
                <Link
                  to="/facility-settings"
                  className="px-5 py-3 flex items-center gap-3"
                >
                  <CiSettings size={28} className="w-[30px]" /> Facility Setting
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/user-accounts/edit/40"
                  className="px-5 py-3 flex items-center gap-3"
                >
                  <FiEdit size={20} className="w-[30px]" /> Edit Profile
                </Link>
              </li>
              <li className="border-b">
                <Link
                  to="/change-password"
                  className="px-5 py-3 flex items-center gap-3"
                >
                  <BsLock size={22} className="w-[30px]" /> Change Password
                </Link>
              </li>
              <li>
                <Link to="/" className="px-5 py-3 flex items-center gap-3">
                  <IoExitOutline size={25} className="w-[30px]" /> Sign Out
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <button
        className={`${
          w1230 ? "h-[30px] w-[30px]" : "h-[40px] w-[40px]"
        } bg-black rounded-full flex justify-center items-center`}
      >
        <MdOutlineDarkMode color="#fff" size={w1230 ? 20 : 25} />
      </button>
    </div>
  );
}

export default AdminInfo;
