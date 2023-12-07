import Card from "@/components/core/card/Card";
// import Table from "@/components/core/table/Table";
// import TableData from "@/components/core/table/TableData";
// import TableHead from "@/components/core/table/TableHead";
import InvestigationQueueFilters from "@/components/queue/investigation-queue/InvestigationQueueFilters";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import useWindowWidth from "@/hooks/useWindow";

function InvestigationsDashboard() {
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
      <InvestigationQueueFilters />

      <br />
      <Card
        title="Referrals"
        image="/public/assets/icons/referrals.svg"
        titleClass="heading_3 text-secondaryColor"
        view="View All"
        className="bg-gray-200"
      >
        <Table isRounded>
          <TableHeader
            className="bg-gray-300 "
            isAction
            actionWidth="min-w-[270px]"
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
              actionWidth="min-w-[270px]"
              btn={{
                viewResult: "View Results",
                btnOutline: "Sample Collected",
              }}
              item={[
                { title: item.name, w: "20%" },
                { title: <Test2 aa={item?.priority} key="test" /> , w: "20%" },
                { title: item.orderDate, w: "20%" },
                { title: item.test, w: "20%" },
                { title: item.orderNumber, w: "20%" },
                { title: item.sample, w: "20%" },
              ]}
            />
          ))}
        </Table>
        {/* <Table>
          <TableHead
            gridCol={4}
            action
            tableHead={["PATIENT NAME", "Sex", "Added"]}
          />
          {data.slice(0, 7).map((item: any) => {
            return (
              <div className="rounded-lg">
                <TableData
                  gridCol={4}
                  preview
                  tableData={[item.name, item.date, item.date]}
                />
              </div>
            );
          })}
        </Table> */}
      </Card>
    </div>
  );
}

export default InvestigationsDashboard;
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
    id: 1,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "1",
    sample: "25 Nov, 2023",
  },
];
