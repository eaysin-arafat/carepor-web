import DatePicker from "@/components/core/form-elements/CustomDatePicker";
import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import React from "react";

const FullNameSearch = () => {
  const [amir, setAmir] = React.useState("");

  console.log({ amir });
  return (
    <div className="w-full">
      <div className="md:custom-input md:items-center md:py-0 md:mt-[6px] md:h-[52px] md:grid md:grid-cols-4 md:me-5 md:border-gray-300 md:focus:border-gray-300 space-y-3 md:space-y-0">
      <div className="md:border-r ">
          <Input
            label=""
            name=""
            placeholder="First Name"
            className={"md:input_cellphone"}
          />
        </div>
        <div className="md:border-r ">
          <Input
            label=""
            name=""
            placeholder="Surname"
            className={"md:input_cellphone"}
          />
        </div>
        <div className="md:border-r ">
          <DatePicker
            placeholder="DOB"
            name="dob"
            label=""
            className={"md:input_cellphone"}
          />
        </div>
        <div className="">
          <Select
            label=""
            value={amir}
            selectShow="Sex"
            className={"md:input_cellphone"}
            onChange={(e: any) => setAmir(e.target.value)}
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
