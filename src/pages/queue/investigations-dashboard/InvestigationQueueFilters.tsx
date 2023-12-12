import useWindowWidth from "@/hooks/useWindow";
import { cn } from "@/utilities/cn";
import React, { useState } from "react";
import DateInput from "../../../components/core/form-elements/DatePicker";
import Search from "../../../components/core/form-elements/Search";
import Select from "../../../components/core/form-elements/Select";

type Props = {
  title?: string;
  className?: string;
};

const InvestigationQueueFilters = ({ title, className }: Props) => {
  const [allFilters, setAllFilters] = React.useState(false);
  const w1100 = useWindowWidth(1100);

  const filtersHandler = () => {
    setAllFilters((prev) => !prev);
  };
  const isFiltersHidden = `${allFilters === false ? "hidden" : ""}`;

  // states
  // const [name, setName] = useState("");
  const [date, setDate] = useState(null);
  // const [priority, setPriority] = useState("");
  // const [department, setDepartmenty] = useState("");

  return (
    <div>
      <div
        className={cn(
          `bg-whiteBgColor border border-borderColor p-5 pb-4 rounded-md  ${
            w1100 && "mt-2"
          }`,
          className
        )}
      >
        {title && (
          <h1 className="text-3xl font-medium text-black dark:text-white mb-4">
            {title}
          </h1>
        )}
        <div className={`grid grid-cols-10 gap-3 justify-between`}>
          <div className="col-span-10 md:col-span-5 lg:col-span-2 w-full grid grid-cols-4 justify-between">
            <div className="col-span-3 md:col-span-4">
              <Search label="Client Name" placeholder="Search..." />
            </div>
            <div className="text-end md:hiddenSkip">
              <button
                className="text-primaryColor me-2 p-2 font-semibold h-fit w-fit mt-8 "
                onClick={filtersHandler}
              >
                Filters
              </button>
            </div>
          </div>
          <div
            className={`${isFiltersHidden} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <DateInput
              isClearable
              onChange={(d) => {
                setDate(d.toISOString());
              }}
              selected={date ? new Date(date) : null}
              label="Order Date"
              max={new Date()}
            />
          </div>
          <div
            className={`${isFiltersHidden} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <Select label="Priority">
              <option value="1">Regular</option>
              <option value="2">Urgent</option>
              <option value="3">Emergency</option>
            </Select>
          </div>
          <div
            className={`${isFiltersHidden} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <Select label="Test Name"></Select>
          </div>
          <div
            className={`${isFiltersHidden} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <Select label="Department"></Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigationQueueFilters;
