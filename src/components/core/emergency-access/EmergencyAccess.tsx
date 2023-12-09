import { Link } from "react-router-dom";

type Props = {};

function EmergencyAccess({}: Props) {
  return (
    <div className="pb-5 font-poppins">
      <div className=" h-6 text-base flex justify-center">
        <div className=" my-5">
          <div className=" font-medium text-gray-800 md:text-white dark:text-gray-300 ">
            Click here to access &nbsp;
            <Link to="#" className="font-bold underline">
              {" "}
              Help Desk{" "}
            </Link>{" "}
            &nbsp;
            or Call:
            <a
              href="tel:8080"
              className=" cursor-pointer px-2"
            >
              8080
            </a>
          </div>
        </div>
      </div>
      <p className="max-w-[380px] md:max-w-full mx-auto text-center mt-12 leading-7 text-black md:text-white dark:text-white text-[16px] font-normal ">
        Powered by the Institute for Health Measurement (IHM) Southern Africa
      </p>
    </div>
  );
}

export default EmergencyAccess;
