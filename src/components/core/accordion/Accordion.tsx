// src/components/Accordion.js
import "animate.css";
import { useState } from "react";
import { ChevronDown, ChevronUp, PlusCircle } from "react-feather";

const Accordion = ({
  title = "Present Complaints",
  children,
  preActive = true,
  modalHandler = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(preActive);

  return (
    <div className="border rounded-md mb-2 overflow-hidden transition-shadow ease-in-out duration-300">
      <div className="flex items-center justify-between py-3 px-4">
        <h2 className="text-2xl font-medium font-poppins text-[#1E0E62]">
          {title}
        </h2>
        <div className="flex gap-6">
          {/* <button className="flex gap-1 items-center text-xs">
            <span className="text-[#1890FF]">View History</span>
            <span>
              <ChevronRight size={16} color="#1890FF" />
            </span>
          </button> */}
          <button
            className="flex items-center text-base gap-2 cursor-pointer "
            onClick={modalHandler}
          >
            <span>Add</span>
            <PlusCircle size={18} color="#1890FF" />
            {/* <span>Add</span> */}
          </button>
          <div
            className="flex items-center text-base gap-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Minimize</span>
            {/* <span className="bg-slate-200 rounded-full p-0.5">
              {isOpen ? <Minus size={16} /> : <Plus size={16} />}
            </span> */}
            <span className="bg-slate-200 rounded-full p-0.5 transition-all duration-300 ease-in-out">
              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </span>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`p-4 animate__animated animate__fadeInUp`}>
          {children}
        </div>
      )}
      {/* {isOpen && <div className={`px-4 pb-4 pt-2`}>{children}</div>} */}
    </div>
  );
};

export default Accordion;
