import QueueTableLayout from "@/components/queue/QueueTableLayout";
import ServiceQueueFilters from "@/components/queue/service-queue/ServiceQueueFilters";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import useWindowWidth from "@/hooks/useWindow";

function ServiceQueue() {
  const w1100 = useWindowWidth(1100);

  const Test2 = ({ aa }: { aa: string }) => {
    return (
      <div className="flex gap-1 items-center">
        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
        <p>{aa}</p>
      </div>
    );
  };
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
        className="w-full"
      >
        <>
          <Table>
            <TableHeader
              className="bg-tableHeadColor text-textColor"
              isAction
              actionWidth="min-w-[100px]"
              title={[
                {
                  title: "Patient Name",
                  w: "20%",
                },
                {
                  title: "Priority",
                  w: "20%",
                },
                {
                  title: "Order Date",
                  w: "20%",
                },
                {
                  title: "Test",
                  w: "20%",
                },
                {
                  title: "Order Number",
                  w: "20%",
                },
                {
                  title: "Sample Date Collection",
                  w: "20%",
                },
              ]}
            />
            {data.map((item, index) => (
              <TableBody
                index={index}
                isAction
                actionWidth="min-w-[100px]"
                btn={{
                  viewResult: "Select",
                }}
                item={[
                  { title: item.name, w: "20%" },
                  { title: <Test2 aa={item?.priority} key="test" />, w: "20%" },
                  { title: item.orderDate, w: "20%" },
                  { title: item.test, w: "20%" },
                  { title: item.orderNumber, w: "20%" },
                  { title: item.sample, w: "20%" },
                ]}
              />
            ))}
          </Table>
        </>
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

const data = [
  {
    id: 1,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "1",
    sample: "25 Nov, 2023",
  },
  {
    id: 2,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "1",
    sample: "25 Nov, 2023",
  },
  {
    id: 3,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "1",
    sample: "25 Nov, 2023",
  },
  {
    id: 4,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "1",
    sample: "25 Nov, 2023",
  },
];
