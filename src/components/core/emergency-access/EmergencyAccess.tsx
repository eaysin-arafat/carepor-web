import useWindowWidth from "@/hooks/useWindow";
import { cn } from "@/utilities/cn";
import { Link } from "react-router-dom";

function EmergencyAccess() {
  const w768 = useWindowWidth(768);
  const w1400 = useWindowWidth(1400);

  return (
    <div className="pb-5 font-poppins">
      <div className="text-base flex justify-center">
        <div
          className={cn(" text-center my-5", { "mb-0": w1400, "my-0": w768 })}
        >
          <div className=" font-[300] text-textColor text-sm md:text-white ">
            Click here to access &nbsp;
            <Link to="#" className="font-[500] underline">
              Help Desk{" "}
            </Link>{" "}
            &nbsp; or Call:
            <a href="tel:8080" className="cursor-pointer px-2">
              8080
            </a>
          </div>
        </div>
      </div>
      <p
        className={cn(
          "max-w-[380px] md:max-w-full mx-auto text-center mt-16 xxs:mt-12 leading-7 text-white text-[16px] font-[300]",
          { "!mt-5": w1400, "hidden text-black": w768 }
        )}
      >
        Powered by the Institute for Health Measurement (IHM) Southern Africa
      </p>
    </div>
  );
}

export default EmergencyAccess;
