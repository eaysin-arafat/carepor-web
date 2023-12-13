import { ChevronRight } from "react-feather";

const PastRecord = () => {
  return (
    <div className="border my-2.5 p-2.5 text-sm bg-lightBlueColor rounded animate__animated animate__fadeInLeft">
      <div className="flex flex-col gap-1">
        <List title="Encounter Date" value="29-Nov-2023" />
        <List title="Chief Complaints" value="Test" />
        <List title="Facility" value="Bauleni Mini Hospital" />
        <List title="Clinician" value="MD ACHEM" />
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

type Props = {
  title: string;
  value: string;
};
const List = ({ title, value }: Props) => {
  return (
    <p className="flex gap-2 mb-2">
      <span className="inline-block font-semibold font-poppins w-[130px]">
        {title}
      </span>
      <span className="inline-block">:&nbsp; {value}</span>
    </p>
  );
};
