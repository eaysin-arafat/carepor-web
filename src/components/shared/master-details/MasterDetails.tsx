import CustomPagination from "@/components/core/custom-pagination/CustomPagination";
import Select from "@/components/core/form-elements/Select";
import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../table/Table";
import TableBody from "../table/TableBody";
import TableHeader from "../table/TableHeader";

type Props = {
  link: string;
  title?: string;
};

const MasterDetails = ({ link = "#" , title = "Add Encounter" }: Props) => {
  const [state, setState] = useState(1);
  return (
    <div className=" ">
      <div className="grid grid-cols-5 gap-5 mb-3">
        <Select label="Encounter Date"></Select>
        <Select label="Facility"></Select>
        <Select label="Clinician"></Select>
        <Select label="Cheif Complaints"></Select>
        <div className="flex items-end justify-end w-full">
          <Link
            //   to={URLOpdCreate()}
            to={link}
            className="px-2 py-3 bg-buttonBg w-full rounded-full text-center text-white"
          >
            {title}
          </Link>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="w-full mt-5 bg-whiteBgColor rounded-lg pb-5">
          <Table>
            <TableHeader
              isAction
              title={[
                {
                  title: "Encounter Date",
                  w: "10%",
                },
                {
                  title: "Clinician",
                  w: "20%",
                },
                {
                  title: "Facility",
                  w: "20%",
                },
                {
                  title: "Chief Complaints",
                  w: "20%",
                },
                {
                  title: "History of Chief Complaints",
                  w: "20%",
                },
                {
                  title: "Diagnosis",
                  w: "10%",
                },
              ]}
            />
            {data.map((item, index) => (
              <TableBody
                index={index}
                isAction
                btn={{
                  delete: true,
                }}
                item={[
                  { title: item.age, w: "10%" },
                  { title: item.age, w: "20%" },
                  { title: item.age, w: "20%" },
                  { title: item.age, w: "20%" },
                  { title: item.age, w: "20%" },
                  { title: item.age, w: "10%" },
                ]}
              />
            ))}
          </Table>
          <div className="flex justify-end me-5">
            <CustomPagination
              activePage={50}
              itemsCountPerPage={state}
              setActivePage={setState}
              totalItemsCount={1000}
              setItemPerPage={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterDetails;

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
    name: "orem ipsum dolor sit amet consectetur adipisicing elit. Maxime ",
    position: "Javascript Developer",
    office: "San Francisco",
    age: "39",
    date: "2009/09/15",
    salary: "$205,500",
  },
  {
    id: 10,
    name: "orem ipsum dolor sit amet e eiuseniet aliquid culpa officia aut! Impedit sit sunt quaerat",
    position: "Software Engineer",
    office: "Edinburgh",
    age: "23",
    date: "2008/12/13",
    salary: "$103,600",
  },
];
