import Input from "@/components/core/form-elements/Input";
import Table from "@/components/core/table/Table";
import TableBody from "@/components/shared/table/TableBody";
import TableHeader from "@/components/shared/table/TableHeader";
import { firmModalTypes } from "@/constants/modal-types";
import useWindowWidth from "@/hooks/useWindow";
import { URLWards } from "@/routers/facility-settings";
import { cn } from "@/utilities/cn";
import { Loader, Plus } from "react-feather";
import { BiLeftArrowAlt } from "react-icons/bi";
import CreateFirm from "../create/Create";
import EditFirm from "../edit/Edit";
import useFirm from "./useFirm";

function Firms() {
  const w500 = useWindowWidth(500);

  const {
    addModal,
    editModal,
    firms,
    handleAddFirm,
    handleEditFirm,
    navigate,
    status,
    isSuccess,
    isLoading,
    handleFilter,
    handleSearchChange,
    search,
  } = useFirm();

  return (
    <div className="m-5 ">
      <h1 className="text-2xl mb-1 flex items-center gap-5">
        <BiLeftArrowAlt
          className="cursor-pointer"
          onClick={() => navigate(-1)}
          size={30}
        />
        Firms
      </h1>
      <div className=" border p-5 border-borderColor bg-whiteBgColor rounded-md">
        <div
          className={cn("grid grid-cols-4 gap-5 justify-between items-end", {
            "grid-cols-2 gap-2": w500,
          })}
        >
          <div className="col-span-3">
            <Input
              label="Search"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <button
            className="bg-primaryColor flex items-center gap-2 justify-center text-sm py-3.5 text-white rounded-md px-1"
            onClick={handleAddFirm}
          >
            <Plus /> Add Firms
          </button>
        </div>
        <div className="mt-5">
          <Table className="min-w-[700px]">
            <TableHeader
              className=""
              actionWidth="w-[150px]"
              isAction
              title={[
                {
                  title: "#",
                  w: "10%",
                  sortIcon: false,
                },
                {
                  title: "Department",
                  w: "20%",
                  sortIcon: true,
                },
                {
                  title: "Firm",
                  w: "50%",
                  sortIcon: true,
                },
              ]}
            />
            {/* EMPTY DATA MESSAGE */}
            {isSuccess && status === "fulfilled" && firms?.length === 0 && (
              <div className="flex justify-center items-center h-40">
                <p className="text-xl text-gray-500">No Firms Found</p>
              </div>
            )}

            {/* LOADING SPINNER */}
            {(isLoading || status === "pending") && (
              <div className="flex justify-center py-4">
                <Loader size={40} />
              </div>
            )}

            {/* TABLE DATA */}
            {firms
              ?.slice()
              ?.filter(handleFilter)
              ?.map((item, index) => (
                <TableBody
                  index={index}
                  actionWidth="w-[150px]"
                  isAction
                  btn={{
                    viewResult: "Wards",
                    btnOutline: "Edit",
                  }}
                  btnOutlineHandler={() => handleEditFirm(item)}
                  viewResultHandler={() =>
                    navigate(URLWards(item?.oid?.toString()))
                  }
                  item={[
                    { title: (index + 1).toString(), w: "10%" },
                    { title: item.department?.description, w: "20%" },
                    { title: item?.description, w: "50%" },
                  ]}
                />
              ))}
          </Table>
        </div>

        {/* ADD MODAL */}
        {addModal.isOpen && addModal?.modalId === firmModalTypes.addFirm && (
          <CreateFirm />
        )}

        {/* EDIT MODAL */}
        {editModal.isOpen && editModal?.modalId === firmModalTypes.editFirm && (
          <EditFirm />
        )}
      </div>
    </div>
  );
}

export default Firms;
