import AppLogo from "@/components/core/logo/logo";
import ThemeSwitcher from "@/components/core/theme/theme-switcher";
import Title from "@/components/core/titles/Titles";
import { useState } from "react";
import { BsFillHeartPulseFill, BsLock } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaChartPie } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { GiMedicines } from "react-icons/gi";
import {
  IoBagAddOutline,
  IoChevronDownOutline,
  IoExitOutline,
} from "react-icons/io5";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Header() {
  const [queue, setQueue] = useState(false);
  const [adminBar, setAdminBar] = useState(false);
  return (
    <div className="flex justify-between py-2 px-5 border-b items-center h-[100%] bg-whiteColor sticky top-0 z-[999]">
      <div className="flex items-center gap-2">
        <AppLogo
          type="rounded"
          marginTop="h-[60px] w-[60px]"
          className="h-[40px] w-[40px]"
        />
        <Title type="h3" title="SmartCare PRO" />
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li>
            <Link to="/" className="gap-1 flex items-center">
              <FaChartPie size={19} /> <p className="mt-1">Dashboard</p>
            </Link>
          </li>
          <li>
            <div className="relative">
              <button
                className="gap-1 flex items-center"
                onClick={() => setQueue(!queue)}
              >
                <LiaFileMedicalAltSolid size={19} /> <p>Services Queue</p>
                <IoChevronDownOutline size={15} />
              </button>
              {queue && (
                <div className="w-[250px] bg-white absolute top-full border shadow z-50">
                  <ul>
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-3 hover:bg-blue-100 px-4 py-3 text-[15px]"
                      >
                        <GiMedicines size={20} /> Pharmacy Queue
                      </Link>
                    </li>
                    <li className="border-t border-b">
                      <Link
                        to="/"
                        className="flex items-center gap-3 px-4 py-3 text-[15px]  hover:bg-blue-100"
                      >
                        <BsFillHeartPulseFill size={20} /> Investigation Queue
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="flex items-center gap-3 px-4 py-3 text-[15px] hover:bg-blue-100"
                      >
                        <IoBagAddOutline size={20} /> Service Queue
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
          <li>
            <Link
              title="Select Client"
              className=" block px-10 py-3 rounded-full text-[14px] bg-primaryColor text-whiteColor"
              to="/client-search"
            >
              Find Patients
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <p className="border-r pr-3 text-primaryColor font-medium">
          Bauleni Mini Hospital
        </p>
        <div className="relative">
          <img
            onClick={() => setAdminBar(!adminBar)}
            src="/public/assets/img/menu-avatar.png"
            className="w-[60px] cursor-pointer"
            alt=""
          />
          {adminBar && (
            <div className="w-[300px] absolute top-full right-0 border shadow bg-white">
              <div className="text-center border-b p-5">
                <Title type="h3" title="System Administrator" />
                <p>CarePro Admin</p>
              </div>
              <ul>
                <li className="border-b">
                  <Link to="/" className="px-5 py-3 flex items-center gap-3">
                    <CiSettings size={28} className="w-[30px]" /> Facility
                    Setting
                  </Link>
                </li>
                <li className="border-b">
                  <Link to="/" className="px-5 py-3 flex items-center gap-3">
                    <FiEdit size={20} className="w-[30px]" /> Edit Profile
                  </Link>
                </li>
                <li className="border-b">
                  <Link to="/" className="px-5 py-3 flex items-center gap-3">
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
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Header;
