import { ArrowLeft } from "react-feather";

const FormSubHeader = () => {
  return (
    <div className="flex justify-between items-center w-full px-5 py-4">
      <button>
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-secondaryColor text-xl font-medium text-center">
        Create New Medical Encounter
      </h1>
      <div></div>
    </div>
  );
};

export default FormSubHeader;
