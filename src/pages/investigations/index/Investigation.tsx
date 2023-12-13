import ClientDetailsCard from "@/components/core/card/ClientDetailsCard";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import DataSummaryList from "@/components/shared/data-summary/DataSummaryList";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { investigationModalTypes } from "@/constants/modal-types";
import { openAddModal } from "@/features/modal/modal-slice";
import useWindowWidth from "@/hooks/useWindow";
import InvestigationQueueFilters from "@/pages/queue/investigations-dashboard/InvestigationQueueFilters";
import { cn } from "@/utilities/cn";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";
import InvestigationCreate from "../create/InvestigationCreate";
// import InvestigationCreateForm from "@/components/investigations/InvestigationCreateForm";

const Investigation = () => {
  const [state, setState] = React.useState(1);
  const w1100 = useWindowWidth(1100);
  const dispatch = useDispatch();

  const handleAdmissionDetails = () => {
    dispatch(
      openAddModal({
        modalId: investigationModalTypes.addInvestigation,
        data: null,
      })
    );
  };

  return (
    <>
      <InvestigationCreate />
      <div className={cn("", { "mt-12": w1100 })}>
        {/* <InvestigationCreateForm/> */}
        <ClientDetailsCard className="shadow-none" />
        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className="col-span-4 lg:col-span-3">
            <div className="flex justify-between items-center md:mb-2">
              <h2 className="text-xl md:text-2xl text-secondaryColor font-medium">
                Investigations
              </h2>
              <button
                onClick={handleAdmissionDetails}
                className="flex gap-2 main_btn px-3 sm:px-4 text-[14px] sm:text-base py-2.5"
              >
                {" "}
                <FiPlusCircle className="text-xl sm:text-2xl " /> Add
                Investigation
              </button>
            </div>
            <div className=" bg-whiteBgColor pb-5 rounded-xl shadow-light">
              <InvestigationQueueFilters
                priority={0}
                setPriority={() => {}}
                setTest={() => {}}
                test={0}
                department={0}
                setDepartment={() => {}}
                title=""
                className="border-none bg-transparent"
              />
              <Table isRounded>
                <TableHeader
                  className="bg-tableHeadColor text-textColor"
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
                      viewResult: "View Order",
                      btnOutline: "Add Result",
                    }}
                    item={[
                      { title: item.name, w: "20%" },
                      // { title: <Test2 aa={item?.priority} key="test" />, w: "20%" },
                      { title: item.orderDate, w: "20%" },
                      { title: item.orderDate, w: "20%" },
                      { title: item.test, w: "20%" },
                      { title: item.orderNumber, w: "20%" },
                      { title: item.sample, w: "20%" },
                    ]}
                  />
                ))}
              </Table>
              <div className="flex justify-end mx-5">
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
          <div className="col-span-4 lg:col-span-1">
            <DataSummaryList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Investigation;

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
