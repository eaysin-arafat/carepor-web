import { useState } from "react";
import { FaRegCircleCheck, FaRegCircleDot } from "react-icons/fa6";
import style from "../../../assets/styles/MultiStep.module.css";

function MultiStepComponent() {
  const [active, setActive] = useState(1);

  const n = 6;
  const lope = Array.from({ length: n - 2 }, (_, i) => i + 2);

  const handleBack = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  const handleNext = () => {
    if (active < n) {
      setActive(active + 1);
    }
  };

  return (
    <div className={style.test}>
      {/* //* Main HML */}
      <div className="flex justify-between items-center mt-20">
        <div className="flex items-center gap-[2px] mr-[2px]">
          {active > 1 ? (
            <FaRegCircleCheck
              size={50}
              color={active >= 1 ? "green" : "gray"}
            />
          ) : (
            <FaRegCircleDot size={50} color={active >= 1 ? "green" : "gray"} />
          )}
          <div
            className={`h-[10px] w-[200px] ${
              active >= 2 ? "bg-green-600" : "bg-gray-400"
            }`}
          />
        </div>

        {lope.map((e) => (
          <div className="flex items-center gap-[2px] mr-[2px]" key={e}>
            {active > e ? (
              <FaRegCircleCheck
                size={50}
                color={active >= e ? "green" : "gray"}
              />
            ) : (
              <FaRegCircleDot
                size={50}
                color={active >= e ? "green" : "gray"}
              />
            )}
            <div
              className={`h-[10px] w-[200px] ${
                active >= e + 1 ? "bg-green-600" : "bg-gray-400"
              }`}
            />
          </div>
        ))}

        <div className="flex items-center gap-[2px]">
          <FaRegCircleDot size={50} color={active >= n ? "green" : "gray"} />
        </div>
      </div>

      <div className="flex mt-5">
        <button className="btn bg-green-500" onClick={handleBack}>
          Back
        </button>
        <button className="btn bg-red-500" onClick={handleNext}>
          next
        </button>
      </div>
    </div>
  );
}

export default MultiStepComponent;
