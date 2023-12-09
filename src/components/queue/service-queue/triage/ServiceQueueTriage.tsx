import Badge from "@/components/core/badge/Badge";
import BreadcrumbItem from "@/components/core/breadcumb/BreadcrumbItem";
import GlobalBreadcrumb from "@/components/core/breadcumb/Breadcumb";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import useWindowWidth from "@/hooks/useWindow";
import { URLServiceQueue } from "@/routers/queue-routes";
import React from "react";
import ServiceQueueFilters from "../ServiceQueueFilters";

function ServiceQueueTriage() {
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

  return (
    <div className={`${w1100 && "mt-12"}`}>
      <GlobalBreadcrumb className="bg-whiteBgColor p-4 border rounded-md mb-3">
        <>
          <BreadcrumbItem
            href={URLServiceQueue()}
            text="Service Queue"
            noIcon
            active
          />
          <BreadcrumbItem text="Triage" />
        </>
      </GlobalBreadcrumb>
      <h1 className="text-2xl mb-4 flex items-center gap-3">
        Triage
        <Badge type="circle" value={5} />
      </h1>
      <ServiceQueueFilters
        withoutTitle
        className="bg-transparent border-none p-0"
      />

      <div className="mt-5 bg-whiteBgColor pb-5 rounded-lg shadow-light border ">
        <Table isRounded className="shadow">
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
        <div className="flex justify-end mx-8">
          <CustomPagination
            activePage={1}
            itemsCountPerPage={state}
            setActivePage={setState}
            totalItemsCount={100}
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceQueueTriage;

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
