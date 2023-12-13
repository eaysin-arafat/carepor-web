import { BsCalendar } from "react-icons/bs";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import Select from "../core/form-elements/Select";
import Textarea from "../core/form-elements/textarea";
import InvestigationCartCard from "./InvestigationCartCard";

const InvestigationSingleTest = () => {
  return (
    <form>
      <div className="md:flex gap-5 mt-5">
        <div className="md:w-[60%] border border-borderColor px-4 rounded-lg">
          <div className="grid grid-cols-4 gap-5 my-5">
            <div className="col-span-4 md:col-span-2">
              <Select label="Test Type" required></Select>
            </div>
            <div className="col-span-4 md:col-span-2">
              <Select label="Sub Type" required></Select>
            </div>
            <div className="col-span-4 md:col-span-2">
              <Select label="Test" required></Select>
            </div>
            <div className="col-span-4 md:col-span-2">
              <DateInput onChange={() => {}} label="Order Date" required />
              {/* <Select label="Order Priority" required></Select> */}
            </div>
            <div className="col-span-4 md:col-span-2 ">
              {/* <DateInput onChange={() => {}} label="Order Date" required /> */}
              <Select label="Order Priority" required></Select>
            </div>
            <div className="col-span-4 md:col-span-2">
              <Input label="Order Number" required />
            </div>
            <div className="col-span-4 md:col-span-2">
              <Input label="Test Quantity" required />
            </div>
            <div className="col-span-4 md:col-span-2">
              <Input label="Sample Quantity" required />
            </div>
            <div className="col-span-4">
              <Textarea
                label="Imaging Test Details (If imaging test selected)"
                placeholder="Enter Imaging Test Details"
                required
              />
            </div>
            <div className="col-span-4">
              <Textarea label="Comments" required />
            </div>
          </div>
          <div className="mb-5 flex justify-end gap-5">
            <button className="transparent_btn ">Add To Cart</button>
          </div>
        </div>
        <div className="md:w-[40%] border border-borderColor px-4 rounded-lg">
          <h2 className="text-center text-xl font-medium my-4">
            Investigations Cart
          </h2>
          <h3 className="font-semibold text-base inline-flex items-center gap-1">
            <BsCalendar /> Order Date :{" "}
            <span className="font-normal text-grayColor">12-12-2023</span>
          </h3>
          <InvestigationCartCard />
          <div className="mb-5 flex justify-end gap-5">
            <button className="transparent_btn ">Clear Carts</button>
            <button className="main_btn py-2 sm:py-3">Save</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InvestigationSingleTest;
