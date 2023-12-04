import Filters from "@/components/queue/Filters";
import QueueTableLayout from "@/components/queue/QueueTableLayout";

function ServiceQueue() {
  return (
    <>
      <Filters />

      <QueueTableLayout title="Triage" badgeValue={5} className="">
        <> Table Content </>
      </QueueTableLayout>
    </>
  );
}

export default ServiceQueue;
