import QueueTableLayout from "@/components/queue/QueueTableLayout";
import ServiceQueueFilters from "@/components/queue/service-queue/ServiceQueueFilters";
import useWindowWidth from "@/hooks/useWindow";

function ServiceQueue() {
  const w1100 = useWindowWidth(1100);
  return (
    <div className={`${w1100 && "mt-12"}`}>
      {/* <h1 className="text-3xl font-medium text-black dark:text-white mb-4">
        Service Queue
      </h1> */}
      <ServiceQueueFilters />

      <QueueTableLayout
        viewLink="/service-queue/triage"
        title="Triage"
        badgeValue={5}
        className=""
      >
        <> Table Content </>
      </QueueTableLayout>

      <QueueTableLayout
        viewLink="/service-queue/opd"
        title="OPD"
        badgeValue={5}
        className=""
      >
        <> Table Content </>
      </QueueTableLayout>

      <QueueTableLayout
        viewLink="/service-queue/burn-skin"
        title="Burn & Skin"
        badgeValue={5}
        className=""
      >
        <> Table Content </>
      </QueueTableLayout>

      {/* <Table>
        <TableHeader />

        <TableBody item={["hello", "hello2"]} />
      </Table> */}
    </div>
  );
}

export default ServiceQueue;
