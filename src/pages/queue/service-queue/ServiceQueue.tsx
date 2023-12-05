import QueueTableLayout from "@/components/queue/QueueTableLayout";
import ServiceQueueFilters from "@/components/queue/service-queue/ServiceQueueFilters";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
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

      <Table>
        <TableHeader />

        <TableBody item={["hello", "hello2"]} />
      </Table>
    </div>
  );
}

export default ServiceQueue;

const data = [
  {
    id: 1,
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    age: "61",
    date: "2011/04/25",
    salary: "$320,800",
  },
  {
    id: 2,
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    age: "63",
    date: "2011/07/25",
    salary: "$170,750",
  },
  {
    id: 3,
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: "66",
    date: "2009/01/12",
    salary: "$86,000",
  },
  {
    id: 4,
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: "22",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    id: 5,
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    age: "33",
    date: "2008/11/28",
    salary: "$162,700",
  },
  {
    id: 6,
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    age: "61",
    date: "2012/12/02",
    salary: "$372,000",
  },
  {
    id: 7,
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    age: "59",
    date: "2012/08/06",
    salary: "$137,500",
  },
  {
    id: 8,
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    age: "55",
    date: "2010/10/14",
    salary: "$327,900",
  },
  {
    id: 9,
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    age: "39",
    date: "2009/09/15",
    salary: "$205,500",
  },
  {
    id: 10,
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: "23",
    date: "2008/12/13",
    salary: "$103,600",
  },
];
