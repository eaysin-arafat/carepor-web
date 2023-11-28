import Button from "@/components/core/buttons/Button";
import AppLogo from "@/components/core/logo/logo";
import Title from "@/components/core/titles/Titles";
import { IoChevronDownOutline } from "react-icons/io5";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between py-2 px-5 border-b items-center">
      <div className="flex items-center gap-2">
        <AppLogo
          type="rounded"
          marginTop="h-[70px] w-[70px]"
          className="h-[40px] w-[40px]"
        />
        <Title type="h3" title="SmartCare PRO" />
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li>
            <Link to="/" className="gap-1 flex items-center">
              <MdDashboard size={19} /> <p className="mt-1">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/" className="gap-1 flex items-center">
              <LiaFileMedicalAltSolid size={19} /> <p>Services Queue</p>
              <IoChevronDownOutline size={15} />
            </Link>
          </li>
          <li>
            <Button
              title="Select Client"
              className="block px-10 h-[45px] text-[10px] w-[170px]"
              type="link"
              link="/"
            />
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <p className="border-r pr-3 text-primaryColor font-medium">
          Bauleni Mini Hospital
        </p>
        <img
          src="/public/assets/img/menu-avatar.png"
          className="h-[50px] cursor-pointer"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
