import useWindowWidth from "@/hooks/useWindow";
import React from "react";
import DateInput from "../../core/form-elements/DatePicker";
import Search from "../../core/form-elements/Search";
import Select from "../../core/form-elements/Select";

const InvestigationQueueFilters = () => {
  const [allFilters, setAllFilters] = React.useState(false);
  const w1100 = useWindowWidth(1100);

  const filtersHandler = () => {
    setAllFilters((prev) => !prev);
  };
  const myVar = `${allFilters === false ? "hidden" : ""}`;

  return (
    <div>
      <div
        className={`bg-white border p-5 pb-8 rounded-md  ${w1100 && "mt-12"}`}
      >
        <h1 className="text-3xl font-medium text-black dark:text-white mb-4">
          Investigation Queue
        </h1>
        <div className={`grid grid-cols-10 gap-3 justify-between`}>
          <div className="col-span-10 md:col-span-5 lg:col-span-2 w-full grid grid-cols-4 justify-between">
            <div className="col-span-3 md:col-span-4">
              <Search label="Client Name" placeholder="Search..." />
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
            className={`${myVar} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <DateInput onChange={() => {}} label="Order Date"></DateInput>
          </div>
          <div
            className={`${myVar} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <Select label="Priority">
              <option value="urgent">Urgent</option>
              <option value="regular">Regular</option>
              <option value="emergency">Emergency</option>
            </Select>
          </div>
          <div
            className={`${myVar} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <Select label="Test Name"></Select>
          </div>
          <div
            className={`${myVar} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <Select label="Department"></Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigationQueueFilters;
