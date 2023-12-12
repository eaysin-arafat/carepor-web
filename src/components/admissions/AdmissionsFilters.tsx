import useWindowWidth from "@/hooks/useWindow";
import DateInput from "../core/form-elements/DatePicker";
import Select from "../core/form-elements/Select";
import useAdmissionFilter from "./useAdmissionFilter";

const AdmissionsFilters = ({
  admissionDate,
  dischargeDate,
  department,
  handleAdmissionDateChange,
  handleDepartmentChange,
  handleDischargeDateChange,
  handleWardChange,
  ward,
}) => {
  const w1100 = useWindowWidth(1100);
  const { departments, filtersHandler, isFiltersHidden, wards } =
    useAdmissionFilter();

  console.log("admissionDate", admissionDate);

  const renderDepartmentOptions = () => {
    return departments.map((department) => (
      <option key={department.oid} value={department.oid}>
        {department.description}
      </option>
    ));
  };

  const renderWardOptions = () => {
    return wards.map((ward) => (
      <option key={ward.oid} value={ward.oid}>
        {ward.description}
      </option>
    ));
  };

  return (
    <div>
      <div className={` py-5 pb-8 rounded-md  ${w1100 && ""}`}>
        <div className={`grid grid-cols-8 gap-3 justify-between`}>
          <div className="col-span-8 md:col-span-4 lg:col-span-2 w-full grid grid-cols-4 justify-between">
            <div className="col-span-3 md:col-span-4">
              <DateInput
                selected={admissionDate ? new Date(admissionDate) : null}
                onChange={handleAdmissionDateChange}
                label="Admission Date"
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
            className={`${isFiltersHidden} md:block col-span-8 md:col-span-4 lg:col-span-2 w-full`}
          >
            <Select
              label="Department"
              value={department}
              name="department"
              onChange={(e) => handleDepartmentChange(e.target.value)}
            >
              {departments && renderDepartmentOptions()}
            </Select>
          </div>
          <div
            className={`${isFiltersHidden} md:block col-span-8 md:col-span-4 lg:col-span-2 w-full`}
          >
            <Select
              label="Ward"
              name="ward"
              value={ward}
              onChange={(e) => handleWardChange(e.target.value)}
            >
              {wards && renderWardOptions()}
            </Select>
          </div>
          <div
            className={`${isFiltersHidden} md:block col-span-8 md:col-span-4 lg:col-span-2 w-full`}
          >
            <DateInput
              selected={dischargeDate ? new Date(dischargeDate) : null}
              onChange={handleDischargeDateChange}
              label="Discharge Date"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsFilters;
