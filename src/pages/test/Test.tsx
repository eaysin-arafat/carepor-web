import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function Test() {
  const [state, setState] = useState(1);
  const data = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      date: "2011/04/25",
      salary: "$320,800",
    },
    {
      id: 2,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: "2011/07/25",
      salary: "$170,750",
    },
    {
      id: 3,
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      date: "2009/01/12",
      salary: "$86,000",
    },
    {
      id: 4,
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      date: "2012/03/29",
      salary: "$433,060",
    },
    {
      id: 5,
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      date: "2008/11/28",
      salary: "$162,700",
    },
    {
      id: 6,
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61",
      date: "2012/12/02",
      salary: "$372,000",
    },
    {
      id: 7,
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: "59",
      date: "2012/08/06",
      salary: "$137,500",
    },
    {
      id: 8,
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: "55",
      date: "2010/10/14",
      salary: "$327,900",
    },
    {
      id: 9,
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: "39",
      date: "2009/09/15",
      salary: "$205,500",
    },
    {
      id: 10,
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      age: "23",
      date: "2008/12/13",
      salary: "$103,600",
    },
  ];

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-full">
          <div className="overflow-x-auto">
            <div className="min-w-[900px] w-[1300px] border p-5">
              <div className="grid grid-cols-6 bg-primaryColor items-center">
                <p className="p-2 text-white text-xs font-bold flex items-center gap-1">
                  name
                  <div className="">
                    <button className="block">
                      <IoMdArrowDropup size={20} />
                    </button>
                    <button className="block p-0 mt-[-10px]">
                      <IoMdArrowDropdown size={20} />
                    </button>
                  </div>
                </p>
                <p className="p-2 text-white text-xs font-bold flex items-center gap-1">
                  Age
                  <div className="">
                    <button className="block">
                      <IoMdArrowDropup size={20} />
                    </button>
                    <button className="block p-0 mt-[-10px]">
                      <IoMdArrowDropdown size={20} />
                    </button>
                  </div>
                </p>
                <p className="p-2 text-white text-xs font-bold flex items-center gap-1">
                  Office
                  <div className="">
                    <button className="block">
                      <IoMdArrowDropup size={20} />
                    </button>
                    <button className="block p-0 mt-[-10px]">
                      <IoMdArrowDropdown size={20} />
                    </button>
                  </div>
                </p>
                <p className="p-2 text-white text-xs font-bold flex items-center gap-1">
                  Start Date
                  <div className="">
                    <button className="block">
                      <IoMdArrowDropup size={20} />
                    </button>
                    <button className="block p-0 mt-[-10px]">
                      <IoMdArrowDropdown size={20} />
                    </button>
                  </div>
                </p>
                <p className="p-2 text-white text-xs font-bold flex items-center gap-1">
                  Salary
                  <div className="">
                    <button className="block">
                      <IoMdArrowDropup size={20} />
                    </button>
                    <button className="block p-0 mt-[-10px]">
                      <IoMdArrowDropdown size={20} />
                    </button>
                  </div>
                </p>
                <p className="p-2 text-white text-xs font-bold w-[100px] sticky right-0 z-40 bg-primaryColor">
                  Action
                </p>
              </div>
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-6 items-center ${
                    index % 2 ? "bg-gray-200" : "bg-white"
                  }`}
                >
                  <p className="p-2 text-textColor text-xs">{item.name}</p>
                  <p className="p-2 text-textColor text-xs">{item.age} years</p>
                  <p className="p-2 text-textColor text-xs">{item.office}</p>
                  <p className="p-2 text-textColor text-xs">{item.position}</p>
                  <p className="p-2 text-textColor text-xs">{item.salary}</p>
                  <p
                    className={`p-2 text-textColor text-xs sticky w-[100px] right-0 z-40 ${
                      index % 2 ? "bg-gray-200" : "bg-white"
                    }`}
                  >
                    Action
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <CustomPagination
              activePage={50}
              itemsCountPerPage={1}
              setActivePage={setState}
              totalItemsCount={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
