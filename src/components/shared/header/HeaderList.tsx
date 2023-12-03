import useWindowWidth from "@/hooks/useWindow";
import { useState } from "react";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaChartPie, FaRegFilePdf } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { IoBagAddOutline, IoChevronDownOutline } from "react-icons/io5";
import { LiaFileMedicalAltSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function HeaderList() {
  // * Hooks
  const [queue, setQueue] = useState(false);
  const [report, setReport] = useState(false);
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
        <div className="relative">
          <button
            className="gap-1 flex items-center"
            onClick={() => setQueue(!queue)}
          >
            <LiaFileMedicalAltSolid size={19} />{" "}
            {!w1100 && (
              <>
                <p className={w1230 && `font-[11px]`}>Services Queue</p>
                <IoChevronDownOutline size={15} />
              </>
            )}
          </button>
          {queue && (
            <div className="w-[250px] bg-bodyColor absolute top-full border dark:border-gray-600 shadow z-50 rounded-lg">
              <ul>
                <li>
                  <Link
                    to="/pharmacy-queue"
                    className="flex items-center gap-3 hover:bg-lightBlueColor px-4 py-3 text-[15px]"
                  >
                    <GiMedicines size={20} /> Pharmacy Queue
                  </Link>
                </li>
                <li className="border-y dark:border-gray-600">
                  <Link
                    to="/investigations-dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-[15px]  hover:bg-lightBlueColor"
                  >
                    <BsFillHeartPulseFill size={20} /> Investigation Queue
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-queue"
                    className="flex items-center gap-3 px-4 py-3 text-[15px] hover:bg-lightBlueColor"
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
        <div className="relative">
          <button
            className="gap-1 flex items-center"
            onClick={() => setReport(!report)}
          >
            <FaRegFilePdf size={w1230 ? 15 : 19} />{" "}
            {!w1100 && (
              <>
                <p className={`${w1230 && `font-[11px]`}  `}>Reports</p>
                <IoChevronDownOutline size={15} />
              </>
            )}
          </button>
          {report && (
            <div className="w-[250px] bg-bodyColor absolute top-full border dark:border-gray-600 shadow z-50 rounded-lg">
              <ul>
                <li>
                  <Link
                    to="/pharmacy-queue"
                    className="flex items-center gap-3 hover:bg-lightBlueColor px-4 py-3 text-[15px]"
                  >
                    <GiMedicines size={20} /> Pharmacy Queue
                  </Link>
                </li>
                <li className="border-y dark:border-gray-600">
                  <Link
                    to="/investigations-dashboard"
                    className="flex items-center gap-3 px-4 py-3 text-[15px]  hover:bg-lightBlueColor"
                  >
                    <BsFillHeartPulseFill size={20} /> Investigation Queue
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service-queue"
                    className="flex items-center gap-3 px-4 py-3 text-[15px] hover:bg-lightBlueColor"
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
          className={`block ${
            w1230 ? "px-5 py-2" : "px-10 py-3"
          } rounded-full text-[14px] bg-primaryColor text-whiteColor`}
          to="/client-search"
        >
          Find Patients
          {/* {w1100 ? <BiSearch /> : "Find Patients"} */}
        </Link>
      </li>
    </ul>
  );
}

export default HeaderList;
