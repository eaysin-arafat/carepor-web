import Button from "@/components/core/buttons/Button";
import AppLogo from "@/components/core/logo/logo";
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
        <h2>SmartCare PRO</h2>
      </div>
      <div>
        <ul className="flex items-center gap-5">
          <li>
            <Link to="/" className="gap-1 flex items-center">
              <MdDashboard size={19} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/" className="gap-1 flex items-center">
              <LiaFileMedicalAltSolid size={19} /> Services Queue
            </Link>
          </li>
          <li>
            <Button title="Search Client" type="link" link="/" />
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <p className="border-r pr-5">Bauleni Mini Hospital</p>
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
