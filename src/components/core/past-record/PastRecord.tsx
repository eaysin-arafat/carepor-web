import { ChevronRight } from "react-feather";

const PastRecord = () => {
  return (
    <div className="border my-2.5 p-2.5 text-sm rounded animate__animated animate__fadeInLeft">
      <div className="flex flex-col gap-1">
        <p className="flex gap-2">
          <span className="inline-block font-semibold font-poppins">
            Encounter Date :
          </span>
          <span className="inline-block">29-Nov-2023</span>
        </p>
        <p className="flex gap-2">
          <span className="inline-block font-semibold font-poppins">
            Chief Complaints :
          </span>{" "}
          <span className="inline-block">heart is not working well</span>
        </p>
        <p className="flex gap-2">
          <span className="inline-block font-semibold font-poppins">
            Facility :
          </span>{" "}
          <span className="inline-block">Bauleni Mini Hospital</span>
        </p>
        <p className="flex gap-2">
          <span className="inline-block font-semibold font-poppins">
            Clinician :
          </span>
          <span className="inline-block">John Wick</span>
        </p>
      </div>
      <div className="flex w-full justify-end mt-4">
        <button className="flex gap-2 items-center ">
          <span className="inline-block text-[#1890FF] text-xs">
            View Full Encounter
          </span>
          <span className="inline-block">
            <ChevronRight size={14} color="#1890FF" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PastRecord;
