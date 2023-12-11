import Input from "@/components/core/form-elements/Input";
import Select from "@/components/core/form-elements/Select";
import Table from "@/components/core/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { departmentModalTypes } from "@/constants/modal-types";
import useWindowWidth from "@/hooks/useWindow";
import { URLFirms } from "@/routers/facility-settings";
import { cn } from "@/utilities/cn";
import { Loader, Plus } from "react-feather";
import CreateDepartment from "../create/Create";
import EditDepartment from "../edit/Edit";
import useDepartments from "./useDepartments";

function Departments() {
  const w500 = useWindowWidth(500);

  const {
    addModal,
    departments,
    editModal,
    handleAddDepartment,
    handleEdit,
    isLoading,
    navigate,
    status,
    isSuccess,
  } = useDepartments();

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
          <button
            className="bg-primaryColor  flex items-center gap-2 justify-center text-sm py-3.5 text-white rounded-md px-1"
            onClick={handleAddDepartment}
          >
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
                  title: "#",
                  w: "20%",
                  sortIcon: false,
                },
                {
                  title: "Department",
                  w: "77%",
                  sortIcon: true,
                },
              ]}
            />

            {/* EMPTY DATA MESSAGE */}
            {isSuccess &&
              status === "fulfilled" &&
              departments?.length === 0 && (
                <div className="flex justify-center items-center h-40">
                  <p className="text-xl text-gray-500">No Wards Found</p>
                </div>
              )}

            {/* LOADING SPINNER */}
            {(isLoading || status === "pending") && (
              <div className="flex justify-center items-center h-52">
                <Loader size={100} />
              </div>
            )}

            {/* TABLE DATA */}
            {departments?.map((item, index) => (
              <TableBody
                index={index}
                actionWidth="w-[190px]"
                isAction
                btn={{
                  viewResult: "Firms",
                  btnOutline: "Edit",
                }}
                btnOutlineHandler={() => handleEdit(item)}
                viewResultHandler={() =>
                  navigate(URLFirms(item?.oid?.toString()))
                }
                item={[
                  { title: (index + 1).toString(), w: "20%" },
                  { title: item.description, w: "70%" },
                ]}
              />
            ))}
          </Table>
        </div>
        {/* ADD DEPARTMENT MODAL */}
        {addModal?.modalId === departmentModalTypes.addDepartment && (
          <CreateDepartment />
        )}

        {/* EDIT DEPARTMENT MODAL */}
        {editModal?.modalId === departmentModalTypes.editDepartment && (
          <EditDepartment />
        )}
      </div>
    </div>
  );
}

export default Departments;
