import Card from "@/components/core/card/Card";
import Container from "@/components/core/container/Container";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";

const UserDashboard = () => {
  return (
    <Container>
      {/* User Dashboard  */}
      <div className="mt-10">
        <div className="grid grid-rows-1 gap-5">
          <Card
            title="Pharmacy Queue"
            image="assets/icons/home.svg"
            titleClass="heading_3 text-secondaryColor"
            view="View All"
            className="bg-whiteBgColor shadow-none border-borderColor"
          >
            <Table isRounded>
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
                    viewResult: "Preview",
                  }}
                  item={[
                    { title: item.name, w: "20%" },
                    { title: item?.priority, w: "20%" },
                    { title: item.orderDate, w: "20%" },
                    { title: item.test, w: "20%" },
                    { title: item.orderNumber, w: "20%" },
                    { title: item.sample, w: "20%" },
                  ]}
                />
              ))}
            </Table>
          </Card>
          <Card
            title="Investigation Queue"
            image="assets/icons/home.svg"
            titleClass="heading_3 text-secondaryColor"
            view="View All"
            className="bg-whiteBgColor shadow-none border-borderColor"
          >
            <Table isRounded>
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
                    viewResult: "Preview",
                  }}
                  item={[
                    { title: item.name, w: "20%" },
                    { title: item?.priority, w: "20%" },
                    { title: item.orderDate, w: "20%" },
                    { title: item.test, w: "20%" },
                    { title: item.orderNumber, w: "20%" },
                    { title: item.sample, w: "20%" },
                  ]}
                />
              ))}
            </Table>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default UserDashboard;

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
