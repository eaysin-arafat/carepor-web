import InvestigationQueueFilters from "@/components/queue/investigation-queue/InvestigationQueueFilters";
import useWindowWidth from "@/hooks/useWindow";

function InvestigationsDashboard() {
  const w1100 = useWindowWidth(1100);
  return (
    <div className={`${w1100 && "mt-12"}`}>
      <InvestigationQueueFilters />
    </div>
  );
}

export default InvestigationsDashboard;
