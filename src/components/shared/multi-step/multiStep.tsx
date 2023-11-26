import { FaRegCircle, FaRegCircleCheck, FaRegCircleDot } from "react-icons/fa6";
import style from "../../../assets/styles/MultiStep.module.css";

function MultiStepComponent() {
  const lope = 10;

  let content = null;

  return (
    <div className={style.test}>
      {/* //* Main HML */}
      <div className="flex justify-between items-center mt-20">
        <div className="flex items-center gap-[2px] mr-[2px]">
          <FaRegCircleCheck size={50} color="green" />
          <div className="h-[10px] w-[200px] bg-green-600" />
        </div>
        <div className="flex items-center gap-[2px] mr-[2px]">
          <FaRegCircleDot size={50} color="red" />
          <div className="h-[10px] w-[200px] bg-gray-400" />
        </div>
        <div className="flex items-center gap-[2px]">
          <FaRegCircle size={50} color="gray" />
          <div className="h-[10px] w-[200px] bg-gray-400" />
        </div>
        <div className="flex items-center gap-[2px]">
          <FaRegCircle size={50} color="gray" />
        </div>
      </div>
    </div>
  );
}

export default MultiStepComponent;
