const PastRecordContainers = ({ children }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className=" text-[#1E0E62] font-poppins text-xl font-medium">
        Past Encounters
      </h1>
      <div className="flex flex-col gap-4 max-h-60 overflow-y-auto pr-1">
        {children}
      </div>
    </div>
  );
};

export default PastRecordContainers;
