import Badge from "@/components/core/badge/Badge";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import PharmacyQueueFilters from "@/components/queue/pharmacy-queue/PharmacyQueueFilters";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import useWindowWidth from "@/hooks/useWindow";
import React from "react";

function PharmacyQueue() {
  const w1100 = useWindowWidth(1100);
  const [state, setState] = React.useState(1);

  const Test2 = ({ aa }: { aa: string }) => {
    return (
      <div className="flex gap-1 items-center">
        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
        <p>{aa}</p>
      </div>
    );
  };

  console.log(Test2);

  return (
    <div className={`${w1100 && "mt-12"}`}>
      <PharmacyQueueFilters />
      <div className="">
        <h1 className="text-2xl font-medium text-secondaryColor mb-4 flex items-center gap-3 mt-5">
          Prescribed
          <Badge type="circle" value={5} />
        </h1>
        <div className="mt-5 bg-whiteBgColor pb-5 rounded-xl shadow-light">
          <Table isRounded className="shadow">
            <TableHeader
              className="bg-tableHeadColor text-textColor"
              isAction
              actionWidth="min-w-[100px]"
              title={[
                {
                  title: "Patient Name",
                  w: "30%",
                },
                {
                  title: "Date of Prescription",
                  w: "20%",
                },
                {
                  title: "Provider",
                  w: "30%",
                },
                {
                  title: "Time",
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
                  { title: item.name, w: "30%" },
                  { title: item.orderDate, w: "20%" },
                  { title: item.test, w: "30%" },
                  { title: item.orderNumber, w: "20%" },
                ]}
              />
            ))}
          </Table>
          <div className="flex justify-end mx-8">
            <CustomPagination
              activePage={1}
              itemsCountPerPage={state}
              setActivePage={setState}
              totalItemsCount={100}
              setItemPerPage={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmacyQueue;

const data = [
  {
    id: 1,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "10:00 am",
    sample: "25 Nov, 2023",
  },
  {
    id: 2,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "10:00 am",
    sample: "25 Nov, 2023",
  },
  {
    id: 3,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "10:00 am",
    sample: "25 Nov, 2023",
  },
  {
    id: 4,
    name: "Amir Hamza",
    age: "23",
    orderDate: "25 Nov, 2023",
    priority: "Regular",
    test: "test",
    orderNumber: "10:00 am",
    sample: "25 Nov, 2023",
  },
];
