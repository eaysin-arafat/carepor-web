import { cn } from "@/utilities/cn";
import DataTable from "react-data-table-component";
import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Heart,
  PlusCircle,
} from "react-feather";
const handleButtonClick = (e) => {
  alert(e);
};

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Position",
    selector: (row) => row.position,
    sortable: true,
    // right: true,
  },
  {
    name: "Office",
    selector: (row) => row.office,
    sortable: true,
    // right: true,
  },
  {
    name: "Age",
    selector: (row) => row.age,
    sortable: true,
    // right: true,
  },
  {
    name: "Start date",
    selector: (row) => row.date,
    sortable: true,
    // right: true,
  },
  {
    name: "Salary",
    selector: (row) => row.salary,
    sortable: true,
    // right: true,
  },
  {
    cell: (row) => (
      <button
        onClick={handleButtonClick}
        className="flex items-center gap-2 whitespace-nowrap"
      >
        View Details <ChevronRight size={18} />
      </button>
    ),
    name: "Action",
    // selector: () => (
    //   <button onClick={handleButtonClick} className="flex items-center gap-2">
    //     View Details <ChevronRight size={18} />
    //   </button>
    // ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    style: {
      padding: "20px 30px",
    },
  },
];

const customStyles = {
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontSize: "18px",
      backgroundColor: "#EBEAED",
      borderRadius: "5px 5px 0px 0px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

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

const Item = () => {
  return (
    <div className="flex flex-col font-poppins">
      <div className="font-semibold text-[#1E0E62]">Date of Birth</div>
      <div className="flex gap-x-2 items-center">
        <span>
          <Calendar size={18} />
        </span>
        <span>3-Jan-1991</span>
      </div>
    </div>
  );
};

const SearchItem = () => {
  return (
    <div className="w-full space-y-1">
      <label htmlFor="encounterDate" className="inline-block pl-1">
        Encounter Date
      </label>
      <select
        id="encounterDate"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </div>
  );
};

const SdiebarItem = () => {
  return (
    <div className="space-y-2">
      <h1 className="flex items-center gap-2 font-medium font-poppins">
        <span className="inline-block p-1.5 rounded bg-gray-100">
          <Heart size={18} color="#1890FF" />
        </span>
        <span>HTC Status</span>
      </h1>
      <div className="flex gap-2">
        <p className="flex text-xs gap-1">
          <span className="whitespace-nowrap">Test Date:</span>
          <span className="whitespace-nowrap">14-Nov-2023</span>
        </p>
        <p className="flex text-xs gap-1">
          <span className="whitespace-nowrap">Test Date:</span>
          <span className="whitespace-nowrap">14-Nov-2023</span>
        </p>
        <p className="flex text-xs gap-1">
          <span className="whitespace-nowrap">Test Date:</span>
          <span className="whitespace-nowrap">14-Nov-2023</span>
        </p>
      </div>
    </div>
  );
};

const Investigation = () => {
  return (
    <div className={cn("px-5 py-6 w-full flex flex-col gap-y-5")}>
      <div className=" bg-[#1890FF1A] px-4 py-6  box_shadow flex">
        <div className="w-1/5 pl-2">
          <h1 className="text-2xl font-medium font-poppins text-[#1E0E62]">
            Chukwuebuka Nwachinemelu
          </h1>
        </div>
        <div className="w-4/5 flex justify-between items-center font-poppins">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <button className="flex items-center gap-2 bg-[#14AC10] px-5 py-2 text-white font-poppins text-lg rounded-full">
            <span>Actions</span>
            <span>
              <ChevronDown size={14} />
            </span>
          </button>
        </div>
      </div>
      <div className="w-full flex gap-4 items-start">
        <div className="w-3/4 space-y-4">
          <div className="">
            <h1 className="text-2xl font-poppins font-medium text-[#1E0E62]">
              History of Medical Encounter
            </h1>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <button className="flex self-end items-center p-2.5 gap-2 bg-[#1890FF] rounded-full text-white font-poppins">
              <PlusCircle size={18} />
              <span className="inline-block whitespace-nowrap">
                Add Encounter
              </span>
            </button>
          </div>
          <div>
            <DataTable
              columns={columns}
              data={data}
              customStyles={customStyles}
              pagination
            />
          </div>
        </div>
        <div className="space-y-4 border px-2 py-2 border-gray-100">
          <div>
            <h1 className="font-poppins text-xl pb-2.5 border-b">
              Recent Data Summary
            </h1>
          </div>
          <div className="flex flex-col gap-6">
            <SdiebarItem />
            <SdiebarItem />
            <SdiebarItem />
            <SdiebarItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investigation;
