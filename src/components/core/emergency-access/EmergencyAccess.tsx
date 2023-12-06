import { Link } from "react-router-dom";

type Props = {};

function EmergencyAccess({}: Props) {
  return (
    <div className="pb-5">
      <div className=" h-6 text-base flex justify-center">
        <div className=" my-5">
          <div className=" font-medium text-dodgerblue dark:text-white/60">
            <Link to="#" className="text-black dark:text-white" > Help Desk </Link> &nbsp;
            <a href="tel:8080" className="  text-primaryColor md:text-white  cursor-pointer border-s px-2">
              Call: 8080
            </a>
          </div> 
        </div>
      </div>
      <p className="max-w-[380px] md:max-w-full mx-auto text-center mt-12 leading-7 text-black md:text-white dark:text-white text-[16px] font-normal ">
              Powered by the institute of health measurement Southerner Africs
            </p>
    </div>
  );
}

export default EmergencyAccess;
