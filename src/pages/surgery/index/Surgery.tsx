import ClientDetailsCard from "@/components/core/card/ClientDetailsCard";
import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import DateInput from "@/components/core/form-elements/DatePicker";
import Select from "@/components/core/form-elements/Select";
import DataSummaryList from "@/components/shared/data-summary/DataSummaryList";
import Table from "@/components/shared/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import SurgeryCreateModal from "@/components/surgery/SurgeryCreateModal";
import { surgeryModalTypes } from "@/constants/modal-types";
import { openAddModal } from "@/features/modal/modal-slice";
import useWindowWidth from "@/hooks/useWindow";
import { cn } from "@/utilities/cn";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch } from "react-redux";

const SurgeryIndex = () => {
  const [state, setState] = React.useState(1);
  const w1100 = useWindowWidth(1100);
  const dispatch = useDispatch();

  const handleAdmissionDetails = () => {
    dispatch(
      openAddModal({
        modalId: surgeryModalTypes.addSurgery,
        data: null,
      })
    );
  };

  return (
    <>
      <SurgeryCreateModal />
      <div className={cn("", { "mt-12": w1100 })}>
        <ClientDetailsCard className="shadow-none" />
        <div className="grid grid-cols-4 gap-5 mt-5">
          <div className="col-span-4 lg:col-span-3">
            <div className="flex justify-between items-center md:mb-2">
              <h2 className="text-xl md:text-2xl text-secondaryColor font-medium">
                Surgery
              </h2>
              <button
                onClick={handleAdmissionDetails}
                className="flex gap-2 main_btn px-3 sm:px-4 text-[14px] sm:text-base py-2.5"
              >
                {" "}
                <FiPlusCircle className="text-xl sm:text-2xl " /> Add Surgery
              </button>
            </div>
            <div className=" bg-whiteBgColor pb-5 rounded-xl shadow-light">
              <Filters className="border-none bg-transparent" />
              <Table isRounded>
                <TableHeader
                  className="bg-tableHeadColor text-textColor"
                  isAction
                  actionWidth="min-w-[170px]"
                  title={[
                    {
                      title: "Booking Date & Time",
                      w: "20%",
                    },
                    {
                      title: "Clinician",
                      w: "20%",
                    },
                    {
                      title: "Facility",
                      w: "20%",
                    },
                    {
                      title: "Test",
                      w: "20%",
                    },
                    {
                      title: "Surgery Type",
                      w: "20%",
                    },
                    {
                      title: "Operation Date & Time",
                      w: "20%",
                    },
                    {
                      title: "Department",
                      w: "20%",
                    },
                  ]}
                />
                {data.map((item, index) => (
                  <TableBody
                    isDropdown={<div>O</div>}
                    index={index}
                    isAction
                    actionWidth="min-w-[170px]"
                    btn={{
                      viewResult: "View Details",
                    }}
                    item={[
                      { title: item.name, w: "20%" },
                      // { title: <Test2 aa={item?.priority} key="test" />, w: "20%" },
                      { title: item.orderDate, w: "20%" },
                      { title: item.orderDate, w: "20%" },
                      { title: item.test, w: "20%" },
                      { title: item.orderNumber, w: "20%" },
                      { title: item.sample, w: "20%" },
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

export default SurgeryIndex;

const Filters = ({ className }: { className: string }) => {
  const [allFilters, setAllFilters] = React.useState(false);

  const filtersHandler = () => {
    setAllFilters((prev) => !prev);
  };
  const isFiltersHidden = `${allFilters === false ? "hidden" : ""}`;

  return (
    <div
      className={cn(
        `bg-whiteBgColor border border-borderColor p-5 pb-8 rounded-md `,
        className
      )}
    >
      <div className={`grid grid-cols-8 gap-3 justify-between`}>
        <div className="col-span-8 md:col-span-4 lg:col-span-2 w-full grid grid-cols-4 justify-between">
          <div className="col-span-3 md:col-span-4">
            <DateInput onChange={() => {}} label="Order Date"></DateInput>
          </div>
          <div className="text-end md:hidden">
            <button
              className="text-primaryColor me-2 p-2 font-semibold h-fit w-fit mt-8 "
              onClick={filtersHandler}
            >
              Filters
            </button>
          </div>
        </div>
        <div
          className={`${isFiltersHidden} md:block col-span-8 md:col-span-4 lg:col-span-2 w-full`}
        >
          <Select label="Priority">
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="emergency">Emergency</option>
          </Select>
        </div>
        <div
          className={`${isFiltersHidden} md:block col-span-8 md:col-span-4 lg:col-span-2 w-full`}
        >
          <Select label="Clinician"></Select>
        </div>
        <div
          className={`${isFiltersHidden} md:block col-span-8 md:col-span-4 lg:col-span-2 w-full`}
        >
          <Select label="Result"></Select>
        </div>
      </div>
    </div>
  );
};

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
