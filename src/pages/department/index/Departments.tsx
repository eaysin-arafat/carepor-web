import Input from "@/components/core/form-elements/Input";
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
  const w800 = useWindowWidth(800);

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
    handleSearchChange,
    search,
    handleFilter,
  } = useDepartments();

  return (
    <div className="">
      <h1 className="text-2xl mb-1">Departments</h1>
      <div className=" border p-5 border-borderColor bg-whiteBgColor rounded-md">
        <div
          className={cn("grid grid-cols-4 gap-5 justify-between items-end", {
            "grid-cols-2 gap-2": w800,
          })}
        >
          <div
            className={cn("col-span-3", {
              "col-span-1": w800,
            })}
          >
            <Input
              label="Search"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <button
            className={cn(
              "bg-primaryColor flex items-center gap-2 justify-center text-sm py-3 text-white rounded-md px-1",
              { "text-[14px]": w800 }
            )}
            onClick={handleAddDepartment}
          >
            <Plus size={15} /> Add Departments
          </button>
        </div>
        <div className="mt-5">
          <Table className="min-w-[700px]">
            <TableHeader
              className=""
              actionWidth="w-[190px]"
              isAction
              title={[
                {
                  title: "#",
                  w: "10%",
                  // sortIcon: false,
                },
                {
                  title: "Department",
                  w: "90%",
                  // sortIcon: true,
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
            {departments
              ?.slice()
              ?.filter(handleFilter)
              ?.map((item, index) => (
                <TableBody
                  key={item?.oid}
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
                    { title: (index + 1).toString(), w: "10%" },
                    { title: item.description, w: "90%" },
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
