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
    <div className="">
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
              actionWidth="w-20"
              title={[
                {
                  title: "Encounter Date",
                  w: "33%",
                },
                {
                  title: "Clinician",
                  w: "33%",
                },
                {
                  title: "Facility",
                  w: "33%",
                },
              ]}
            />
            {data.map((item, index) => (
              <TableBody
                index={index}
                isAction
                actionWidth="w-20"
                btn={{
                  show: true,
                }}
                item={[
                  { title: item.name, w: "33%" },
                  { title: item.position, w: "33%" },
                  { title: item.office, w: "33%" },
                ]}
              />
            ))}
          </Table>
          <div className="text-xs mx-5 mt-3">
            <h2 className="text-base font-medium">Diagnosis</h2>
            <p className="mt-2"><b>NTG Level Three Diagnosis : </b>Chronic Rheumatic heart Disease, nutritional anaemia,</p>
          </div>
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
    name: "test Chief Complaints",
    position: "TestHistory of Chief Complaints",
    office: "Serostatus and Disclosure",
    age: "61",
    date: "2011/04/25",
    salary: "$320,800",
  },
  {
    id: 1,
    name: "test Chief Complaints",
    position: "TestHistory of Chief Complaints",
    office: "Serostatus and Disclosure",
    age: "61",
    date: "2011/04/25",
    salary: "$320,800",
  },
  {
    id: 1,
    name: "test Chief Complaints",
    position: "TestHistory of Chief Complaints",
    office: "Serostatus and Disclosure",
    age: "61",
    date: "2011/04/25",
    salary: "$320,800",
  },
  {
    id: 1,
    name: "test Chief Complaints",
    position: "TestHistory of Chief Complaints",
    office: "Serostatus and Disclosure",
    age: "61",
    date: "2011/04/25",
    salary: "$320,800",
  },
  {
    id: 1,
    name: "test Chief Complaints",
    position: "TestHistory of Chief Complaints",
    office: "Serostatus and Disclosure",
    age: "61",
    date: "2011/04/25",
    salary: "$320,800",
  },
  
];
