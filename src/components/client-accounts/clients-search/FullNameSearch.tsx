import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import { NameSearchType } from "@/interface/clientSearch";

interface NameSearchProps {
  handleNameSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nameSearchState: NameSearchType;
  handleDateClear: () => void;
}

const NameSearch = ({
  handleNameSearchChange,
  nameSearchState,
  handleDateClear,
}: NameSearchProps) => {
  return (
    <div className="w-full">
      <div className="md:custom-input md:items-center md:py-0 md:mt-[6px] md:h-[52px] md:grid md:grid-cols-4 md:me-5 md:border-gray-300 md:focus:border-gray-300 space-y-3 md:space-y-0">
        <div className="md:border-r ">
          <Input
            label=""
            name="firstName"
            onChange={handleNameSearchChange}
            placeholder="First Name"
            value={nameSearchState.firstName}
            className={"md:input_cellphone"}
          />
        </div>
        <div className="md:border-r ">
          <Input
            label=""
            name="surname"
            value={nameSearchState.surname}
            onChange={handleNameSearchChange}
            placeholder="Surname"
            className={"md:input_cellphone"}
          />
        </div>
        <div className="md:border-r ">
          <DatePicker
            placeholder="DOB"
            name="dob"
            label=""
            value={nameSearchState.dob}
            onChange={handleNameSearchChange}
            className={"md:input_cellphone"}
            handleClear={handleDateClear}
          />
        </div>
        <div className="">
          <Select
            label=""
            value={nameSearchState.sex}
            name="sex"
            selectShow="Sex"
            className={"md:input_cellphone"}
            onChange={handleNameSearchChange}
          >
            <option value="1">Male</option>
            <option value="2">Female</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default NameSearch;
