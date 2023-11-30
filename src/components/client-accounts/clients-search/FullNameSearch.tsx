import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import React from "react";

const FullNameSearch = () => {
  const [amir, setAmir] = React.useState("");

  console.log({ amir });
  return (
    <div className="w-full">
      <div className="custom-input items-center py-0 mt-[6px] h-[52px] grid grid-cols-4 me-5 border-gray-300 focus:border-gray-300">
        <div className="border-r ">
          <Input
            label=""
            name=""
            placeholder="First Name"
            className={"input_cellphone"}
          />
        </div>
        <div className="border-r ">
          <Input
            label=""
            name=""
            placeholder="Surname"
            className={"input_cellphone"}
          />
        </div>
        <div className="border-r ">
          <DatePicker
            placeholder="DOB"
            name="dob"
            label=""
            className={"input_cellphone"}
          />
        </div>
        <div className="">
          <Select
            label=""
            value={amir}
            selectShow="Sex"
            className={"input_cellphone"}
            onChange={(e) => setAmir(e.target.value)}
          >
            <option value="1">Male</option>
            <option value="2">Female</option>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FullNameSearch;