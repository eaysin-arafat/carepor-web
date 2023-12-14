import { Edit2 } from "react-feather";

const PastEncounters = ({ data }) => {
  return (
    <div className="flex w-full justify-between items-center bg-[#E8F4FF] text-[12px] py-3 px-5 border rounded">
      <div className="flex flex-col gap-1">
        <div className="flex gap-4">
          <p className="font-semibold">Encounter Date : </p>
          28-Nov-2023
          <p className="font-semibold">Facility :</p> Bauleni Mini Hospital
          <p className="font-semibold">Clinician : </p> John Wick
        </div>
        <div className="flex gap-2">
          <p className="font-semibold whitespace-nowrap">Chief complaints : </p>
          {data?.chiefComplaints}
          <p className="font-semibold whitespace-nowrap">
            History of Chief complaints :
          </p>
          {data?.historyOfChiefComplaint}
          <p className="font-semibold whitespace-nowrap">HIV Status : </p>
          {data?.hivStatus}
        </div>
      </div>
      <div>
        <button className="flex items-center gap-2">
          <span>
            <Edit2 size={14} />
          </span>
          <span>Edit</span>
        </button>
      </div>
    </div>
  );
};

export default PastEncounters;
