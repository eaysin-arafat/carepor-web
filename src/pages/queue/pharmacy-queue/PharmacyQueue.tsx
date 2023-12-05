import Badge from "@/components/core/badge/Badge";
import PharmacyQueueFilters from "@/components/queue/pharmacy-queue/PharmacyQueueFilters";
import useWindowWidth from "@/hooks/useWindow";

function PharmacyQueue() {
  const w1100 = useWindowWidth(1100);
  return (
    <div className={`${w1100 && "mt-12"}`}>
      <PharmacyQueueFilters />
      <div className="">
        <h1 className="text-2xl font-medium text-secondaryColor mb-4 flex items-center gap-3 mt-5">
          Prescribed
          <Badge type="circle" value={5} />
        </h1>
        Table Content
      </div>
    </div>
  );
}

export default PharmacyQueue;
