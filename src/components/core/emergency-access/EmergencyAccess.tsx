import { Link } from "react-router-dom";

function EmergencyAccess() {
  return (
    <div className="pb-5 font-poppins">
      <div className=" h-6 text-base flex justify-center">
        <div className=" text-center my-5">
          <div className=" font-[300] text-textColor md:text-white ">
            Click here to access &nbsp;
            <Link to="#" className="font-[500] underline">
              Help Desk{" "}
            </Link>{" "}
            &nbsp; or Call:
            <a href="tel:8080" className=" cursor-pointer px-2">
              8080
            </a>
          </div>
        </div>
      </div>
      <p className="max-w-[380px] md:max-w-full mx-auto text-center mt-16 xxs:mt-12 leading-7 text-white  text-[16px] font-[300] ">
        Powered by the Institute for Health Measurement (IHM) Southern Africa
      </p>
    </div>
  );
}

export default EmergencyAccess;
