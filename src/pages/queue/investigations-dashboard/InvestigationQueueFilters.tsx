import { useReadTestsQuery } from "@/features/investigation/investigation-enum-api";
import useWindowWidth from "@/hooks/useWindow";
import { OnchangeEventType } from "@/types/htmlEvents";
import { cn } from "@/utilities/cn";
import React from "react";
import DateInput from "../../../components/core/form-elements/DatePicker";
import Search from "../../../components/core/form-elements/Search";
import Select from "../../../components/core/form-elements/Select";

type Props = {
  title?: string;
  className?: string;
  priority: string | number;
  setPriority: React.Dispatch<React.SetStateAction<number>>;
  test: string | number;
  setTest: React.Dispatch<React.SetStateAction<number>>;
  department?: string | number;
  setDepartment?: React.Dispatch<React.SetStateAction<number>>;
};

const InvestigationQueueFilters = ({
  title,
  className,
  // priority,
  setPriority,
  setTest,
}: // test,
// setDepartment,
Props) => {
  const [allFilters, setAllFilters] = React.useState(false);
  const w1100 = useWindowWidth(1100);
  const filtersHandler = () => {
    setAllFilters((prev) => !prev);
  };
  const isFiltersHidden = `${allFilters === false ? "hidden" : ""}`;

  // test enum
  const { data: tests } = useReadTestsQuery(undefined);

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
              <Search
                type="search"
                label="Client Name"
                placeholder="Search..."
              />
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
            className={`${isFiltersHidden} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <DateInput
              isClearable
              onChange={() => {}}
              // selected={date}
              label="Order Date"
              max={new Date()}
            />
          </div>
          <div
            className={`${isFiltersHidden} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <Select
              // value={priority}
              selectShow="All"
              onChange={(e: OnchangeEventType) => setPriority(+e.target.value)}
              label="Priority"
            >
              <option value="1">Regular</option>
              <option value="2">Urgent</option>
              <option value="3">Emergency</option>
            </Select>
          </div>
          <div
            className={`${isFiltersHidden} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <Select
              selectShow="All"
              onChange={(e: OnchangeEventType) => setTest(+e.target.value)}
              label="Test Name"
            >
              {Array.isArray(tests) &&
                tests
                  ?.slice()
                  .sort(sortByString)
                  ?.map((item) => (
                    <option key={item?.oid} value={item?.oid}>
                      {item?.title}
                    </option>
                  ))}
            </Select>
          </div>
          <div
            className={`${isFiltersHidden} md:block col-span-10 md:col-span-5 lg:col-span-2 w-full`}
          >
            <Select selectShow="All" disabled label="Department">
              <option value="1">Department</option>
              <option value="2">Department</option>
              <option value="3">Department</option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestigationQueueFilters;

const sortByString = (a, b) => {
  return a.title.localeCompare(b.title);
};
