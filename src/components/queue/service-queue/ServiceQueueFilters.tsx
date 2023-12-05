import React from "react";
import Search from "../../core/form-elements/Search";
import Select from "../../core/form-elements/Select";

type Props = {
  withoutTitle?: boolean
}
const ServiceQueueFilters = ({ withoutTitle }:Props) => {
  const [allFilters, setAllFilters] = React.useState(false);

  const filtersHandler = () => {
    setAllFilters((prev) => !prev);
  };
  const myVar = `${allFilters === false ? "hidden" : ""}`;

  return (
    <div>
      <div className={`bg-white border p-5 pb-8 rounded-md `}>
        {!withoutTitle && (
          <h1 className="text-3xl font-medium text-black dark:text-white mb-4">
            Service Queue
          </h1>
        )}
        <div className={`grid grid-cols-8 gap-3 justify-between`}>
          <div className="col-span-full md:col-span-4 lg:col-span-2 w-full">
            <Select label="Service Point"></Select>
          </div>
          <div className="col-span-8 md:col-span-4 lg:col-span-2 w-full grid grid-cols-4 justify-between">
            <div className="col-span-3 md:col-span-4">
              {/* <Input label="Client Name" placeholder="Search..." /> */}
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
            className={`${myVar} md:block col-span-8 md:col-span-4 lg:col-span-2 w-full`}
          >
            <Select label="Urgency">
              <option value="urgent">Urgent</option>
              <option value="regular">Regular</option>
              <option value="emergency">Emergency</option>
            </Select>
          </div>
          <div
            className={`${myVar} md:block col-span-8 md:col-span-4 lg:col-span-2 w-full`}
          >
            <Select label="Provider"></Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceQueueFilters;
