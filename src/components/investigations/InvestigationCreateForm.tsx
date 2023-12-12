import { cn } from "@/utilities/cn";
import { useState } from "react";
import DateInput from "../core/form-elements/DatePicker";
import Input from "../core/form-elements/Input";
import Select from "../core/form-elements/Select";
import Textarea from "../core/form-elements/textarea";

const InvestigationCreateForm = () => {
  const [toggle, setToggle] = useState("single");

  const handleToggle = (
    tab: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setToggle(tab);
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <button
          onClick={(e) => handleToggle("single", e)}
          className={cn(
            "main_btn w-full bg-whiteBgColor border rounded-e-none border-r border-borderColor rounded-s-md",
            { "bg-primaryColor": toggle === "single" }
          )}
        >
          Button
        </button>
        <button
          onClick={(e) => handleToggle("composite", e)}
          className={cn(
            "main_btn w-full bg-whiteBgColor border border-primaryColor rounded-s-none rounded-e-md",
            { "bg-primaryColor": toggle === "composite" }
          )}
        >
          Button
        </button>
      </div>
      <form>
        <div className="grid grid-cols-4 gap-5 my-5">
          <div className="col-span-4 md:col-span-2">
            <Select label="Test Type" required></Select>
          </div>
          <div className="col-span-4 md:col-span-2">
            <Select label="Sub Type" required></Select>
          </div>
          <div className="col-span-4">
            <Select label="Test" required></Select>
          </div>
          <div className="col-span-4 md:col-span-2 grid md:grid-cols-2 gap-2">
            <DateInput onChange={() => {}} label="Order Date" required />
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
              required
            />
          </div>
          <div className="col-span-4">
            <Textarea label="Comments" required />
          </div>
        </div>

      </form>
    </div>
  );
};

export default InvestigationCreateForm;

{/* <div className="border border-lightGrayColor p-5 rounded-lg mt-5 mb-10">
        <div className="border-lightGrayColor rounded-lg ">
          <h2 className="text-2xl font-semibold text-secondaryColor text-center mt-4">
            Admission Details
          </h2>
          <div className="bg-lightBlueColor rounded-lg h-fit p-4 mt-3 mb-5">
            <div className="flex flex-wrap gap-4 text-xs">
              <p>
                <span className="font-semibold">Admission Date : </span>
                28-Nov-2023
              </p>
              <p>
                <span className="font-semibold">Department : </span> Bauleni
                Mini Hospital
              </p>
              <p>
                <span className="font-semibold">Firm/Ward : </span> John Wick
              </p>
              <p>
                <span className="font-semibold">Operation Time :</span> John
                Wick
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
                <span className="font-semibold text-xs">
                  Notes :
                </span> ------{" "}
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
        </div>
      </div> */}