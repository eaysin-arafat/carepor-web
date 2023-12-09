import { PlusCircle } from "react-feather";

const FormHeading = ({
  title = "Present Complaints",
  modalHandler = () => {},
}) => {
  return (
    <div className="border rounded-md mb-2 overflow-hidden transition-shadow ease-in-out duration-300">
      <div className="flex items-center justify-between py-3 px-4">
        <h2 className="text-2xl font-medium font-poppins text-[#1E0E62]">
          {title}
        </h2>
        <div className="flex gap-6">
          <button
            className="flex items-center text-base gap-2 cursor-pointer "
            onClick={modalHandler}
          >
            <span>Add</span>
            <PlusCircle size={18} color="#1890FF" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormHeading;
