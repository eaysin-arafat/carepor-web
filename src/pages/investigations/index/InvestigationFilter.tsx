import CustomSearchable, {
  SearchableInputType,
} from "@/components/core/form-elements/custom-searchable";
import { useReadTestsQuery } from "@/features/investigation/investigation-enum-api";
import useWindowWidth from "@/hooks/useWindow";
import { OnchangeEventType } from "@/types/htmlEvents";
import { cn } from "@/utilities/cn";
import React from "react";
import DateInput from "../../../components/core/form-elements/DatePicker";
import Select from "../../../components/core/form-elements/Select";

type Props = {
  title?: string;
  className?: string;
  priority: string | number;
  setPriority: React.Dispatch<React.SetStateAction<number | number>>;
  test: SearchableInputType;
  setTest: React.Dispatch<React.SetStateAction<SearchableInputType>>;
  department?: string | number;
  setDepartment?: React.Dispatch<React.SetStateAction<number>>;
  setDate?: React.Dispatch<React.SetStateAction<Date | null>>;
  date?: Date | null;
  handleSearch?: () => void;
  name?: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
  handleInvestigationForm: () => void;
};

const InvestigationFilter = ({
  // handleInvestigationForm,
  title,
  className,
  priority,
  // setDepartment,
  // handleSearch,
  setPriority,
  setTest,
  test,
  setDate,
  date,
}: Props) => {
  const w1100 = useWindowWidth(1100);

  // test enum
  const { data: tests } = useReadTestsQuery(undefined);
  const sortedTest = tests?.slice().sort(sortByString);

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
        <div className="grid grid-cols-6 gap-3">
          <div
            className={`${"isFiltersHidden"} md:block col-span-6 md:col-span-2 w-full`}
          >
            <DateInput
              isClearable
              onChange={setDate}
              selected={date}
              label="Order Date"
              max={new Date()}
            />
          </div>

          <div
            className={`${"isFiltersHidden"} md:block col-span-6 md:col-span-2 w-full`}
          >
            <Select
              value={priority}
              selectShow="All"
              onChange={(e: OnchangeEventType) => setPriority(+e.target.value)}
              label="Priority"
            >
              <option value="1">Regular</option>
              <option value="2">Urgent</option>
              <option value="3">Emergency</option>
            </Select>
          </div>
          <div className={` md:block col-span-6 md:col-span-2 w-full`}>
            <CustomSearchable
              placeholder="Test name"
              selectedValue={test}
              setSelectedValue={setTest}
              className="border-none"
              options={sortedTest?.map((t) => ({
                label: `${t.title}`,
                value: t.oid,
              }))}
            />
          </div>
          {/* <div className="md:block col-span-10 md:col-span-8 lg:col-span-2 w-full">
            <div className="h-full flex items-center w-full justify-end">
              <button
                onClick={handleInvestigationForm}
                className="flex gap-2 main_btn px-4 sm:px-4 text-[14px] sm:text-base py-2.5 whitespace-nowrap"
              >
                <FiPlusCircle className="text-xl sm:text-2xl " /> Add
                Investigation
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InvestigationFilter;

const sortByString = (a, b) => {
  return a.title.localeCompare(b.title);
};
