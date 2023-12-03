import useWindowWidth from "@/hooks/useWindow";
import { Dropdown } from "flowbite-react";
import { BiSearch } from "react-icons/bi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaChartPie, FaRegFilePdf } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { IoBagAddOutline, IoChevronDownOutline } from "react-icons/io5";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function HeaderList() {
  // * Hooks
  const w1230 = useWindowWidth(1230);
  const w1100 = useWindowWidth(1100);

  return (
    <ul className="flex items-center gap-5  dark:text-white">
      <li>
        <Link to="/" className="gap-1 flex items-center">
          <FaChartPie size={w1230 ? 15 : 19} />{" "}
          {!w1100 && (
            <p className={`mt-1 ${w1230 && "font-[11px]"}`}>Dashboard</p>
          )}
        </Link>
      </li>
      <li>
        <Dropdown
          arrowIcon={false}
          inline
          className="min-w-[300px] w-[300px]"
          label={
            <button className="gap-1 flex items-center">
              <LiaFileMedicalAltSolid size={19} />{" "}
              {!w1100 && (
                <>
                  <p className={w1230 && `font-[11px]`}>Services Queue</p>
                  <IoChevronDownOutline size={15} />
                </>
              )}
            </button>
          }
        >
          <Dropdown.Item
            as={Link}
            to="/pharmacy-queue"
            className="flex items-center gap-3 hover:bg-lightBlueColor px-4 py-3 text-[15px]"
          >
            <GiMedicines size={20} /> Pharmacy Queue
          </Dropdown.Item>
          <Dropdown.Item
            className="flex items-center gap-3 hover:bg-lightBlueColor px-4 py-3 text-[15px]"
            as={Link}
            to="/investigations-dashboard"
          >
            <BsFillHeartPulseFill size={20} /> Investigation Queue
          </Dropdown.Item>
          <Dropdown.Item
            className="flex items-center gap-3 hover:bg-lightBlueColor px-4 py-3 text-[15px]"
            as={Link}
            to="/service-queue"
          >
            <IoBagAddOutline size={20} /> Service Queue
          </Dropdown.Item>
        </Dropdown>
      </li>
      <li>
        <Dropdown
          arrowIcon={false}
          inline
          className="min-w-[300px] w-[300px]"
          label={
            <button className="gap-1 flex items-center">
              <FaRegFilePdf size={w1230 ? 15 : 19} />{" "}
              {!w1100 && (
                <>
                  <p className={`${w1230 && `font-[11px]`}  `}>Reports</p>
                  <IoChevronDownOutline size={15} />
                </>
              )}
            </button>
          }
        >
          <Dropdown.Item
            as={Link}
            to="/pharmacy-queue"
            className="flex items-center gap-3 hover:bg-lightBlueColor px-4 py-3 text-[15px]"
          >
            <GiMedicines size={20} /> Pharmacy Queue
          </Dropdown.Item>
          <Dropdown.Item
            className="flex items-center gap-3 hover:bg-lightBlueColor px-4 py-3 text-[15px]"
            as={Link}
            to="/investigations-dashboard"
          >
            <BsFillHeartPulseFill size={20} /> Investigation Queue
          </Dropdown.Item>
          <Dropdown.Item
            className="flex items-center gap-3 hover:bg-lightBlueColor px-4 py-3 text-[15px]"
            as={Link}
            to="/service-queue"
          >
            <IoBagAddOutline size={20} /> Service Queue
          </Dropdown.Item>
        </Dropdown>
      </li>
      <li>
        <Link
          title="Select Client"
          className={`block ${
            w1230 ? "px-5 py-2" : "px-6 py-3"
          } rounded-full flex items-center gap-1 text-[14px] bg-primaryColor text-whiteColor`}
          to="/client-search"
        >
          <BiSearch size={18} />
          Search CLient
          {/* {w1100 ? <BiSearch /> : "Find Patients"} */}
        </Link>
      </li>
    </ul>
  );
}

export default HeaderList;
