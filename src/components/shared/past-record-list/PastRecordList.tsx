import PastRecord from "@/components/core/past-record/PastRecord";

const PastRecordList = () => {
  return (
    <div className="col-span-3">
      <div className="box_shadow_2">
        <h1 className="text-center text-[#03045E] font-semibold font-poppins py-2.5 border-b border-b-[#1890FF80]">
          Past Encounters
        </h1>
        <div className="px-5 py-2">
          <PastRecord />
          <PastRecord />
          <PastRecord />
          <PastRecord />
          <PastRecord />
        </div>
      </div>
    </div>
  );
};

export default PastRecordList;
