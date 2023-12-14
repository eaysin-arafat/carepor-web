import { Plus } from "react-feather";

const FormHeading = ({
  title = "Present Complaints",
  modalHandler = () => {},
}) => {
  return (
    <div className="border bg-lightBlueColor rounded-md mb-0 overflow-hidden shadow-sm transition-shadow ease-in-out duration-300">
      <div className="flex items-center justify-between py-2 px-3">
        <h2 className="text-1xl font-medium font-poppins text-[#1E0E62]">
          {title}
        </h2>
        <button
          className="flex items-center text-base border p-1 px-3 rounded bg-primaryColor  gap-1 cursor-pointer "
          onClick={modalHandler}
        >
          <span className="text-[14px] text-white ">Add Record</span>
          <Plus size={15} color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default FormHeading;
