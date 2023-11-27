import React from "react";
import Checkbox from "../core/form-elements/Checkbox";
import CustomNrc from "../core/form-elements/CustomNrc";
// import DateInput from "../form-elements/DatePicker";
import Skeleton from "../core/skeleton/Skeleton";
import DatePicker from "../core/form-elements/CustomDatePicker";
import Input from "../core/form-elements/Input";
import Select from "../core/form-elements/Select";
import FormSection from "../core/form-layouts/FormSection";

type Props = {};

function ClientPersonalInfo({}: Props) {
  const [selectedDate, setSelectedDate] = React.useState<string | null>(
    "2023-11-23T10:46:17.000Z"
  );

  console.log(setSelectedDate);

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <FormSection titleText="Personal Information">
        <div className="grid md:grid-cols-6 gap-5">
          <div className="col-span-6 md:col-span-3">
            <Input label="First Name" required />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Input label="Surname" required />
          </div>
          {/* <DateInput
            name="date"
            value={selectedDate}
            label="Date of birth"
            onChange={handler}
          /> */}
          <div className="col-span-6 md:col-span-3">
            <DatePicker
              name="date"
              value={selectedDate}
              label="Date of birth"
              onChange={handler}
              required
            />
          </div>
          {/* <input type="date" onChange={handler} /> */}
          <div className="col-span-6 md:col-span-3">
            <Select label="Sex" required>
              <option value="">Select</option>
            </Select>
          </div>
          <div className="col-span-6 flex items-center -mt-5">
            <Checkbox label="Date of birth is estimated" />
          </div>
          <div className="col-span-6 md:col-span-3">
            <CustomNrc label="NRC" required state="s" onChange={handler} />
          </div>
          <div className="col-span-6 md:col-span-3">
            <Select label="Country" required>
              <option value="">Select</option>
            </Select>
          </div>
          <div className="col-span-6 flex items-center -mt-5">
            <Checkbox label="Client does not have NRC" />
          </div>
          <div className="col-span-6 md:col-span-2">
            <Input label="NAPSA Number" />
          </div>
          <div className="col-span-6 md:col-span-2">
            <Input label="UnderFive Card Number" />
          </div>
          <div className="col-span-6 md:col-span-2">
            <Input label="UnderFive Card Number" required />
          </div>
          <div className="">
            <Skeleton />
          </div>
        </div>
      </FormSection>
    </>
  );
}

export default ClientPersonalInfo;
