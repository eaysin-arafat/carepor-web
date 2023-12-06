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
  return (
    <div className={`${w1100 && "mt-12"}`}>
      <InvestigationQueueFilters />

      <br />
      <Card
        title="Referrals"
        image="/public/assets/icons/referrals.svg"
        titleClass="heading_3 text-secondaryColor"
        view="View All"
      >
        <Table className="bg-white rounded-xl w-full">
          <TableHeader
            isAction
            title={["Name", "Age", "Salary", "Date"]}
          />
          {data.map((item, index) => (
          <TableBody
            index={index}
            isAction
            edit
            delete
            show
            item={[
              item.name,
              item.age,
              item.salary,
              item.date,
            ]}
          />))}
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
    date: "25 Nov, 2023",
    salary: '50,000'
  },
  {
    id: 1,
    name: "John Doe",
    age: "23",
    date: "25 Nov, 2023",
    salary: '50,000'
  },
  {
    id: 1,
    name: "Amir Hamza",
    age: "23",
    date: "25 Nov, 2023",
    salary: '50,000'
  },
  {
    id: 1,
    name: "John Doe",
    age: "23",
    date: "25 Nov, 2023",
    salary: '50,000'
  },
  
];
