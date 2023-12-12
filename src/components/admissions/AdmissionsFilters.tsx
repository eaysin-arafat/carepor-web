import useWindowWidth from "@/hooks/useWindow";
import React from "react";
import DateInput from "../core/form-elements/DatePicker";
import Select from "../core/form-elements/Select";

const AdmissionsFilters = () => {
  const [allFilters, setAllFilters] = React.useState(false);
  const w1100 = useWindowWidth(1100);

  const filtersHandler = () => {
    setAllFilters((prev) => !prev);
  };
  const isFiltersHidden = `${allFilters === false ? "hidden" : ""}`;

  return (
    <div>
      <div className={` py-5 pb-8 rounded-md  ${w1100 && ""}`}>
        <div className={`grid grid-cols-8 gap-3 justify-between`}>
          <div className="col-span-8 md:col-span-4 lg:col-span-2 w-full grid grid-cols-4 justify-between">
            <div className="col-span-3 md:col-span-4">
              <DateInput onChange={() => {}} label="Admission Date"></DateInput>
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
            <Select label="Department">
              <option value="urgent">Urgent</option>
              <option value="regular">Regular</option>
              <option value="emergency">Emergency</option>
            </Select>
          </div>
          <div
            className={`${isFiltersHidden} md:block col-span-8 md:col-span-4 lg:col-span-2 w-full`}
          >
            <Select label="Ward"></Select>
          </div>
          <div
            className={`${isFiltersHidden} md:block col-span-8 md:col-span-4 lg:col-span-2 w-full`}
          >
            <Select label="Discharge Date"></Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsFilters;
