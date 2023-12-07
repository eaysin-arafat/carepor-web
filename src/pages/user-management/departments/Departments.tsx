import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Table from "@/components/core/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import useWindowWidth from "@/hooks/useWindow";
import { URLFirms } from "@/routers/FacilitySettings";
import { cn } from "@/utilities/cn";
import { Plus } from "react-feather";
import { useNavigate } from "react-router-dom";

function Departments() {
  // * Hokes
  const navigate = useNavigate();
  const w500 = useWindowWidth(500);

  const handleEdit = () => {
    alert("Edit Department");
  };
  return (
    <div className="m-5 ">
      <h1 className="text-2xl mb-1">Departments</h1>
      <div className=" border p-5 border-borderColor bg-whiteBgColor rounded-md">
        <div
          className={cn("grid grid-cols-4 gap-5 justify-between items-end", {
            "grid-cols-2 gap-2": w500,
          })}
        >
          <Input label="Search" />
          <Select label="Facility">
            <option value="">Hello</option>
          </Select>
          <Select label="Designation">
            <option value="">Designation</option>
          </Select>
          <button className="bg-primaryColor  flex items-center gap-2 justify-center text-sm py-3.5 text-white rounded-md px-1">
            <Plus /> Add Departments
          </button>
        </div>
        <div className="mt-5">
          <Table className="min-w-[1000px]">
            <TableHeader
              className="bg-primaryHoverColor"
              actionWidth="w-[190px]"
              isAction
              title={[
                {
                  title: "User Name",
                  w: "20%",
                },
                {
                  title: "Designation",
                  w: "10%",
                },
                {
                  title: "Facility",
                  w: "30%",
                },
                {
                  title: "Cell Phone",
                  w: "20%",
                },
                {
                  title: "Contact Address",
                  w: "20%",
                },
              ]}
            />
            {data.map((item, index) => (
              <TableBody
                index={index}
                actionWidth="w-[190px]"
                isAction
                btn={{
                  viewResult: "Firms",
                  btnOutline: "Edit",
                }}
                btnOutlineHandler={handleEdit}
                viewResultHandler={() => navigate(URLFirms())}
                item={[
                  { title: item.name, w: "20%" },
                  { title: item.des, w: "10%" },
                  { title: item.facility, w: "30%" },
                  { title: item.number, w: "20%" },
                  { title: item.address, w: "20%" },
                ]}
              />
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Departments;

const data = [
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
  {
    id: 1,
    name: "John Smith",
    des: "Admin",
    facility: "Bauleni Mini Hospital",
    number: "+260 555555555",
    address: "5285258258",
  },
];
