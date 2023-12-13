import { BsTrash } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";

const InvestigationCartCard = () => {
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

export default InvestigationCartCard;
