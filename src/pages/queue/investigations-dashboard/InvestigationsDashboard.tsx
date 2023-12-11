import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
// import Table from "@/components/core/table/Table";
// import TableData from "@/components/core/table/TableData";
// import TableHead from "@/components/core/table/TableHead";
import InvestigationQueueFilters from "@/components/queue/investigation-queue/InvestigationQueueFilters";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import useWindowWidth from "@/hooks/useWindow";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InvestigationsDashboard() {
  const w1100 = useWindowWidth(1100);

  //
  const navigation = useNavigate();
  // const { Investigation } = EnumEncounterType;
  const [baseData] = [""]; //useBaseData(Investigation);

  // Request state for page and item
  const [pageNo, setPageNo] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  // Request for investigation data
  // const { data, isLoading, isError, isSuccess } = useReadInvestigationByEncounterQuery(
  //   { facilityId: baseData?.createdIn, pageNo, itemPerPage },
  //   {
  //     skip: !baseData?.createdIn,
  //   }
  // );

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
      <InvestigationQueueFilters title="Investigation Queue" />

      <br />
      <div className="mt-5 bg-whiteBgColor pb-5 rounded-xl shadow-light">
        <Table isRounded>
          <TableHeader
            className="bg-tableHeadColor text-textColor py-2"
            isAction
            actionWidth="min-w-[270px]"
            title={investigationDashboardHeader}
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
                { title: item.orderDate, w: "20%" },
                { title: item.orderNumber, w: "20%" },
                { title: item.test, w: "20%" },
                { title: "high", w: "20%" },
                { title: item.sample, w: "20%" },
              ]}
            />
          ))}
        </Table>
        <div className="flex justify-end mx-5">
          <CustomPagination
            activePage={3}
            itemsCountPerPage={state}
            setActivePage={setState}
            totalItemsCount={100}
          />
        </div>
      </div>
    </div>
  );
}

export default InvestigationsDashboard;
const investigationDashboardHeader = [
  {
    title: "Patient Name",
    w: "20%",
  },
  {
    title: "Order Date",
    w: "20%",
  },
  {
    title: "Order Number",
    w: "20%",
  },
  {
    title: "Test",
    w: "20%",
  },
  {
    title: "Priority",
    w: "20%",
  },

  {
    title: "Sample Collection Date",
    w: "20%",
  },
];

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
