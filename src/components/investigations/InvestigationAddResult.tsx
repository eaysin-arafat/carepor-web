import { BsCalendar, BsTrash } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import Select from "../core/form-elements/Select";
import Textarea from "../core/form-elements/textarea";
import InvestigationTable from "./InvestigationTable";

const InvestigationAddResult = () => {
  return (
    <>
      <form>
        <div className="md:flex gap-5 mt-5">
          <div className="md:w-[60%] border border-borderColor px-4 rounded-lg">
            <div className="mt-4">
              <h3 className="font-semibold text-base inline-flex items-center gap-1">
                <BsCalendar /> Order Date :{" "}
                <span className="font-normal text-grayColor">12-12-2023</span>
              </h3>
              <p className="text-grayColor mt-2">
                Prescribed by <span>Roger More</span>, at{" "}
                <span>Bauleni Mini Hospital</span> Facility{" "}
              </p>
            </div>
            <div className="mt-8">
              <InvestigationTable/>
            </div>
            <div className="grid grid-cols-4 gap-5 my-5">
              <div className="col-span-4">Add Results</div>
              <div className="col-span-4 md:col-span-2">
                <Select label="Test" required></Select>
              </div>
              <div className="col-span-4 md:col-span-2">
                <DateInput onChange={() => {}} label="Order Date" required />
              </div>
              <div className="col-span-4">
                <Input label="Sample Quantity" required />
              </div>
              <div className="col-span-4">
                <Textarea label="Comments" required />
              </div>
            </div>
            <div className="mb-5 flex justify-end gap-5">
              <button className="transparent_btn py-2 px-8">Add To Cart</button>
            </div>
          </div>
          <div className="md:w-[40%] border border-borderColor px-4 rounded-lg">
            <h2 className="text-center text-xl font-medium my-4">
              Results Cart
            </h2>
            <h3 className="font-semibold text-base inline-flex items-center gap-1">
              <BsCalendar /> Order Date :{" "}
              <span className="font-normal text-grayColor">12-12-2023</span>
            </h3>
            <ResultCart />
            <div className="mb-5 flex justify-end gap-5">
              <button className="transparent_btn py-2 px-8">Clear Carts</button>
              <button className="main_btn py-2">Save</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default InvestigationAddResult;

const ResultCart = () => {
  return (
    <div className="bg-lightBlueColor rounded-lg h-fit p-4 mt-3 mb-5">
      <div className="flex flex-wrap gap-4 text-xs">
        <p>
          <span className="font-semibold">Admission Date : </span>
          28-Nov-2023
        </p>
        <p>
          <span className="font-semibold">Department : </span> Bauleni Mini
          Hospital
        </p>
        <p>
          <span className="font-semibold">Firm/Ward : </span> John Wick
        </p>
        <p>
          <span className="font-semibold">Operation Time :</span> John Wick
        </p>
        <p>
          <span className="font-semibold">Surgery Type : </span> John Wick{" "}
        </p>
        <p>
          <span className="font-semibold">Department : </span> John Wick
        </p>
        <p>
          <span className="font-semibold"> Bed :</span> John Wick{" "}
        </p>
        <p>
          {" "}
          <span className="font-semibold text-xs">Notes :</span> ------{" "}
        </p>
      </div>
      <div className="flex items-center justify-end text-xs gap-2">
        <button className="text-red-500">
          <BsTrash />
        </button>
        <button className="text-primaryColor flex">
          <MdOutlineModeEdit />
          Edit
        </button>
      </div>
    </div>
  );
};
