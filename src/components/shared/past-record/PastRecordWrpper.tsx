import { cn } from "@/utilities/cn";
import { Edit2 } from "react-feather";
import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  noHeading?: boolean;
  className?: string;
};
const PastRecordWrapper = ({ children, noHeading, className = " " }: Props) => {
  return (
    <div
      className={cn(
        "md:flex w-full justify-between items-center bg-lightBlueColor text-[12px] py-3 px-5 border rounded ",
        className
      )}
    >
      <div className="flex flex-col gap-1">
        {!noHeading && (
          <div className={cn("flex flex-wrap gap-2 xs:gap-4 mb-3 ")}>
            <p>
              <span className="font-semibold">Encounter Date : </span>
              28-Nov-2023
            </p>
            <p>
              <span className="font-semibold">Facility :</span> Bauleni Mini
              Hospital
            </p>
            <p>
              <span className="font-semibold">Clinician : </span> John Wick
            </p>
          </div>
        )}
        <div className="flex gap-5 flex-wrap">{children}</div>
      </div>
      <div className="flex gap-2 justify-end mt-2 sm:mt-0">
        <button
          type="button"
          className="flex items-center gap-1 p-1 text-dangerColor"
        >
          <span>
            <FaRegTrashAlt size={14} className="text-dangerColor" />
          </span>
        </button>
        <button type="button" className="flex items-center gap-1 ">
          <span>
            <Edit2 size={14} className=" text-primaryColor" />
          </span>
          <span className=" text-primaryColor">Edit</span>
        </button>
      </div>
    </div>
  );
};

export default PastRecordWrapper;
